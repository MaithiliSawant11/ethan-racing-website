import { writeClient } from "@/sanity/lib/writeClient";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const doc = {
      _type: "sponsor",
      companyName: body.companyName,
      contactPerson: body.contactPerson,
      email: body.email,
      phone: body.phone,
      message: body.message,
    };

    await writeClient.create(doc);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}