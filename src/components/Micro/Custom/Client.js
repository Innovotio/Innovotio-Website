import Image from "next/image";
import akraneex from "../../../assets/header/akaneex.svg";
import traderx from "../../../assets/header/task.svg";
import gdg1 from "../../../assets/header/GDG.svg";
import gdgajah2 from "../../../assets/header/gdgajah.svg";
import bullion2 from "../../../assets/header/bullion.svg";
import pennyTree from "../../../assets/header/PennyTree.svg";
import Logo from "../../../assets/header/Logo.svg";

const Client = () => {
  return (
    <div className="overflow-hidden brand">
      <div className="inline-block logos whitespace-nowrap animate-scroll animate-scroll--infinite">
        <div className="logos-slide grid grid-cols-6 gap-x-14 place-items-center justify-between">
          <div className="inline-block">
            <Image alt="akaneex" src={akraneex} width={137} height={40} />
          </div>
          {/* <div className="inline-block">
            <Image alt="penny Tree" src={pennyTree} width={150} height={40} />
          </div> */}
          <div className="inline-block">
            <Image alt="task" src={traderx} width={124} height={40} />
          </div>
          <div className="inline-block">
            <Image alt="GDG" src={gdg1} width={200} height={400} />
          </div>
          <div className="inline-block">
            <Image alt="bullion" src={bullion2} width={74} height={40} />
          </div>
          <div className="inline-block">
            <Image alt="gdgajah" src={gdgajah2} width={150} height={40} />
          </div>
          <div className="inline-block">
            <Image alt="Logo" src={Logo} width={89} height={40} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
