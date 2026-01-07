"use client";

import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      // Initialize EmailJS with your public key (you'll need to add this to .env.local)
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS configuration is missing. Please check your environment variables.");
      }

      // Send email using EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          to_email: "contact@nualandalusia.com",
        },
        publicKey
      );

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      // Reset status after 5 seconds
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    } catch (error: any) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      setErrorMessage(
        error.text || "Failed to send message. Please try again or contact us directly."
      );
    }
  };

  return (
    <div>
      <h2 className="text-h2 mb-6 heading-underline">Send Us a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-navy-blue mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-deep-teal focus:outline-none transition-colors"
            disabled={status === "sending"}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-navy-blue mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-deep-teal focus:outline-none transition-colors"
            disabled={status === "sending"}
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-navy-blue mb-2">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-deep-teal focus:outline-none transition-colors"
            disabled={status === "sending"}
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-semibold text-navy-blue mb-2">
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-deep-teal focus:outline-none transition-colors"
            disabled={status === "sending"}
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-navy-blue mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-deep-teal focus:outline-none transition-colors resize-none"
            disabled={status === "sending"}
          />
        </div>

        {/* Status Messages */}
        {status === "success" && (
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center space-x-2 text-emerald-700">
            <CheckCircle className="w-5 h-5" />
            <span>Message sent successfully! We'll get back to you soon.</span>
          </div>
        )}

        {status === "error" && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-2 text-red-700">
            <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold">Error sending message</p>
              <p className="text-sm">{errorMessage}</p>
            </div>
          </div>
        )}

        <button
          type="submit"
          disabled={status === "sending"}
          className="btn-primary w-full flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "sending" ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>Send Message</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
