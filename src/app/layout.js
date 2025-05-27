import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import LoaderProvider from "@/components/Loader/LoaderProvider";
import MouseTrail from "@/components/MouseTrail/MouseTrail";

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

export const metadata = {
  title: "NextGridStudio - Best software company in Mumbai",
  description: "Best teaching institute website built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      
      <body>
      {/* <MouseTrail/> */}
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "black",
              color: "white",
            },
          }}
        />
        <LoaderProvider>
          {children}
        </LoaderProvider>
      </body>
    </html>
  );
}
