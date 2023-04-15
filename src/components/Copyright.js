import React from 'react'

const Copyright = () => {
  return (
    <section className="flex lg:flex-row-reverse w-full flex-col justify-between py-0 lg:py-4 pb-10">
    <div className="flex lg:text-base text-sm mb-1">
      <p>Terms of Service</p>
      <p className='font-light text-gray ml-5'> | </p>
      <p className='ml-5'>Privacy Policy</p>
    </div>
    <p className="pb-6 lg:pb-0 text-sm md:text-start  lg:mt-0 mb-3 md:mt-0 mt-4 lg:text-lg">© Copyright 2023 Innovotio. All Rights Reserved.</p>
  </section>  )
}

export default Copyright