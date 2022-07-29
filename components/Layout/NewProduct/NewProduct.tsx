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
        <div className="font-subHeader text-xl">
          Say bye to body breakouts with my acne-fighting
          body wash.
        </div>
        <button className="btn btn-primary bg-gray-800 border-none hover:bg-gray-800">
          Explore
        </button>
      </div>
      <div className="my-auto mx-auto relative w-full h-full">
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
