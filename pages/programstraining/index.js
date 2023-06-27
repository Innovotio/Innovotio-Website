import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Nav/Navbar";
import Operations from "@/src/components/Operations";
import ProgramsHero from "@/src/components/ProgramsHero";
import Styles from "@/src/components/Styles";
import Vision from "@/src/components/Vision";
import Talent from "@/src/components/Talent/Talent";
import React from "react";
import Catalogue from "@/src/components/Catalogue";

const index = () => {
  return (
    <main className="bg-black">
      <Navbar/>
      <ProgramsHero/>
      <Vision/>
      <Talent/>
      <Catalogue/>
      <Styles/>
      <Operations />
      <Footer />
    </main>
  );
};

export default index;
