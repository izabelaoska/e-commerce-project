import { Basket } from "./Basket"
import { Notifications } from "./Notifications"
import { Search } from "./Search"

export const Navbar = () => {
  return (
    <header className="bg-gray-900 text-white shadow-xl fixed w-full">
      <nav className="container px-4 mx-auto navbar">
        <div className="navbar-start">
          <a className="normal-case text-xl">E-Commerce</a>
        </div>
        <div className="navbar-end">
          <Search />
          <Notifications />
          <Basket />
        </div>
      </nav>
    </header>
  )
}
