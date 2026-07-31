import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Sunbeds",
  description: "How Sunbeds handles your personal data.",
};

export default function Page() {
  return <PlaceholderPage title="Privacy Policy" description="How Sunbeds handles your personal data." />;
}
