import Image from "next/image"
import React, { useState } from "react"
import { allItems } from "../../../data"

export const OurProducts = () => {
  const [basket, setBasket] = useState()
  const { img, title, price } = allItems
  return (
    <div>
      <div className="mt-16 font-header text-3xl text-center">
        OUR PRODUCTS
      </div>
      <div
        className="grid grid-cols-4 gap-4 mt-16 items-stretch"
        style={{ height: 450 }}
      >
        <div className="mb-16">
          <div className="w-full h-full relative">
            <Image
              src={allItems[0].img}
              alt="image1"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="font-subHeader text-2xl text-center mt-6 mb-6">
            Charcoal Body Scrub & Mask
          </div>
          <button className="btn bg-[#3F2A2D] rounded-none w-full hover:bg-[#FDE1DD] border-none hover:text-[#3F2A2D]">
            Add to cart | £{allItems[0].price}
          </button>
        </div>
        <div className="mb-16">
          <div className="w-full h-full relative">
            <Image
              src={allItems[1].img}
              alt="image1"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="font-subHeader text-2xl text-center mt-6 mb-6">
            Smoothing AHA Body Lotion
          </div>
          <button className="btn bg-[#3F2A2D] rounded-none w-full hover:bg-[#FDE1DD] border-none hover:text-[#3F2A2D]">
            Add to cart | £{allItems[1].price}
          </button>
        </div>
        <div className="mb-16">
          <div className="w-full h-full relative">
            <Image
              src={allItems[2].img}
              alt="image1"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="font-subHeader text-2xl text-center mt-6 mb-6">
            Extra Clean Face Wash
          </div>
          <button className="btn bg-[#3F2A2D] rounded-none w-full hover:bg-[#FDE1DD] border-none hover:text-[#3F2A2D]">
            Add to cart | £{allItems[2].price}
          </button>
        </div>
        <div className="mb-16">
          <div className="w-full h-full relative">
            <Image
              src={allItems[3].img}
              alt="image1"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="font-subHeader text-2xl text-center mt-6 mb-6">
            In-Shower Moisturiser
          </div>
          <button className="btn bg-[#3F2A2D] rounded-none w-full hover:bg-[#FDE1DD] border-none hover:text-[#3F2A2D]">
            Add to cart | £{allItems[3].price}
          </button>
        </div>
      </div>
    </div>
  )
}
