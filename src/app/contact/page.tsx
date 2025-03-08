"use client";

import React from "react";
import PageTransition from "@/components/PageTransition";
import Button from "@/components/Button";
import InputField from "@/components/InputField";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/utils/animationVariants";

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-16">
        {/* Contact Section */}
        <section className="py-20 px-4 gradient-deep">
          <div className="max-w-4xl mx-auto relative z-10">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-10 text-center text-[var(--foreground-primary)]"
              variants={itemVariants}
            >
              Get In Touch
            </motion.h2>
            <motion.div
              className="card bg-[var(--background-tertiary)] p-8 rounded-xl shadow-xl border border-[var(--border-color)]"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              transition={{
                staggerChildren: 0.05,
                delayChildren: 0.05,
              }}
            >
              <motion.form className="space-y-6" variants={containerVariants}>
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  variants={itemVariants}
                >
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
                </motion.div>
                <motion.div variants={itemVariants}>
                  <InputField
                    label="Message"
                    id="message"
                    type="textarea"
                    placeholder="Your message"
                    required
                    rows={5}
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Button type="submit" variant="primary" className="w-full">
                    Send Message
                  </Button>
                </motion.div>
              </motion.form>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
