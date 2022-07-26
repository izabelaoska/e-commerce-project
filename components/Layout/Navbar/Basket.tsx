import Link from "next/link"
import { useBasketStore } from "../../../store"

export const Basket = () => {
  const { items } = useBasketStore((state) => state)

  const subtotal = items.reduce(
    (acc, next) => {
      return {
        price: acc.price + next.price,
      }
    },
    { price: 0 }
  )

  const singleItem = () => {
    if (items.length === 1) {
      return `Your bag: ${items.length} Item`
    } else {
      return `Your bag: ${items.length} Items`
    }
  }

  const emptyBasket = () => {
    if (items.length === 0) {
      return (
        <div
          tabIndex={0}
          className="h-32 mt-3 shadow card card-compact dropdown-content w-52 bg-base-100"
        >
          <div className="flex items-center justify-center card-body">
            <span className="text-xl text-center text-gray-900 font-subHeader">
              Your basket is empty!
            </span>
            <div className="card-actions"></div>
          </div>
        </div>
      )
    } else {
      return (
        <div
          tabIndex={0}
          className="mt-3 shadow card card-compact dropdown-content w-52 bg-base-100"
        >
          <div className="text-gray-900 card-body">
            <span className="py-2 text-xl font-bold font-subHeader">
              {singleItem()}
            </span>
            <span className="pb-2 text-lg text-gray-900 font-subHeader">
              Subtotal: £{subtotal.price.toFixed(2)}
            </span>
            <div className="card-actions">
              <Link href="/basket">
                <button className="btn btn-primary btn-block btn-sm">
                  View basket
                </button>
              </Link>
            </div>
          </div>
        </div>
      )
    }
  }

  function renderBasketLogo() {
    return (
      <div className="indicator">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        <span className="badge badge-sm indicator-item">
          {items.length}
        </span>
      </div>
    )
  }
  return (
    <div className="dropdown dropdown-end">
      <label
        tabIndex={0}
        className="btn btn-ghost btn-circle"
      >
        {renderBasketLogo()}
      </label>
      {emptyBasket()}
    </div>
  )
}
