import '@/styles/globals.css'
import 'aos/dist/aos.css';
import AOS from "aos";
import React from 'react';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  React.useEffect(() => {
    AOS.init({ duration: 800});
    AOS.refresh();
  }, []);

  return(
<div className="font-font overflow-x-hidden bg-backgroundBlack">
  <Component {...pageProps}/>
  <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
  </div>
  )
  
}
