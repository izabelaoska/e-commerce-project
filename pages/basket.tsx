import Head from "next/head"
import { title } from "process"
import React from "react"
import { Layout } from "../components"
import { BasketCard } from "../components/Layout/Navbar/BasketCard"
import { useBasketStore } from "../store"

export const BasketItems = () => {
  const { items } = useBasketStore()
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
              <div key={item.title}>
                <div key={item.title}>{item.title}</div>
                <div>{item.price}</div>
              </div>
            )
          })}
        </div>
      </BasketCard>
    </Layout>
  )
}

export default BasketItems
