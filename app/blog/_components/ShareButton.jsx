"use client";
import React, { useState } from "react";
import { Share2, CheckCircle } from "lucide-react";

const ShareButton = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      })
      .catch((error) => {
        console.error("Failed to copy URL to clipboard", error);
      });
  };

  return (
    <>
      <button
        className="text-gray-600 hover:text-[#0fbab1] transition-colors"
        onClick={handleCopy}
      >
        <Share2 size={20} />
      </button>

      {copied && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-[#0fbab1] text-white px-4 py-2 rounded flex items-center shadow-lg z-50">
          <CheckCircle size={20} className="mr-2 text-white" />
          Link Copied!
        </div>
      )}
    </>
  );
};

export default ShareButton;
