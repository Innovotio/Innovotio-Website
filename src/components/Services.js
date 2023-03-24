import Card from "./Custom/Card";
import vector from "../assets/services/Vector (2).svg";
import vector4 from "../assets/services/Vector (4).svg";
import vector3 from "../assets/services/Vector (3).svg";
import vector5 from "../assets/services/Vector (5).svg";
import vector6 from "../assets/services/Vector (9).svg";
import vector7 from "../assets/services/Vector (7).svg";
import vector8 from "../assets/services/Vector (8).svg";

function Services() {
  return (
    <section className="container mx-auto pt-40 font-font">
      <div className="text-center">
        <h1 className="lg:text-5xl text-4xl font-medium">Our Services</h1>
        <div className=" flex justify-center">
          <p className="lg:w-5/12 w-12/12 py-6 text-lg tracking-normal text-text">
            Innovotio provides more than just the plumbing for your revenue. As
            a merchant of record, we do it for you:
          </p>
        </div>
        <div className="grid lg:grid-cols-2 grid-col gap-6 place-items-center pt-4 cursor-pointer">
        <Card
          image={vector5}
          heading="Recruitment"
          service="We work as an extension of your in-house team and assemble the right team members for every task and project."
        />
        <Card
          image={vector4}
          heading="Outsourcing"
          service="We work as an extension of your in-house team and assemble the right team members for every task and project."
        />
        <Card
          image={vector3}
          heading="Event Organization"
          service="We work as an extension of your in-house team and assemble the right team members for every task and project."
        />
        <Card
          image={vector}
          heading="Consultancy"
          service="We work as an extension of your in-house team and assemble the right team members for every task and project."
        />
        <Card
          image={vector7}
          heading="Merchandising"
          service="We work as an extension of your in-house team and assemble the right team members for every task and project."
        />
        <Card
          image={vector6}
          heading="Community"
          service="We work as an extension of your in-house team and assemble the right team members for every task and project.F"
        />
        </div>
      </div>
    </section>
  );
}

export default Services;
