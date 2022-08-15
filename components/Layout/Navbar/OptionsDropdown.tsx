import Link from "next/link"
import { BiUser } from "react-icons/bi"

export const OptionsDropdown = () => {
  return (
    <div className="dropdown dropdown-end">
      <button
        tabIndex={0}
        // className="btn btn-ghost btn-circle avatar"
      >
        <BiUser className="h-7 w-7"></BiUser>
      </button>
      <div
        tabIndex={0}
        className="flex h-32 gap-4 p-6 mt-3 text-lg text-gray-900 shadow w-52 menu menu-compact dropdown-content bg-base-100 rounded-box font-subHeader"
      >
        <Link href="/signin">
          <a>Sign In</a>
        </Link>
        <Link href="/signup">
          <a>Register</a>
        </Link>
      </div>
    </div>
  )
}
