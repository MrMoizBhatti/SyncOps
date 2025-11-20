"use client";

import { useEffect } from "react";
import Prism from "prismjs";

export default function CodeBlock({ className = "", children }) {
  useEffect(() => {
    Prism.highlightAll(); // Apply syntax highlighting after rendering
  }, []);

  const language = className.replace("language-", ""); // Extract language from class

  // Ensure highlighting only applies when a language is defined
  return (
    <pre className={className}>
      <code className={`language-${language}`}>{children}</code>
    </pre>
  );
}
