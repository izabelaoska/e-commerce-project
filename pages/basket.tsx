import Head from "next/head"
import { title } from "process"
import React from "react"
import { FaMoneyCheck } from "react-icons/fa"
import { Layout } from "../components"
import { BasketCard } from "../components/Layout/Navbar/BasketCard"
import { useBasketStore } from "../store"

export const BasketItems = () => {
  const { items } = useBasketStore()

  let subtotal = items.reduce(
    (acc, next) => {
      return {
        price: acc.price + next.price,
      }
    },
    { price: 0 }
  )

  return (
    <Layout>
      <Head>
        <title>Your basket</title>
        <meta name="keywords" content="basket" />
      </Head>
      <BasketCard>
        <div>
          {items.map((item) => {
            return (
              <div
                className="grid grid-cols-3 gap-4"
                key={item.title}
              >
                <div
                  className="grid col-span-2 text-lg basket-item justify-items-start font-subHeader"
                  key={item.title}
                >
                  {item.title}
                </div>
                <div className="grid text-lg basket-item justify-items-end font-subHeader">
                  {item.price}
                </div>
              </div>
            )
          })}
          <div className="grid grid-cols-2 gap-10 pt-10">
            <div className="flex items-end text-xl font-subHeader">
              Total: £{subtotal.price.toFixed(2)}
            </div>
          </div>
          <div className="mt-2 font-subHeader">
            Shipping calculated at next step
          </div>
        </div>
      </BasketCard>
    </Layout>
  )
}

export default BasketItems
