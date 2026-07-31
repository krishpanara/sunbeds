import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Success Cases | Sunbeds",
  description: "Discover how our partners grow with Sunbeds.",
};

export default function Page() {
  return <PlaceholderPage title="Success Cases" description="Discover how our partners grow with Sunbeds." />;
}
