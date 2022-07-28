export const SignIn = () => {
  return (
    <div className="dropdown dropdown-end">
      <label
        tabIndex={0}
        className="m-1 btn bg-gray-900 border-none hover:bg-gray-900 text-md"
      >
        Sign in
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 text-gray-900 text-md"
      >
        <li>
          <a>Register</a>
        </li>
      </ul>
    </div>
  )
}
