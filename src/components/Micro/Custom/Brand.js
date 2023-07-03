import Image from "next/image";
import akraneex from "../../../assets/header/akaneex.svg";
import traderx from "../../../assets/header/task.svg";
import gdg1 from "../../../assets/header/GDG.svg";
import gdgajah2 from "../../../assets/header/gdgajah.svg";
import bullion2 from "../../../assets/header/bullion.svg";
import pennyTree from "../../../assets/header/PennyTree.svg";
import Logo from "../../../assets/header/Logo.svg";

const Brand = () => {
  return (
    <div className="overflow-hidden mx-auto container">
        <div className="grid grid-cols-6 gap-x-5 place-items-center">
              <Image alt="akaneex" src={akraneex} width={137} height={40} />
              <Image alt="task" src={traderx} width={124} height={40} />
              <Image alt="GDG" src={gdg1} width={200} height={400} />
              <Image alt="bullion" src={bullion2} width={70} height={40} className=""/>
              <Image alt="gdgajah" src={gdgajah2} width={150} height={40} />
              <Image alt="Logo" src={Logo} width={89} height={40} />
        </div>
    </div>
  );
};

export default Brand;
