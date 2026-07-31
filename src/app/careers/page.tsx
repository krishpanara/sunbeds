import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Join Us | Sunbeds",
  description: "Explore career opportunities at Sunbeds.",
};

export default function Page() {
  return <PlaceholderPage title="Join Us" description="Explore career opportunities at Sunbeds." />;
}
