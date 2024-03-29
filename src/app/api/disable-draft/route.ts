import { draftMode } from "next/headers";

export async function GET(request: Request) {
  draftMode().disable();
  return new Response(null, {
    status: 307,
    headers: {
      Location: "/blog",
    },
  });
}
