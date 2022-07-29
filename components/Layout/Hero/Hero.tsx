import React from "react"

export const Hero = () => {
  return (
    <div className="hero min-h-screen bg-[#FFDFD3]">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="font-header text-5xl font-bold">
            Hello there beautiful!
          </h1>
          <p className="py-6 font-subHeader text-xl">
            Coffee-based skincare to leave you smooth and
            perky!
          </p>
          <div className="flex justify-center gap-3">
            <button className="btn btn-primary bg-gray-800 border-none hover:bg-gray-800">
              Shop now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
