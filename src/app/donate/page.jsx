"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DonatePage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    amount: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    router.push(
      `/payment?name=${form.name}&email=${form.email}&amount=${form.amount}`
    );
  };

  return (
    <div className="sponsor-page">
      
      <h1>Support Ethan Racing</h1>

      <p>
        Your contribution helps Ethan Racing design, manufacture, and compete
        in Formula Student competitions. Every donation directly supports
        innovation, teamwork, and engineering excellence.
      </p>

      <h2>Why Donate?</h2>

      <ul>
        <li>Support student engineering innovation</li>
        <li>Help build and race Formula Student cars</li>
        <li>Encourage future motorsport talent</li>
        <li>Be a part of our journey</li>
      </ul>

      <h2>Donation Details</h2>

      <form className="sponsor-form" onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Full Name"
          required
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          type="email"
          placeholder="Email Address"
          required
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          type="number"
          placeholder="Donation Amount (₹)"
          required
          onChange={(e) =>
            setForm({ ...form, amount: e.target.value })
          }
        />

        <button type="submit">
          Proceed to Payment
        </button>

      </form>

    </div>
  );
}