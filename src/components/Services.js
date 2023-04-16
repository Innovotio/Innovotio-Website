import Card from "./Custom/Card";
import vector from "../assets/services/Vector (2).svg";
import vector4 from "../assets/services/Vector (4).svg";
import vector3 from "../assets/services/Vector (3).svg";
import vector5 from "../assets/services/Vector (5).svg";
import vector6 from "../assets/services/Vector (9).svg";
import vector7 from "../assets/services/Vector (7).svg";

function Services() {
  return (
    <section className=" mx-auto container lg:pt-44 pt-24 lg:px-0 px-8 font-font">
      <div className="">
        <h1 className="lg:text-4xl text-center text-3xl font-medium">Our Services</h1>
        <div className=" flex justify-center">
          <p className="xl:w-5/12 md:w-8/12 text-center w-12/12 py-6 text-lg tracking-normal text-text">
            Innovotio provides more than just the plumbing for your revenue. As
            a merchant of record, we do it for you:
          </p>
        </div>
        <div className="grid xl:grid-cols-2 grid-col gap-6 place-items-center pt-4 cursor-pointer">
        <Card
          image={vector5}
          heading="Recruitment"
          service="Ease your recruitment process with our human resource team designed to vet and provide the best fit from our tech talents."
        />
        <Card
          image={vector4}
          heading="Tech Talent Management"
          service="We train, assess and maintain the quality of our talent pool regularly to ensure satisfaction both for businesses and talents."
        />
        <Card
          image={vector}
          heading="Consultancy"
          service="We offer business consultation session to aid project launch, business launch and staffing requirements."
        />
         <Card
          image={vector3}
          heading="Tech Event Management"
          service="Ensure your tech event goes off without a hitch and give your guests a quality time when we organize your tech event."
        />
        <Card
          image={vector7}
          heading="Merchandising"
          service="Create merchandise for your tech events and brand promotion with our team."
        />
        <Card
          image={vector6}
          heading="Community"
          service="Get easy support to meet all your recruitment needs on our slack community."
        />
        </div>
      </div>
    </section>
  );
}

export default Services;
