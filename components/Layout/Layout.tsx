import React, { PropsWithChildren } from "react"
import { Navbar } from "./Navbar/Navbar"

export const Layout: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <div className="h-auto min-h-screen">
      <Navbar />
      <main className="container h-full px-4 pt-32 mx-auto mb-16">
        {children}
      </main>
    </div>
  )
}
