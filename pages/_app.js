import '@/styles/globals.css'
// animate on scroll
import 'aos/dist/aos.css';
import AOS from "aos";
import React from 'react';


export default function App({ Component, pageProps }) {
  React.useEffect(() => {
    AOS.init({ duration: 2700 });
    AOS.refresh();
  }, []);
  return(
  <div className='font-font overflow-x-hidden overflow-y-hidden'>
  <Component {...pageProps}/>
  </div>
  )
  
}
