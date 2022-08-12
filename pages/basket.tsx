import Head from "next/head"
import { title } from "process"
import React from "react"
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
              <div className="flex gap-8" key={item.title}>
                <div
                  className="basket-item"
                  key={item.title}
                >
                  {item.title}
                </div>
                <div className="basket-item">
                  {item.price}
                </div>
              </div>
            )
          })}
          <div className="flex pt-14">
            Total: £{subtotal.price.toFixed(2)}
          </div>
        </div>
      </BasketCard>
    </Layout>
  )
}

export default BasketItems
