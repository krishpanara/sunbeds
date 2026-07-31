import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Register | Sunbeds",
  description: "Create your Sunbeds account.",
};

export default function Page() {
  return <PlaceholderPage title="Register" description="Create your Sunbeds account." />;
}
