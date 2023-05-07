import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";
import Operations from "@/src/components/Operations";
import ProgramsHero from "@/src/components/ProgramsHero";
import Styles from "@/src/components/Styles";
import Training from "@/src/components/Training";
import Vision from "@/src/components/Vision";
import Talent from "@/src/components/Talent";
import React from "react";

const ProgramsTraining = () => {
  return (
    <main className="bg-black">
      <Navbar/>
      <ProgramsHero/>
      <Vision/>
      <Talent/>
      <Training/>
      <Styles/>
      <Operations />
      <Footer />
    </main>
  );
};

export default ProgramsTraining;
