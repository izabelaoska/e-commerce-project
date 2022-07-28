import { Basket } from "./Basket"
import { Notifications } from "./Notifications"
import { Search } from "./Search"
import { SignIn } from "./SignIn"

export const Navbar = () => {
  return (
    <header className="bg-gray-900 text-white shadow-xl fixed w-full">
      <nav className="container px-4 mx-auto navbar">
        <div className="navbar-start gap-8">
          <a className="normal-case text-xl">E-Commerce</a>
        </div>
        <div className="navbar-end gap-2">
          <Search />
          <Notifications />
          <Basket />
          <SignIn />
        </div>
      </nav>
    </header>
  )
}
