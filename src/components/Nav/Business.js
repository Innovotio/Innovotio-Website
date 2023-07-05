import React from "react";

const Business = () => {
  return (
    <nav className="2xl:mx-auto 2xl:right-20 2xl:container 2xl:max-w-3xl w-8/12 text-white left-20 cursor-pointer h-[400px] bg-black items-center rounded-xl border-headerGrey absolute top-20 grid grid-cols-2 border border-opacity-30">
      <a
        target="_blank"
        href="/business"
        className="w-11/12 hover:bg-btnHoverBlack h-full py-6 px-5"
      >
        <>
          <h3 className="text-xl mb-2">Recruitment</h3>
          <p className="text-sm max-w-sm text-headerGrey">
            Ease your recuitment process with our human resource team designed
            to vet and provide the best fit from our tech talents.
          </p>
        </>
      </a>
      <a
        target="_blank"
        href="/business"
        className=" hover:bg-btnHoverBlack h-full py-10 w-full px-10"
      >
        <>
          <h3 className="text-xl mb-2">Tech Event Organization</h3>
          <p className="text-sm max-w-sm text-headerGrey">
            We train, assess and maintain the quality of our talent pool
            regularly to ensure satisfaction both for busniesses and talents.
          </p>
        </>
      </a>
      <a
        target="_blank"
        href="/business"
        className=" hover:bg-btnHoverBlack h-full overflow-hidden py-10 w-11/12 px-10"
      >
        <>
          <h3 className="text-xl mb-2">Consultancy</h3>
          <p className="text-sm max-w-sm text-headerGrey">
            We offer one month of free business consultancy to small businesses
            and startups. We assist in the launch process & early stages of the
            business to establish business structure.
          </p>
        </>
      </a>
      <a
        target="_blank"
        href="/business"
        className=" hover:bg-btnHoverBlack overflow-hidden h-full py-10 w-full px-10"
      >
        <>
          <h3 className="text-xl mb-2">Merchandising</h3>
          <p className="text-sm max-w-sm text-headerGrey">
            As tech event organizers, we also create branded merchandise for
            tech organizations and communities for events and merch stores.
          </p>
        </>
      </a>
    </nav>
  );
};

export default Business;
