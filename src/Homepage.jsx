import React from 'react'
import { Cart, FlexContent, Footer, Hero, Sales, Stories } from './components'
import { footerAPI, heroapi, highlight, popularsales, sneaker, story, toprateslaes } from './data/data'
import Navbar2 from "./components/Navbar2.jsx";

function Homepage() {
  return (
   <>
     <Navbar2/>
      <Cart />
      <main className="flex flex-col gap-16 relative">
          <Hero heroapi={heroapi} />
          <Sales endpoint={popularsales} ifExists />
          <FlexContent endpoint={highlight} ifExists />
          <Sales endpoint={toprateslaes} />
          <FlexContent endpoint={sneaker} />
          <Stories story={story} />
        </main>
        <Footer footerAPI={footerAPI} />
   </>
  )
}

export default Homepage