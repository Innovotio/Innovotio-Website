import Card from "../Micro/Custom/Card";
import vector from "../../assets/services/Vector (2).svg";
import vector4 from "../../assets/services/Vector (4).svg";
import vector3 from "../../assets/services/Vector (3).svg";
import vector5 from "../../assets/services/Vector (5).svg";
import vector6 from "../../assets/services/Vector (9).svg";
import vector7 from "../../assets/services/Vector (7).svg";

function Services() {
  return (
    <section className="mx-auto container lg:pt-40 md:pt-32 pt-20 md:px-10 px-5 font-font">
      <div className="">
        <div>
          <h1 className="lg:text-5xl text-center text-3xl font-medium">
            Our Services
          </h1>
          <div className=" flex justify-center">
            <p className="text-center py-6 text-base lg:text-xl max-w-md lg:max-w-xl tracking-normal text-text">
              Innovotio provides more than just the plumbing for your revenue.
              As a merchant of record, we do it for you:
            </p>
          </div>
        </div>

        <section className="flex justify-center items-center">
          <div className="grid md:grid-cols-2 grid-col gap-8 space-x-0 place-comtent-center place-items-center pt-4 cursor-pointer">
            <Card
              link="/business"
              image={vector5}
              heading="Recruitment"
              service="Ease your recruitment process with our human resource team designed to vet and provide the best fit from our tech talents."
            />
            <Card
              link="/business"
              image={vector4}
              heading="Tech Talent Management"
              service="We train, assess and maintain the quality of our talent pool regularly to ensure satisfaction both for businesses and talents."
            />
            <Card
              link="/business"
              image={vector}
              heading="Consultancy"
              service="We offer business consultation session to aid project launch, business launch and staffing requirements."
            />
            <Card
            link="/business"
              className="hover:bg-btnHoverBlack max-w-2xl h-[322px] px-5 justify-center border rounded-2xl border-btnDefaultBlack flex flex-col items-start"
              image={vector3}
              heading="Tech Event Management"
              service="Ensure your tech event goes off without a hitch and give your guests a quality time when we organize your tech event."
            />
            <Card
              link="/business"
              image={vector7}
              heading="Merchandising"
              service="Create merchandise for your tech events and brand promotion with our team."
            />
            <Card
              link="http://bit.ly/Innovotio"
              image={vector6}
              heading="Community"
              service="Get easy support to meet all your recruitment needs on our slack community."
            />
          </div>
        </section>
      </div>
    </section>
  );
}

export default Services;
