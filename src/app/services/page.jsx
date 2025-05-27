import React from 'react'
import Navbar from "@/components/Navbar/Navbar";
import Services from '@/components/Services/Services'
import Footer from '@/components/Footer/Footer';
import PlanningPage from '@/components/Planning/Planning';


function Service() {
  return (
    <div>
        <Navbar/>
      <Services/>
      {/* <PlanningPage/> */}
      
      <Footer/>

    </div>
  )
}

export default Service
