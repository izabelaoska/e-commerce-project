import { Basket } from "./Basket"
import { Notifications } from "./Notifications"
import { Search } from "./Search"
import { OptionsDropdown } from "./OptionsDropdown"
import Link from "next/link"

export const Navbar = () => {
  return (
    <header className="fixed z-10 w-full text-white bg-gray-900 shadow-xl">
      <nav className="container px-4 mx-auto navbar">
        <div className="navbar-start navbar-title">
          <a className="text-4xl normal-case">E-Commerce</a>
        </div>
        <div className="gap-1 navbar-end">
          <Search />
          <Notifications />
          <Link href="/basket">
            <Basket />
          </Link>
          <OptionsDropdown />
        </div>
      </nav>
    </header>
  )
}
