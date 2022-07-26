import React, { PropsWithChildren } from "react"
import { Navbar } from "./Navbar"

export const Layout: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <div className="min-h-screen h-1">
      <Navbar />
      <main className="container px-4 mx-auto h-full pt-32">
        {children}
      </main>
    </div>
  )
}
