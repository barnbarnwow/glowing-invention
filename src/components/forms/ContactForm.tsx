"use client";

import React, { useState } from "react";
import { Button } from "../ui/Button";

interface ContactFormProps {
  className?: string;
}

export function ContactForm({ className = "" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // In a real app, you would send the data to your API here
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   body: JSON.stringify(formData),
      //   headers: { 'Content-Type': 'application/json' },
      // });

      // if (!response.ok) throw new Error('Something went wrong');

      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setError("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className={`bg-gray-100 p-6 dark:bg-gray-800 ${className}`}>
        <h3 className="text-xl font-sans uppercase mb-4">
          Thanks for your message!
        </h3>
        <p className="mb-4">We'll get back to you as soon as possible.</p>
        <Button onClick={() => setSubmitted(false)} variant="primary">
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="grid gap-6 mb-6">
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-sans uppercase tracking-wider"
          >
            Your Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border-2 border-black bg-white text-black dark:border-white dark:bg-gray-900 dark:text-white"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-sans uppercase tracking-wider"
          >
            Your Email <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border-2 border-black bg-white text-black dark:border-white dark:bg-gray-900 dark:text-white"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-sans uppercase tracking-wider"
          >
            Your Message <span className="text-red-600">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full p-3 border-2 border-black bg-white text-black dark:border-white dark:bg-gray-900 dark:text-white"
          />
        </div>
      </div>

      {error && <p className="text-red-600 mb-4">{error}</p>}

      <Button
        type="submit"
        disabled={isSubmitting}
        isLoading={isSubmitting}
        fullWidth
      >
        Send Message
      </Button>
    </form>
  );
}
