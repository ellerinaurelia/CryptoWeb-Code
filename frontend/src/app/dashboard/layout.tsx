import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Dashboard | Cryptex",
  description: "Manage your crypto assets, view balances, and trade.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}