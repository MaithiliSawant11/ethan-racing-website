"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import jsPDF from "jspdf";

function SuccessContent() {
  const params = useSearchParams();

  const name = params.get("name");
  const amount = params.get("amount");
  const paymentId = params.get("paymentId") || "N/A";

  const date = new Date().toLocaleDateString();

  const downloadReceipt = () => {
    const doc = new jsPDF();

    // TITLE
    doc.setFontSize(18);
    doc.text("Ethan Racing", 20, 20);

    doc.setFontSize(14);
    doc.text("Payment Receipt", 20, 30);

    // LINE
    doc.line(20, 35, 190, 35);

    // DETAILS
    doc.setFontSize(12);
    doc.text(`Name: ${name}`, 20, 50);
    doc.text(`Amount Paid: ₹${amount}`, 20, 60);
    doc.text(`Payment ID: ${paymentId}`, 20, 70);
    doc.text(`Date: ${date}`, 20, 80);

    // FOOTER
    doc.text(
      "Thank you for supporting Ethan Racing!",
      20,
      100
    );

    doc.save("Ethan-Racing-Receipt.pdf");
  };

  return (
    <div className="sponsor-page">
      <h1>Payment Successful 🎉</h1>

      <p>Thank you for your support!</p>

      <h2>Transaction Details</h2>

      <ul>
        <li>Name: {name}</li>
        <li>Amount Paid: ₹{amount}</li>
        <li>Payment ID: {paymentId}</li>
        <li>Date: {date}</li>
      </ul>

      <button onClick={downloadReceipt}>
        Download Receipt
      </button>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <SuccessContent />
    </Suspense>
  );
}