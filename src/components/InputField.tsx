"use client";

import React from "react";

interface InputFieldProps {
  label: string;
  id: string;
  type?: "text" | "email" | "password" | "textarea";
  placeholder?: string;
  required?: boolean;
  rows?: number;
  className?: string;
}

export default function InputField({
  label,
  id,
  type = "text",
  placeholder = "",
  required = false,
  rows = 5,
  className = "",
}: InputFieldProps) {
  const baseStyles =
    "w-full px-4 py-3 rounded-lg border border-[var(--border-color)] focus:ring-2 focus:ring-[var(--accent-primary)] focus:border-[var(--accent-primary)] bg-[var(--background-tertiary)] text-[var(--foreground-primary)]";

  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-[var(--foreground-secondary)] mb-1"
      >
        {label}
        {required && <span className="text-[var(--error-color)]">*</span>}
      </label>

      {type === "textarea" ? (
        <textarea
          id={id}
          rows={rows}
          className={baseStyles}
          placeholder={placeholder}
          required={required}
        />
      ) : (
        <input
          type={type}
          id={id}
          className={baseStyles}
          placeholder={placeholder}
          required={required}
        />
      )}
    </div>
  );
}
