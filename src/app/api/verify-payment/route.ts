import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: Request) {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    await req.json();

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
    .update(body)
    .digest("hex");

  const isValid = expectedSignature === razorpay_signature;

  return NextResponse.json({ success: isValid });
}