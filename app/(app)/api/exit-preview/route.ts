import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';

// eslint-disable-next-line import/prefer-default-export
export async function GET() {
  draftMode().disable();
  redirect(`/`);
}
