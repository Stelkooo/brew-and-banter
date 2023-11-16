import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function GET() {
  draftMode().enable();
  redirect(`/`);
}
