import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Log In | Sunbeds",
  description: "Access your Sunbeds account.",
};

export default function Page() {
  return <PlaceholderPage title="Log In" description="Access your Sunbeds account." />;
}
