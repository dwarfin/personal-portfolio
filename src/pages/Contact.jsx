import React from "react";
import Beams from "../components/Beams";
import { useForm, ValidationError } from "@formspree/react";
import BorderGlow from "../components/BorderGlow";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("meevodop");

  if (state.succeeded) {
    window.location.href = "/thank-you";
  }

  return (
    <>
      {/* Background Beams */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <Beams
          beamWidth={3}
          beamHeight={30}
          lightColor="#ffefdd"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={30}
        />
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      </div>

      {/* Center Wrapper */}
      <div className="flex justify-center items-center min-h-screen px-4">

        {/* BorderGlow Wrapper */}
        <BorderGlow edgeSensitivity={10} glowColor="40 80 80" backgroundColor="" borderRadius={28}
            glowRadius={40} glowIntensity={1} coneSpread={40} animated={false}
            colors={['#c084fc', '#f472b6', '#38bdf8']} className="w-full max-w-lg backdrop-blur-md" >
          {/* Form Container */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 p-8 rounded-3xl backdrop-blur-xl"
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
              className="px-4 py-3 rounded-lg bg-(--accent-bg) text-(--text-h) font-medium hover:opacity-90 transition cursor-target"
            >
              {state.submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </BorderGlow>
      </div>
    </>
  );
}
