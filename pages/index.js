import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/src/components/Navbar'
import Header from '@/src/components/Header'
import Description from '@/src/components/Description'
import Services from '@/src/components/Services'
import Operations from '@/src/components/Operations'
import Footer from '@/src/components/Footer'


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar/>
        <Header/>
        <Description/>
        <Services/>
        <Operations/>
        <Footer/>
      </main>
    </>
  )
}
