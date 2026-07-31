import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "FAQs | Sunbeds",
  description: "Answers to the most common questions about Sunbeds.",
};

export default function Page() {
  return <PlaceholderPage title="FAQs" description="Answers to the most common questions about Sunbeds." />;
}
