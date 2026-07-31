import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Legal Notice | Sunbeds",
  description: "Legal information about Sunbeds.",
};

export default function Page() {
  return <PlaceholderPage title="Legal Notice" description="Legal information about Sunbeds." />;
}
