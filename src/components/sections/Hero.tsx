"use client";

import React from "react";
import { Section } from "../layout/Section";
import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";
import { Button } from "../ui/Button";

interface HeroProps {
  title: string;
  subtitle?: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  align?: "left" | "center";
  className?: string;
}

export function Hero({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  align = "center",
  className = "",
}: HeroProps) {
  return (
    <Section padding="lg" background="white" className={className}>
      <div
        className={`flex flex-col ${
          align === "center" ? "items-center text-center" : "items-start"
        }`}
      >
        <Heading level={1} variant="display" align={align}>
          {title}
        </Heading>

        {subtitle && (
          <Text
            variant="lead"
            align={align}
            className={align === "center" ? "max-w-2xl mx-auto" : "max-w-2xl"}
          >
            {subtitle}
          </Text>
        )}

        {(primaryCta || secondaryCta) && (
          <div
            className={`mt-8 flex flex-wrap gap-4 ${
              align === "center" ? "justify-center" : ""
            }`}
          >
            {primaryCta && (
              <Button href={primaryCta.href} size="large">
                {primaryCta.text}
              </Button>
            )}

            {secondaryCta && (
              <Button href={secondaryCta.href} variant="outline" size="large">
                {secondaryCta.text}
              </Button>
            )}
          </div>
        )}
      </div>
    </Section>
  );
}
