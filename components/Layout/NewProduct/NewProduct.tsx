import React from "react"
import Image from "next/image"

export const NewProduct = () => {
  const img =
    "https://www.frankbody.com/uk/wp-content/uploads/2020/10/AClearingBodyWash_SecondaryBanner_800x500px.jpg"
  return (
    <div
      className="grid grid-cols-2 gap-10 mt-16"
      style={{ height: 550 }}
    >
      <div className="bg-[#FDE1DD] flex flex-col space-y-6 items-center justify-center">
        <div className="text-xl font-subHeader">
          Say bye to body breakouts with my acne-fighting
          body wash.
        </div>
        <button className="bg-gray-800 border-none btn btn-primary hover:bg-gray-800 font-subHeader">
          Explore
        </button>
      </div>
      <div className="relative w-full h-full mx-auto my-auto">
        <Image
          objectFit="cover"
          src={img}
          alt="shower photo"
          layout="fill"
        />
      </div>
    </div>
  )
}
