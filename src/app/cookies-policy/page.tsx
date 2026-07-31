import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Cookies Policy | Sunbeds",
  description: "How Sunbeds uses cookies on this website.",
};

export default function Page() {
  return <PlaceholderPage title="Cookies Policy" description="How Sunbeds uses cookies on this website." />;
}
