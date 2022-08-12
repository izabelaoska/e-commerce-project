import React, { FC, PropsWithChildren } from "react"
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCcPaypal,
  FaMoneyCheck,
} from "react-icons/fa"

export const BasketCard: FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <div className="w-[500px] px-10 py-12 m-auto rounded-3xl bg-[#FDE1DD]">
      <p className="text-2xl font-subHeader">
        Your basket:
      </p>
      <div className="pt-10">{children}</div>
      <div className=" my-5 border-b border-[#101827] opacity-20"></div>
      <div className="flex justify-between mt-5">
        <div>
          <div className="text-lg font-subHeader">
            We accept:
          </div>
          <div className="flex text-2xl text-[#101827] gap-x-2 mt-1">
            <FaCcVisa />
            <FaCcMastercard />
            <FaCcAmex />
            <FaCcPaypal />
          </div>
        </div>
        <div className="flex items-end justify-end">
          <button className="font-normal border-none btn btn-primary gap-x-2">
            <FaMoneyCheck />
            <span>CHECKOUT</span>
          </button>
        </div>
      </div>
    </div>
  )
}
