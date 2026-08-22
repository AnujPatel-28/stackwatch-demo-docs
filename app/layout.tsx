import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: { default: "ForgeKit Developer Documentation", template: "%s · ForgeKit Docs" }, description: "Developer documentation for the fictional ForgeKit platform." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
