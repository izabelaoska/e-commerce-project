import Image from "next/image"
import { allItems } from "../../../data"
import { useBasketStore } from "../../../store"

export const OurProducts = () => {
  const { addItem } = useBasketStore((state) => state)
  return (
    <div>
      <div className="mt-16 text-3xl text-center font-header">
        OUR PRODUCTS
      </div>
      <div
        className="grid items-stretch grid-cols-4 gap-4 mt-16"
        style={{ height: 450 }}
      >
        <div className="mb-16">
          <div className="relative w-full h-full">
            <Image
              src={allItems[0].img}
              alt="image1"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="mt-6 mb-6 text-2xl text-center font-subHeader">
            Charcoal Body Scrub & Mask
          </div>
          <button
            onClick={() => addItem("mask")}
            className="btn bg-[#3F2A2D] rounded-none w-full hover:bg-[#FDE1DD] border-none hover:text-[#3F2A2D]"
          >
            Add to cart | £{allItems[0].price}
          </button>
        </div>
        <div className="mb-16">
          <div className="relative w-full h-full">
            <Image
              src={allItems[1].img}
              alt="image1"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="mt-6 mb-6 text-2xl text-center font-subHeader">
            Smoothing AHA Body Lotion
          </div>
          <button
            onClick={() => addItem("body lotion")}
            className="btn bg-[#3F2A2D] rounded-none w-full hover:bg-[#FDE1DD] border-none hover:text-[#3F2A2D]"
          >
            Add to cart | £{allItems[1].price}
          </button>
        </div>
        <div className="mb-16">
          <div className="relative w-full h-full">
            <Image
              src={allItems[2].img}
              alt="image1"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="mt-6 mb-6 text-2xl text-center font-subHeader">
            Extra Clean Face Wash
          </div>
          <button
            onClick={() => addItem("face wash")}
            className="btn bg-[#3F2A2D] rounded-none w-full hover:bg-[#FDE1DD] border-none hover:text-[#3F2A2D]"
          >
            Add to cart | £{allItems[2].price}
          </button>
        </div>
        <div className="mb-16">
          <div className="relative w-full h-full">
            <Image
              src={allItems[3].img}
              alt="image1"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="mt-6 mb-6 text-2xl text-center font-subHeader">
            In-Shower Moisturiser
          </div>
          <button
            onClick={() => addItem("moisturiser")}
            className="btn bg-[#3F2A2D] rounded-none w-full hover:bg-[#FDE1DD] border-none hover:text-[#3F2A2D]"
          >
            Add to cart | £{allItems[3].price}
          </button>
        </div>
      </div>
    </div>
  )
}
