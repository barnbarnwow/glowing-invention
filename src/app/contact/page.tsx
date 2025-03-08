import React from "react";
import PageTransition from "@/components/PageTransition";
import Button from "@/components/Button";
import InputField from "@/components/InputField";

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-16">
        {/* Contact Section */}
        <section className="py-20 px-4 texture">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-[var(--foreground-primary)]">
              Get In Touch
            </h2>
            <div className="card bg-[var(--background-tertiary)] p-8 rounded-xl shadow-xl border border-[var(--border-color)]">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField
                    label="Name"
                    id="name"
                    type="text"
                    placeholder="Your name"
                    required
                  />
                  <InputField
                    label="Email"
                    id="email"
                    type="email"
                    placeholder="Your email"
                    required
                  />
                </div>
                <InputField
                  label="Message"
                  id="message"
                  type="textarea"
                  placeholder="Your message"
                  required
                  rows={5}
                />
                <Button type="submit" variant="primary" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
