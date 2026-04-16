"use client";

import { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";

// ✅ Proper type for Razorpay response
type RazorpayResponse = {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
};

function PaymentContent() {
  const params = useSearchParams();
  const router = useRouter();

  const name = params.get("name") || "";
  const email = params.get("email") || "";
  const amount = params.get("amount") || "";

  const handlePayment = async () => {
    try {
      const res = await fetch("/api/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // ✅ important
        },
        body: JSON.stringify({ amount }),
      });

      const order = await res.json();

      if (!order || !order.id) {
        alert("Failed to create order");
        return;
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: "INR",
        order_id: order.id,
        name: "Ethan Racing",
        description: "Donation Payment",

        // ✅ FIXED HANDLER (removed extra bracket)
        handler: async function (response: RazorpayResponse) {
          const verifyRes = await fetch("/api/verify-payment", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(response),
          });

          const data = await verifyRes.json();

          if (data.success) {
            router.push(
              `/payment-success?name=${name}&amount=${amount}&paymentId=${response.razorpay_payment_id}`
            );
          } else {
            alert("Payment verification failed");
          }
        },

        theme: {
          color: "#e10600",
        },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();

    } catch (err) {
      console.error(err);
      alert("Payment failed. Try again.");
    }
  };

  return (
    <div className="sponsor-page">
      <h1>Complete Payment</h1>

      <p>Please review your details before proceeding.</p>

      <h2>Payment Summary</h2>

      <ul>
        <li>Name: {name}</li>
        <li>Email: {email}</li>
        <li>Amount: ₹{amount}</li>
      </ul>

      {/* RAZORPAY BUTTON */}
      <button onClick={handlePayment}>
        Pay Now
      </button>

      {/* QR SECTION */}
      <div style={{ marginTop: "40px" }}>
        <h2>Or Pay via UPI</h2>

        <p>Scan the QR code below using any UPI app</p>

        <img
          src="/qr-code.png"
          alt="UPI QR Code"
          style={{
            width: "220px",
            margin: "20px auto",
            display: "block",
            borderRadius: "12px",
          }}
        />

        <p style={{ fontSize: "14px", opacity: 0.7 }}>
          After payment, click below to confirm
        </p>

        <button
          onClick={() =>
            router.push(
              `/payment-success?name=${name}&amount=${amount}`
            )
          }
          style={{ marginTop: "10px" }}
        >
          I Have Paid
        </button>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <PaymentContent />
    </Suspense>
  );
}