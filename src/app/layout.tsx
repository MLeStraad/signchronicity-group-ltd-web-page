import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Signchronicity Global",
  description: "Signchronicity Global - Governance-Led Communication Technology and Statutory Safeguarding Consultancy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="nhsuk-body nhsuk-frontend-supported">
        {children}
      </body>
    </html>
  );
}
