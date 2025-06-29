import type { Metadata } from "next";
import "./globals.css";
import Providers from "./Providers";
import 'keen-slider/keen-slider.min.css'


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={``}>
        <Providers>
        {children}
        </Providers>
      </body>
    </html>
  );
}
