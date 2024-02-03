import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Tip of My Tongue",
    description: `Website that helps you to identify what word, song, movie or literally anything else you're trying to think of. Ever found yourself in that frustrating moment where the perfect word, the name of that movie, or a song are right on the tip of your tongue, but you just can't grasp it? Let's find out what's on the tip of your tongue, together.`,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
