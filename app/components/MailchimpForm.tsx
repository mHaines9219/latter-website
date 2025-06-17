"use client";
import { useState } from "react";

export default function MailchimpForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const MAILCHIMP_URL =
    "https://gmail.us13.list-manage.com/subscribe/post?u=375950b39b801066fea9e6762&id=53097415f5";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;

    // Mailchimp requires a plain POST request, so we build a form and submit it
    const form = document.createElement("form");
    form.action = MAILCHIMP_URL;
    form.method = "POST";
    form.target = "_blank";

    const input = document.createElement("input");
    input.type = "email";
    input.name = "EMAIL";
    input.value = email;
    form.appendChild(input);

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
    setStatus("success");
  };

  return (
    <div
      id="mc_embed_signup"
      className="max-w-md mx-auto p-6 bg-black rounded-lg  shadow-md"
    >
      <form onSubmit={handleSubmit} noValidate className="space-y-4 font-anton">
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          SIGN UP FOR OUR EMAIL LIST{" "}
        </h2>

        <div className="space-y-2 ">
          <label
            htmlFor="email"
            className="block text-sm text-center font-medium text-white"
          >
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="EMAIL"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border text-center bg-black border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
            placeholder="Enter your email"
          />
        </div>

        {/* Honeypot */}
        <div
          style={{ position: "absolute", left: "-5000px" }}
          aria-hidden="true"
        >
          <input
            type="text"
            name="b_375950b39b801066fea9e6762_53097415f5"
            tabIndex={-1}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#005c46] text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium"
        >
          SUBSCRIBE
        </button>

        {status === "success" && (
          <p className="text-green-600 text-center mt-2 font-medium">
            Thanks for subscribing!
          </p>
        )}
      </form>
    </div>
  );
}
