import AboutPage from "@/components/AboutUs/AboutUs";
import Footer from "@/components/Footer/Footer";
import HomePage from "@/components/Home/Home";
import Navbar from "@/components/Navbar/Navbar";
import ServicesSection from "@/components/ServicesSection/ServiceSections";
import WhyChooseUse from "@/components/WhyChooseUs/WhyChooseUs"
import PlanningPage from '@/components/Planning/Planning';

export default function Home() {
  return (
   <div className="home">
   <Navbar/>
   <AboutPage/>
   <PlanningPage />
   <Footer /> 
   </div>
  );
}
