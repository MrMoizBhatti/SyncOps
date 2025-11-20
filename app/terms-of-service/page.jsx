import TermsOfServiceContent from "./_components/TermsOfServiceContent";

export const metadata = {
  title: "Terms of Service - SyncOps | Legal Terms & Conditions",
  description: "Read SyncOps' Terms of Service to understand the terms and conditions governing your use of our website and services.",
  keywords: "terms of service, terms and conditions, legal terms, SyncOps, user agreement, service agreement",
  openGraph: {
    title: "Terms of Service - SyncOps",
    description: "Read SyncOps' Terms of Service to understand the terms and conditions governing your use of our website and services.",
    type: "website",
    url: "https://syncops.tech/terms-of-service",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service - SyncOps",
    description: "Read SyncOps' Terms of Service to understand the terms and conditions governing your use of our website and services.",
  },
};

const TermsOfServicePage = () => {
  return (
    <main className="min-h-screen bg-[#0B0A1C]">
      <TermsOfServiceContent />
    </main>
  );
};

export default TermsOfServicePage;

