"use client";

import React, { useState } from "react";
import Section from "../ui/Section";
import Main from "../ui/Main";
import H2 from "../ui/H2";
import P from "../ui/P";
import { Button } from "../ui/Button";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Status = "idle" | "loading" | "success" | "error";

const Contact = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-[#F7F5F2] border border-[#D8D3CC] text-[#1B3A6B] placeholder:text-[#1B3A6B]/50 rounded-md py-3 px-4 mb-4 focus:outline-none focus:border-[#1B3A6B]/60 focus:bg-white transition-all duration-150";
	
  return (
    <Section className="mb-0">
      <Main
        data-aos="fade-up"
        className="bg-white shadow-lg border border-[#E5E0D8] rounded-xl backdrop-blur-md p-6 md:p-10"
      >
        {/* title */}
        <H2>Get In Touch</H2>

        {/* description */}
        <P className="max-w-2xl mx-auto">
          Have questions, or Want to partner? Send Us an Email.
        </P>

        {/* Success message */}
        {status === "success" && (
          <div className="max-w-3xl mx-auto mb-6 bg-white/20 border border-white/30 text-white rounded-md px-4 py-3 text-sm text-center">
            ✅ Message sent! We'll get back to you shortly.
          </div>
        )}

        {/* Error message */}
        {status === "error" && (
          <div className="max-w-3xl mx-auto mb-6 bg-red-500/20 border border-red-400/40 text-white rounded-md px-4 py-3 text-sm text-center">
            ❌ {errorMsg}
          </div>
        )}

        {/* Form */}
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-6">
          {/* Left column */}
          <div>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className={inputClass}
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className={inputClass}
            />
            <input
              name="subject"
              type="text"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          {/* Right column */}
          <div className="flex flex-col">
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className={`${inputClass} flex-1 min-h-[160px] resize-none mb-4`}
            />
          </div>
        </div>

        {/* Submit */}
        <div className="flex items-center justify-center max-w-3xl mx-auto">
          <Button
            onClick={handleSubmit}
            loading={status === "loading"}
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </Button>
        </div>
      </Main>
    </Section>
  );
};

export default Contact;
