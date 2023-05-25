import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return(
  <div className='font-font overflow-x-hidden overflow-y-hidden'>
  <Component {...pageProps}/>
  </div>
  )
  
}
