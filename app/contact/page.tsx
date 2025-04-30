import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <form className="w-full max-w-md space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border rounded shadow"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border rounded shadow"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 border rounded shadow h-32"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded font-semibold"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
