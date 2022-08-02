import Head from "next/head"
import React from "react"
import { Layout } from "../components"

const basket = () => {
  return (
    <Layout>
      <Head>
        <title>Your basket</title>
        <meta name="keywords" content="basket" />
      </Head>
      <div>Your basket</div>
    </Layout>
  )
}

export default basket
