import React, { FC, PropsWithChildren } from "react"

export const BasketCard: FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <div className="w-[500px] px-10 py-12 m-auto rounded-3xl bg-[#FDE1DD]">
      <p className="text-3xl font-subHeader">
        Your basket:
      </p>
      <div className="pt-10">{children}</div>
    </div>
  )
}
