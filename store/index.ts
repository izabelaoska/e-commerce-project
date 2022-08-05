import create from "zustand"
import { devtools } from "zustand/middleware"

interface BasketStore {
  items: string[]
  addItem: (item: string) => void
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
