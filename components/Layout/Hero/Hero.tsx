import React from "react"

export const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="hero-title text-5xl font-bold">
            Hello there beautiful!
          </h1>
          <p className="py-6">
            Coffee-based skincare to leave you smooth and
            perky!
          </p>
          <div className="flex justify-center gap-3">
            <button className="btn btn-primary">
              Shop now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
