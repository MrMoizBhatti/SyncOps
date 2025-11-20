import PrivacyPolicyContent from "./_components/PrivacyPolicyContent";

export const metadata = {
  title: "Privacy Policy - SyncOps | Data Protection & Privacy",
  description: "Read SyncOps' Privacy Policy to understand how we collect, use, and protect your personal information and data.",
  keywords: "privacy policy, data protection, privacy, SyncOps, GDPR, data security, personal information",
  openGraph: {
    title: "Privacy Policy - SyncOps",
    description: "Read SyncOps' Privacy Policy to understand how we collect, use, and protect your personal information.",
    type: "website",
    url: "https://syncops.tech/privacy-policy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy - SyncOps",
    description: "Read SyncOps' Privacy Policy to understand how we collect, use, and protect your personal information.",
  },
};

const PrivacyPolicyPage = () => {
  return (
    <main className="min-h-screen bg-[#0B0A1C]">
      <PrivacyPolicyContent />
    </main>
  );
};

export default PrivacyPolicyPage;

