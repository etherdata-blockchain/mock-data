import { NextRequest, NextResponse, NextFetchEvent } from "next/server";

export default (req: NextRequest, event: NextFetchEvent) => {

  return NextResponse.json({
    name: `Hello, from ${req.url} I'm now an Edge Function!`,
  });
};

export const config = {
  runtime: "experimental-edge",
};
