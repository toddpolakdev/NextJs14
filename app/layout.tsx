import Navbar from "@/components/Navbar";
import type { ReactNode } from "react";
import "@/assets/styles/globals.css";
import Footer from "@/components/Footer";
import connectDB from "@/config/database";

export const metadata = {
  title: "Property Pulse | Find The Perfect Rental",
  description: "Find your dream rental property",
  keywords: "rental, property, real estate",
};

const MainLayout = async ({ children }: { children: ReactNode }) => {
  await connectDB();

  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
