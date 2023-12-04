import React from 'react'
import { Cart, FlexContent, Footer, Hero, Sales, Stories } from './components'
import {  heroapi, highlight, popularsales, sneaker, story, toprateslaes } from './data/data'
import Navbar2 from "./components/Navbar2.jsx";
import Navbar from './components/Navbar.jsx';

function Homepage() {
  return (
   <>
     {/* <Navbar2/> */}
     <Navbar/>
      <Cart />
      <main className="flex flex-col gap-16 relative">
          <Hero heroapi={heroapi} />
          <Sales endpoint={popularsales} ifExists />
          <FlexContent endpoint={highlight} ifExists />
          <Sales endpoint={toprateslaes} />
          <FlexContent endpoint={sneaker} />
          <Stories story={story} />
        </main >
        <section className=' padding-x padding-t pb-8 bg-black' >
        <Footer />
        </section>
   </>
  )
}

export default Homepage