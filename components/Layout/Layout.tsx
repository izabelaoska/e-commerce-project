import React, { PropsWithChildren } from "react"
import { Navbar } from "./Navbar/Navbar"

export const Layout: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <div className="min-h-screen h-auto">
      <Navbar />
      <main className="container px-4 mx-auto h-full pt-32 mb-16">
        {children}
      </main>
    </div>
  )
}
