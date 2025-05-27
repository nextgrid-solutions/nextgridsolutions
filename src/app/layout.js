import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import LoaderProvider from "@/components/Loader/LoaderProvider";
// import MouseTrail from "@/components/MouseTrail/MouseTrail"; // Uncomment if used

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

// 🔧 SEO Metadata
export const metadata = {
  title: "NextGridSolutions | Leading Web & App Development Company in Mumbai",
  description:
    "NextGridSolutions is a top software development company in Mumbai specializing in web development, mobile app development, logo design, and custom digital solutions.",
  keywords:
    "NextGridSolutions, web development Mumbai, app development, software company, logo design, UI UX, custom software Mumbai",
  authors: [{ name: "NextGridSolutions", url: "https://nextgrid.solutions" }],
  creator: "NextGridSolutions",
  openGraph: {
    title: "NextGridSolutions | Web & App Development Experts",
    description:
      "Delivering high-performance websites, mobile apps, branding & logo design solutions that scale with your business.",
    url: "https://nextgrid.solutions",
    siteName: "NextGridSolutions",
    images: [
      {
        url: "/assets/navbar-logo.png", // Replace with your actual OpenGraph image
        width: 1200,
        height: 630,
        alt: "NextGridSolutions - Software Company in Mumbai",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NextGridSolutions - Custom Web & App Development",
    description:
      "NextGridSolutions builds scalable digital products including websites, mobile apps, and branding solutions.",
    creator: "@nextgridsolutions", // Replace if you have Twitter
    images: ["/assets/navbar-logo.png"], // Replace with actual image
  },
  metadataBase: new URL("https://nextgrid.solutions"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body>
        {/* <MouseTrail /> */}
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "black",
              color: "white",
            },
          }}
        />
        <LoaderProvider>{children}</LoaderProvider>
      </body>
    </html>
  );
}
