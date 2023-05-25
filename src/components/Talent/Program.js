import React from 'react'
import Image from "next/image";


const Program = ({timeFrame, image, quater}) => {
  return (
    <section className="text-white pt-14 flex lg:flex-row flex-col-reverse justify-between container mx-auto lg:items-center">
    <div className="">
      <Image src={image} alt="coding" width={450} height={450} />
    </div>
    <div>
      <div className="lg:pl-6 pl-0 xl:pl-0">
        <h1 className="md:text-3xl text-2xl font-medium">
          {timeFrame}-{quater} introductory training program
        </h1>
        <p className="max-w-xl lg:max-w-xl md:max-w-full font-light text-lg text-headerGrey py-5">
          Get started with a tech skill using our introductory
          training program. Get introduced to all the basics necessary to
          start a career in tech
        </p>
      </div>
    </div>
  </section>   )
}

export default Program