import React, { FC, PropsWithChildren } from "react"

export const BasketCard: FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <div className="w-auto px-16 py-12 mx-40 border">
      <p className="text-4xl font-subHeader">
        Your basket:
      </p>
      <div className="flex pt-12 ">{children}</div>
    </div>
  )
}
