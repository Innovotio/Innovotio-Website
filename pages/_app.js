import Navbar from '@/src/components/Navbar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return(
  <div className='font-font overflow-x-hidden overflow-y-hidden'>
    <Navbar/>
  <Component {...pageProps}/>
  </div>
  )
  
}
