import '@/styles/globals.css'
import 'aos/dist/aos.css';
import AOS from "aos";
import React from 'react';

export default function App({ Component, pageProps }) {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);

  return(
<div className="font-font overflow-x-hidden bg-backgroundBlack">
  <Component {...pageProps}/>
  </div>
  )
  
}
