import { Outfit } from "next/font/google";
import AOSWrapper from "./AOSwrapper";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Script from "next/script";

const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Malawi Education Enhancement Platform - MEep",
  description: "MEep: Your comprehensive platform for enhancing secondary education in Malawi. Access videos, quizzes, tutors, notes, and tests tailored for MSCE students.",
  openGraph: {
    title: "Malawi Education Enhancement Platform - MEep",
    description: "MEep provides a comprehensive suite of educational resources including videos, quizzes, tutors, notes, and tests for MSCE students in Malawi.",
    url: "https://meep-beta.vercel.app",
    siteName: "MEep - Malawi Education Enhancement Platform",
    images: [
      {
        url: "https://example.com/og-image.jpg",
        width: 800,
        height: 600,
        alt: "MEep Education Resources",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  const gtmId = 'GTM-P3G5VR3S'; // Replace with your actual GTM ID

  return (
    <ClerkProvider>
      <html>
        <head>
          {/* Google Site Verification */}
          <meta name="google-site-verification" content="I-K2xzppGaTk_ZW6wbQ1fcYFsZNc7_7tWNxfoL9_y58" />
          {/* Google Analytics */}
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=G-8Q0GE1VSCS`}
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8Q0GE1VSCS');
            `}
          </Script>
          {/* Insert GTM script here */}
          <Script async src={`https://www.googletagmanager.com/gtm.js?id=${gtmId}`} />
        </head>
        <body className={inter.className}>
          <div>
            <AOSWrapper>{children}</AOSWrapper>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
