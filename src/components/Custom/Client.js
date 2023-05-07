import Image from "next/image";
import akraneex from "../../assets/header/akaneex.svg";
import traderx from "../../assets/header/task.svg";
import gdg1 from "../../assets/header/GDG.svg";
import gdgajah2 from "../../assets/header/gdgajah.svg";
import bullion2 from "../../assets/header/bullion.svg";

const Client = () => {
  return (
    <div className="grid md:grid-cols-5 gap-7 grid-cols-3 place-items-center items-center max-w-7xl pt-3">
      <div>
        <Image alt="akaneex" src={akraneex} width={137} height={40} />
      </div>
      <div>
        <Image alt="task" src={traderx} width={154} height={40} />
      </div>
      <div>
        <Image alt="GDG" src={gdg1} width={276} height={400} />
      </div>
      <div>
        <Image alt="bullion" src={bullion2} width={84} height={40} />
      </div>
      <div>
        <Image alt="gdgajah" src={gdgajah2} width={242} height={40} />
      </div>
    </div>
  );
};

export default Client;
