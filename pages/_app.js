import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return(
  <div className='font- bg-black text-white'>
  <Component {...pageProps} />
  </div>
  )
  
}
