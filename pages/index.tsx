import { Footer, Layout, NewProduct } from "../components"
import { Hero } from "../components/Layout/Hero/Hero"
import { OurProducts } from "../components/Layout/OurProducts/OurProducts"
import styles from "../styles/Home.module.css"

const Home = () => {
  return (
    <Layout>
      <Hero />
      <NewProduct />
      <OurProducts />
      <Footer />
    </Layout>
  )
}

export default Home
