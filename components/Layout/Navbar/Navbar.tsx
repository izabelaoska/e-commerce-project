import { Basket } from "./Basket"
import { Notifications } from "./Notifications"
import { Search } from "./Search"
import { SignIn } from "./SignIn"
import Link from "next/link"

export const Navbar = () => {
  return (
    <header className="bg-gray-900 text-white shadow-xl fixed w-full z-10">
      <nav className="container px-4 mx-auto navbar">
        <div className="navbar-start navbar-title">
          <a className="normal-case text-4xl">E-Commerce</a>
        </div>
        <div className="navbar-end gap-2">
          <Search />
          <Notifications />
          <Link href="/basket">
            <Basket />
          </Link>
          <SignIn />
        </div>
      </nav>
    </header>
  )
}
