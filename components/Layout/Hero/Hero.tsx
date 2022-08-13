import React from "react"

export const Hero = () => {
  return (
    <div
      className="hero bg-[#FFDFD3]"
      style={{ height: 550 }}
    >
      <div className="text-center hero-content">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold font-header">
            Hello there beautiful!
          </h1>
          <p className="py-6 text-xl font-subHeader">
            Coffee-based skincare to leave you smooth and
            perky!
          </p>
          <div className="flex justify-center gap-3">
            <button className="bg-gray-800 border-none btn btn-primary hover:bg-gray-800 font-subHeader">
              Shop now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
