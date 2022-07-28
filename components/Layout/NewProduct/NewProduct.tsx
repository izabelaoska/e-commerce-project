import React from "react"
import Image from "next/image"

export const NewProduct = () => {
  // const img =
  //   "https://www.frankbody.com/uk/wp-content/uploads/2020/10/AClearingBodyWash_SecondaryBanner_800x500px.jpg"
  return (
    <div className="grid grid-cols-2 h-full">
      <div className="border">
        Say bye to body breakouts with my acne-fighting body
        wash.
      </div>
      <div className="border">
        {/* <Image
          src={img}
          alt="shower gel photo"
          width={500}
          height={500}
        /> */}
      </div>
    </div>
  )
}
