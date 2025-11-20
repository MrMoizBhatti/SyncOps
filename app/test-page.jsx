"use client";
import SafeLink from "./components/ui/SafeLink";

export default function TestPage() {
  return (
    <div className="p-8">
      <h1>Test Page</h1>
      <SafeLink href="/">Home</SafeLink>
      <br />
      <SafeLink href="/about">About</SafeLink>
      <br />
      <SafeLink href="/contact">Contact</SafeLink>
    </div>
  );
} 