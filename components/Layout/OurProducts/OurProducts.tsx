import Image from "next/image"
import React from "react"

export const OurProducts = () => {
  const image1 =
    "https://www.frankbody.com/uk/wp-content/uploads/2020/08/frank-body-charcoal-scrub-mask_DOT.COM_ROLL-OVER-MODEL.jpg"
  return (
    <div>
      <div className="mt-16 font-header text-3xl text-center">
        OUR PRODUCTS
      </div>
      <div
        className="grid grid-cols-4 border gap-4 mt-16 items-stretch"
        style={{ height: 450 }}
      >
        <div className="w-full h-full relative">
          <Image
            src={image1}
            alt="image1"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="w-full h-full relative">
          <Image
            src={image1}
            alt="image1"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="w-full h-full relative">
          <Image
            src={image1}
            alt="image1"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="w-full h-full relative">
          <Image
            src={image1}
            alt="image1"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  )
}
