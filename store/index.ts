import create from "zustand"
import { devtools } from "zustand/middleware"

type Product = {
  title: string
  price: number
}
interface BasketStore {
  items: Product[]
  addItem: (item: Product) => void
}

export const useBasketStore = create<BasketStore>()(
  devtools((set) => ({
    items: [],
    addItem: (item) =>
      set(
        (state) => ({
          items: [...state.items, item],
        }),
        false,
        "addItem"
      ),
  }))
)
