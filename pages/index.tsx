import { Footer, Layout, NewProduct } from "../components"
import { Hero } from "../components/Layout/Hero/Hero"
import { OurProducts } from "../components/Layout/OurProducts/OurProducts"

const Home = () => {
  return (
    <Layout>
      <Hero />
      <NewProduct />
      <OurProducts />
    </Layout>
  )
}

export default Home
