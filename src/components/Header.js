import React from "react";
import Button from "./Custom/Button";
const Header = () => {
  return (
    <>
      <div>
        <div>
          <h1 className="bg-red">
            Build and ship scalable products with on-demand engineering teams.
          </h1>
          <p>
            Innovotio helps you set the stage for user-centric products by
            implementing the right strategies through a combination of market
            research, agile sprints, and wide-ranging expertise.
          </p>
        </div>
        <div>
          <Button text='hi there'  className='px-8 bg-red' />
          <Button/>
        </div>
      </div>
    </>
  );
};

export default Header;
