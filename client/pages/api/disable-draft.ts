"use server";

import type { NextApiRequest, NextApiResponse } from "next";

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   res.setDraftMode({ isEnabled: false });
//   res.writeHead(307, { Location: "/blog" });
//   res.end();
// }

import { draftMode } from "next/headers";

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setDraftMode({ enable: false });
  return new Response(null, {
    status: 307,
    headers: {
      Location: "/blog",
    },
  });
}

export default handler;
