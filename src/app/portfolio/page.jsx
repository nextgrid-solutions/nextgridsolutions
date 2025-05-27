// import ContactUs from "@/components/ContactUs/ContactUs";
// import Footer from "@/components/Footer/Footer";
import ContactUs from "@/components/ContactUs/ContacUs";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import PortfolioPage from "@/components/Portfolio/Portfolio";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <PortfolioPage />
      <Footer />
    </>
  );
};

export default page;
