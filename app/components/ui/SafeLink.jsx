"use client";
import React from "react";
import Link from "next/link";

const SafeLink = ({ href, children, ...props }) => {
  // Ensure href is always a valid string
  const safeHref = React.useMemo(() => {
    // If href is undefined, null, or empty, return "#"
    if (!href || href === undefined || href === null || href === "") {
      return "#";
    }
    
    // If href is already a string, validate it
    if (typeof href === "string") {
      // If it's a problematic string, return "#"
      if (href === "undefined" || href === "/services/undefined" || href === "/services/") {
        return "#";
      }
      return href;
    }
    
    // If href is an object with pathname, use it
    if (typeof href === "object" && href.pathname) {
      return href;
    }
    
    // Fallback to "#"
    return "#";
  }, [href]);

  // Debug: log if href is invalid
  if (!href || href === undefined || href === null || href === "" || href === "#" || href === "/services/undefined" || href === "/services/") {
    // eslint-disable-next-line no-console
    console.error("[SafeLink] Invalid href detected:", { href, safeHref, props });
  }

  // Final safety check - ensure safeHref is never undefined
  const finalHref = safeHref || "#";

  return (
    <Link href={finalHref} {...props}>
      {children}
    </Link>
  );
};

export default SafeLink; 