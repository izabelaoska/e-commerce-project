import Image from "next/image"
import React from "react"

export const OurProducts = () => {
  const image1 =
    "https://www.frankbody.com/uk/wp-content/uploads/2020/08/frank-body-charcoal-scrub-mask_DOT.COM_ROLL-OVER-MODEL.jpg"
  const image2 =
    "https://www.frankbody.com/uk/wp-content/uploads/2021/06/frank-body-AHA-body-lotion_DOT.COM_ROLL-OVER-PRODUCT-V2.jpg"
  const image3 =
    "https://www.frankbody.com/uk/wp-content/uploads/2021/01/frank-body-everyday-extra-clean-face-wash_DOT.COM_ROLL-OVER-MODEL.jpg"
  const image4 =
    "https://www.frankbody.com/uk/wp-content/uploads/2021/05/frank-body-everyday-in-shower-moisturiser_DOT.COM_ROLL-OVER-MODEL.jpg"

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
              src={image1}
              alt="image1"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="font-subHeader text-2xl text-center mt-6 mb-6">
            Charcoal Body Scrub & Mask
          </div>
          <button className="btn bg-[#3F2A2D] rounded-none w-full hover:bg-[#FDE1DD] border-none hover:text-[#3F2A2D]">
            Add to cart | £11.95
          </button>
        </div>
        <div className="mb-16">
          <div className="w-full h-full relative">
            <Image
              src={image2}
              alt="image1"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="font-subHeader text-2xl text-center mt-6 mb-6">
            Smoothing AHA Body Lotion
          </div>
          <button className="btn bg-[#3F2A2D] rounded-none w-full hover:bg-[#FDE1DD] border-none hover:text-[#3F2A2D]">
            Add to cart | £15.95
          </button>
        </div>
        <div className="mb-16">
          <div className="w-full h-full relative">
            <Image
              src={image3}
              alt="image1"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="font-subHeader text-2xl text-center mt-6 mb-6">
            Extra Clean Face Wash
          </div>
          <button className="btn bg-[#3F2A2D] rounded-none w-full hover:bg-[#FDE1DD] border-none hover:text-[#3F2A2D]">
            Add to cart | £13.95
          </button>
        </div>
        <div className="mb-16">
          <div className="w-full h-full relative">
            <Image
              src={image4}
              alt="image1"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="font-subHeader text-2xl text-center mt-6 mb-6">
            In-Shower Moisturiser
          </div>
          <button className="btn bg-[#3F2A2D] rounded-none w-full hover:bg-[#FDE1DD] border-none hover:text-[#3F2A2D]">
            Add to cart | £21.95
          </button>
        </div>
      </div>
    </div>
  )
}
