import React, { PropsWithChildren } from "react"
import { Footer } from "./Footer/Footer"
import { Hero } from "./Hero/Hero"
import { Navbar } from "./Navbar/Navbar"
import { NewProduct } from "./NewProduct/NewProduct"
import { OurProducts } from "./OurProducts/OurProducts"

export const Layout: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <div className="min-h-screen h-auto">
      <Navbar />
      <main className="container px-4 mx-auto h-full pt-32 mb-16">
        {children}
        <Hero />
        <NewProduct />
        <OurProducts />
        <Footer />
      </main>
    </div>
  )
}
