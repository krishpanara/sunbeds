import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Tech Partners | Sunbeds",
  description: "Integrate with Sunbeds through channel managers and APIs.",
};

export default function Page() {
  return <PlaceholderPage title="Tech Partners" description="Integrate with Sunbeds through channel managers and APIs." />;
}
