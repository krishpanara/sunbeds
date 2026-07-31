import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Hotels | Sunbeds",
  description: "Take your hotel to the next level with centralized distribution management.",
};

export default function Page() {
  return <PlaceholderPage title="Hotels" description="Take your hotel to the next level with centralized distribution management." />;
}
