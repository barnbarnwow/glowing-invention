"use client";

import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Grid } from "@/components/layout/Grid";
import { ContactForm } from "@/components/forms/ContactForm";

export default function ContactPage() {
  return (
    <>
      <Section padding="md" background="white">
        <Heading level={1} align="center">
          Get In Touch
        </Heading>
        <Text variant="lead" align="center" className="max-w-2xl mx-auto mb-12">
          Have a project in mind or want to chat? I'd love to hear from you.
        </Text>

        <Grid cols={1} colsMd={2} gap="lg" className="max-w-5xl mx-auto">
          <div>
            <Heading level={3}>Contact Information</Heading>
            <Text>
              Feel free to reach out using the form or through my contact
              details below.
            </Text>

            <div className="mt-8 space-y-4">
              <div>
                <Text
                  variant="small"
                  className="uppercase font-sans tracking-wider"
                >
                  Email
                </Text>
                <a
                  href="mailto:hello@example.com"
                  className="text-lg block font-serif"
                >
                  hello@example.com
                </a>
              </div>

              <div>
                <Text
                  variant="small"
                  className="uppercase font-sans tracking-wider"
                >
                  Location
                </Text>
                <Text className="text-lg">New York, NY</Text>
              </div>

              <div>
                <Text
                  variant="small"
                  className="uppercase font-sans tracking-wider"
                >
                  Social Media
                </Text>
                <div className="flex space-x-4 mt-2">
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black dark:text-white hover:opacity-70 transition-opacity"
                  >
                    Twitter
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black dark:text-white hover:opacity-70 transition-opacity"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black dark:text-white hover:opacity-70 transition-opacity"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </Grid>
      </Section>
    </>
  );
}
