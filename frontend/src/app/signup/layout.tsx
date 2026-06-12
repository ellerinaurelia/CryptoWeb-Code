import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Create Account | Cryptex",
  description: "Join Cryptex today and start trading digital assets.",
};

export default function SignupLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}