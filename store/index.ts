import create from "zustand"
import { devtools } from "zustand/middleware"

type Product = {
  title: string
  price: number
  id: string
}
interface BasketStore {
  items: Product[]
  addItem: (item: Product) => void
  removeItem: (id: string) => void
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
    removeItem: (id) =>
      set((state) => ({
        items: state.items.filter(
          (element) => element.id !== id
        ),
      })),
  }))
)
