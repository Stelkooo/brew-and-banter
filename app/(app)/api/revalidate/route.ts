import { revalidateTag } from 'next/cache';
import { type NextRequest, NextResponse } from 'next/server';
import { parseBody } from 'next-sanity/webhook';

// eslint-disable-next-line import/prefer-default-export
export async function POST(req: NextRequest) {
  try {
    const { isValidSignature, body } = await parseBody<{
      _type: string;
    }>(req, process.env.SANITY_REVALIDATE_SECRET);

    if (!isValidSignature) {
      const message = 'Invalid signature';
      return new Response(JSON.stringify({ message, isValidSignature, body }), {
        status: 401,
      });
    }

    if (!body?._type) {
      const message = 'Bad Request';
      return new Response(JSON.stringify({ message, body }), { status: 400 });
    }

    const tagsToRevalidate = [];

    switch (body._type) {
      case 'home':
        tagsToRevalidate.push('home');
        break;
      case 'page':
        tagsToRevalidate.push('page');
        break;
      case 'blog':
        tagsToRevalidate.push('blog', 'home', 'page');
        break;
      case 'footerSettings':
        tagsToRevalidate.push('site', 'home', 'page', 'blog');
        break;
      case 'headerSettings':
        tagsToRevalidate.push('site', 'home', 'page', 'blog');
        break;
      default:
        break;
    }

    // If the `_type` is `page`, then all `client.fetch` calls with
    // `{next: {tags: ['page']}}` will be revalidated
    tagsToRevalidate.forEach((tag) => revalidateTag(tag));

    return NextResponse.json({ body });
  } catch (err) {
    console.error(err);
    if (err instanceof Error) return new Response(err.message, { status: 500 });
  }
}
