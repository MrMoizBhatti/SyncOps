"use client";
import dynamic from "next/dynamic";

// Dynamically import FloatingCTA with no SSR to prevent hydration issues
const FloatingCTA = dynamic(() => import("./FloatingCTA"), {
  ssr: false,
  loading: () => null,
});

export default function ClientFloatingCTA() {
  return <FloatingCTA />;
} 