import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import BorderGlow from "../components/BorderGlow";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("meevodop");

  if (state.succeeded) {
    window.location.href = "/thank-you";
  }

  return (
    <>
      {/* Center Wrapper */}
      <div className="flex justify-center items-center min-h-svh px-4 overflow-hidden">

        {/* BorderGlow Wrapper */}
        <BorderGlow className="cursor-pointer w-full max-w-md p-8 rounded-3xl" borderRadius={28}>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <h2 className="text-2xl font-display text-(--text-h) mb-2">
              Send a Message
            </h2>

            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className=" border border-(--border) p-3 rounded-lg text-(--text-h) focus:border-(--accent-border) outline-none"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />

            <input
              id="email"
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className=" border border-(--border) p-3 rounded-lg text-(--text-h) focus:border-(--accent-border) outline-none"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />

            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              className=" border border-(--border) p-3 rounded-lg text-(--text-h) focus:border-(--accent-border) outline-none resize-none overflow-y-auto"
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />

            <button
              type="submit"
              disabled={state.submitting}
              className="hover:opacity-90 inline-flex items-center justify-center gap-2 bg-(--accent-bg) text-(--accent) border px-6 py-3 rounded-xl font-semibold text-base hover:text-(--text-h) transition  cursor-pointer
              "
            >
              {state.submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </BorderGlow>
      </div>
    </>
  );
}
