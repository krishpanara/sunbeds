import type { ReactNode } from "react";

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex min-h-24 gap-4">
      <div className="flex h-11 w-11 shrink-0 items-start justify-center pt-0.5">{icon}</div>
      <div>
        <h4 className="font-semibold text-[#0b0e1a]">{title}</h4>
        <p className="mt-1 max-w-md text-sm text-[#0b0e1a]/60">{description}</p>
      </div>
    </div>
  );
}
