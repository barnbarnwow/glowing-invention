"use client";

import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Grid } from "@/components/layout/Grid";
import { Hero } from "@/components/sections/Hero";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Modern Portfolio"
        subtitle="A clean, minimal portfolio template built with Next.js and Tailwind CSS. Fully responsive and dark mode ready."
        primaryCta={{ text: "View Projects", href: "/projects" }}
        secondaryCta={{ text: "Contact Me", href: "/contact" }}
      />

      {/* Featured Projects */}
      <Section padding="md" background="light">
        <Heading level={2} align="center">
          Featured Projects
        </Heading>
        <Text variant="lead" align="center" className="max-w-2xl mx-auto mb-12">
          Here are some of my recent projects that showcase my skills and
          expertise.
        </Text>

        <Grid cols={1} colsMd={2} colsLg={3} gap="md">
          {[1, 2, 3].map((i) => (
            <Card key={i} hover variant="default" padding="medium">
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 mb-4"></div>
              <Heading level={3} uppercase={false}>
                Project {i}
              </Heading>
              <Text>
                A brief description of this project and the technologies used to
                build it.
              </Text>
              <div className="mt-4">
                <Button href={`/projects/${i}`} size="small">
                  View Details
                </Button>
              </div>
            </Card>
          ))}
        </Grid>
      </Section>

      {/* About Section */}
      <Section padding="md" background="white">
        <Grid cols={1} colsMd={2} gap="lg">
          <div>
            <Heading level={2}>About Me</Heading>
            <Text variant="lead">
              I'm a passionate developer focused on creating beautiful,
              functional websites and applications.
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
              dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed
              auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in
              nulla enim.
            </Text>
            <Text>
              Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer
              euismod lacus luctus magna. Quisque cursus, metus vitae pharetra
              auctor, sem massa mattis sem, at interdum magna augue eget diam.
            </Text>
            <div className="mt-6">
              <Button href="/about">Learn More</Button>
            </div>
          </div>
          <div className="bg-gray-200 dark:bg-gray-700 min-h-[300px] flex items-center justify-center">
            <span className="text-gray-500 dark:text-gray-400">
              Profile Image
            </span>
          </div>
        </Grid>
      </Section>

      {/* Contact CTA */}
      <Section padding="md" background="dark">
        <div className="text-center">
          <Heading level={2}>Let's Work Together</Heading>
          <Text variant="lead" className="max-w-2xl mx-auto">
            Interested in working together? Let's discuss your project and see
            how I can help.
          </Text>
          <div className="mt-8">
            <Button href="/contact" size="large">
              Get in Touch
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
