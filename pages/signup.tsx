import React, { useState } from "react"
import { Layout } from "../components"
import { postFormData } from "../utils/postFormData"

const SignUpForm = () => {
  const [email, setEmail] = useState("")
  const [password1, setPassword1] = useState("")
  const [password2, setPassword2] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const formData = { email, password1, password2 }
    const { response, result } = await postFormData(
      formData,
      "/api/signup"
    )
    console.log(
      { response, result },
      email,
      password1,
      password2
    )
    setEmail(""), setPassword1(""), setPassword2("")
  }

  return (
    <Layout>
      <div className="w-[400px] h-[400px] py-11 px-10 m-auto rounded-3xl border">
        <div className="flex items-center justify-center text-2xl font-subHeader">
          Create an account
        </div>
        <form
          className="grid gap-1 mt-6"
          onSubmit={handleSubmit}
        >
          <label className="px-1 text-lg font-subHeader">
            Enter your email
          </label>
          <input
            className="px-2 py-1 border rounded-lg"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="px-1 text-lg font-subHeader">
            Enter password
          </label>
          <input
            className="px-2 py-1 border rounded-lg"
            type="text"
            value={password1}
            onChange={(e) => setPassword1(e.target.value)}
          />
          <label className="px-1 text-lg font-subHeader">
            Re-enter password
          </label>
          <input
            className="px-2 py-1 border rounded-lg"
            type="text"
            value={password2}
            onChange={(e) => {
              setPassword2(e.target.value)
            }}
          />
          <button className="bg-[#3F2A2D] border-none btn hover:bg-[#3F2A2D] mt-4 btn-sm">
            Register
          </button>
        </form>
      </div>
    </Layout>
  )
}

export default SignUpForm
