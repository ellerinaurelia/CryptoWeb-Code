import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Cryptex",
  description: "Securely login to your Cryptex dashboard.",
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
