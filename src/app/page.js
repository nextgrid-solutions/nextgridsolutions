import Footer from "@/components/Footer/Footer";
import HomePage from "@/components/Home/Home";
import Navbar from "@/components/Navbar/Navbar";
import ServicesSection from "@/components/ServicesSection/ServiceSections";
import WhyChooseUse from "@/components/WhyChooseUs/WhyChooseUs"

export default function Home() {
  return (
   <div className="home">
   <Navbar/>
    <HomePage /> 
    <ServicesSection/>
  <WhyChooseUse/>
   <Footer /> 
   </div>
  );
}
