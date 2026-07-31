import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Company Announcements | Sunbeds",
  description: "The latest news and updates from Sunbeds.",
};

export default function Page() {
  return <PlaceholderPage title="Company Announcements" description="The latest news and updates from Sunbeds." />;
}
