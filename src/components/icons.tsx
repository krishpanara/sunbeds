type IconProps = {
  className?: string;
};

const base = "h-7 w-7 stroke-[#f5821f]";

export function DistributionIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" className={className ?? base}>
      <circle cx="12" cy="4" r="2" />
      <circle cx="5" cy="14" r="2" />
      <circle cx="19" cy="14" r="2" />
      <circle cx="12" cy="20" r="2" />
      <path d="M12 6v4M10.5 9.5L6.5 12.5M13.5 9.5l4 3M6.5 15.5l4 3M17.5 15.5l-4 3" strokeLinecap="round" />
    </svg>
  );
}

export function RevenueIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" className={className ?? base}>
      <path d="M4 18h16M4 18l4-6 4 3 5-8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 7h3v3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function BookingsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" className={className ?? base}>
      <rect x="3" y="5" width="18" height="15" rx="2" />
      <path d="M3 9.5h18M8 3v4M16 3v4" strokeLinecap="round" />
    </svg>
  );
}

export function PaymentIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" className={className ?? base}>
      <rect x="2.5" y="6" width="19" height="13" rx="2" />
      <path d="M2.5 10h19" strokeLinecap="round" />
      <path d="M6 15h4" strokeLinecap="round" />
    </svg>
  );
}

export function PartnerManagementIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" className={className ?? base}>
      <rect x="3" y="4" width="8" height="6" rx="1" />
      <rect x="13" y="4" width="8" height="6" rx="1" />
      <path d="M7 10v3M17 10v3M4 17h16" strokeLinecap="round" />
    </svg>
  );
}

export function LaunchIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" className={className ?? base}>
      <path
        d="M12 2c2.5 2.5 4 6 4 10 0 2-.5 3.5-1 5l-3 3-3-3c-.5-1.5-1-3-1-5 0-4 1.5-7.5 4-10z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9" r="1.6" />
      <path d="M8.5 15L5 17l1-4M15.5 15L19 17l-1-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function UnlockIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" className={className ?? base}>
      <rect x="4" y="11" width="16" height="9" rx="2" />
      <path d="M8 11V7a4 4 0 017-2.6" strokeLinecap="round" />
    </svg>
  );
}

export function CommercialIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" className={className ?? base}>
      <path d="M3 21V9l6-4 6 4v12" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 21v-6h6v6M15 5l6 4v12h-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function OneContractIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" className={className ?? base}>
      <path d="M6 3h9l4 4v14a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1z" strokeLinejoin="round" />
      <path d="M8 9h8M8 13h8M8 17h5" strokeLinecap="round" />
    </svg>
  );
}

export function GlobalReachIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" className={className ?? base}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.7 4 6 4 9s-1.5 6.3-4 9c-2.5-2.7-4-6-4-9s1.5-6.3 4-9z" strokeLinecap="round" />
    </svg>
  );
}

export function OneTechIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" className={className ?? base}>
      <rect x="4" y="4" width="16" height="11" rx="1.5" />
      <path d="M9 20h6M12 15v5" strokeLinecap="round" />
    </svg>
  );
}

export function ChannelIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" className={className ?? base}>
      <rect x="3" y="9" width="18" height="7" rx="3.5" />
      <circle cx="7.5" cy="12.5" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  );
}
