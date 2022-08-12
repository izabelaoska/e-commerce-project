import React, { FC, PropsWithChildren } from "react"

export const BasketCard: FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <div className="w-[700px] px-16 py-12 m-auto border-2">
      <p className="text-4xl font-subHeader">
        Your basket:
      </p>
      <div className="pt-12 ">{children}</div>
    </div>
  )
}
