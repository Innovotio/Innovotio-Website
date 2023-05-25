import React from "react";
import CatalogueCard from "./Custom/CatalogueCard";
import { FaLaptopCode, FaProductHunt} from "react-icons/fa";
import {GiCyberEye} from "react-icons/gi"
import {RiCustomerService2Fill} from "react-icons/ri"
import {SiVitest} from "react-icons/si"
import { MdOutlineProductionQuantityLimits, MdDesignServices, MdBusiness, MdOutlineDataThresholding } from "react-icons/md";

const Catalogue = () => {
  return (
    <section className="text-white container mx-auto md:px-10 px-5 lg:pt-40 pt-16">
      <div className="text-center flex flex-col">
        <h1 className="lg:text-5xl text-3xl md:text-4xl font-semibold">
          Explore Our Course Catalogue
        </h1>
        <p className="text-lg text-gray py-4">
          Discover talent training programs to help grow your career.
        </p>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 py-10">
          <CatalogueCard
            icon={<FaLaptopCode />}
            heading="Full Stack Web Development"
            service="Ease your recruitment process with our human resource team designed to vet and provide the best fit from our tech talents."
          />
          <CatalogueCard
            icon={<MdDesignServices/>}
            heading="Product Design"
            service="Ease your recruitment process with our human resource team designed to vet and provide the best fit from our tech talents."
          />
          <CatalogueCard
            icon={<MdOutlineProductionQuantityLimits />}
            heading="Product Marketing"
            service="Ease your recruitment process with our human resource team designed to vet and provide the best fit from our tech talents."
          />
          <CatalogueCard
            icon={<FaProductHunt />}
            heading="Product Management"
            service="Ease your recruitment process with our human resource team designed to vet and provide the best fit from our tech talents."
          />
          <CatalogueCard
            icon={<MdOutlineDataThresholding />}
            heading="Data Analytics"
            service="Ease your recruitment process with our human resource team designed to vet and provide the best fit from our tech talents."
          />
          <CatalogueCard
            icon={<GiCyberEye />}
            heading="Cyber security"
            service="Ease your recruitment process with our human resource team designed to vet and provide the best fit from our tech talents."
          />
          <CatalogueCard
            icon={<MdBusiness />}
            heading="Business Analysis"
            service="Ease your recruitment process with our human resource team designed to vet and provide the best fit from our tech talents."
          />
          <CatalogueCard
            icon={<RiCustomerService2Fill />}
            heading="Customer Success Management "
            service="Ease your recruitment process with our human resource team designed to vet and provide the best fit from our tech talents."
          />
          <CatalogueCard
            icon={<FaLaptopCode />}
            heading="No-code development"
            service="Ease your recruitment process with our human resource team designed to vet and provide the best fit from our tech talents."
          />
          <CatalogueCard
            icon={<SiVitest />}
            heading="Quality Assurance"
            service="Ease your recruitment process with our human resource team designed to vet and provide the best fit from our tech talents."
          />
        </div>
      </div>
    </section>
  );
};

export default Catalogue;
