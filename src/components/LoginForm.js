import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const LoginForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const [showPassword, setShowPassword] = useState(false)

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }))
  }

  function submitHandler(event) {
    event.preventDefault()
    setIsLoggedIn('true')
    toast.success('Logged In Successfully!')
    navigate('/dashboard')
    console.log('Printing the Form Data')
    console.log(formData)
  }

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col w-full max-w-md gap-y-4 mt-6 mx-auto px-4 sm:px-0"
    >
      <label className="w-full">
        <p className="text-sm text-richblack-5 mb-1 leading-6">
          Email Address <sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type="email"
          value={formData.email}
          onChange={changeHandler}
          name="email"
          placeholder="Enter Email address"
          className="border border-white bg-richblack-800 rounded-lg text-richblack w-full p-3 focus:outline-none"
        />
      </label>

      <label className="w-full relative">
        <p className="text-sm text-richblack-5 mb-1 leading-6">
          Password <sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type={showPassword ? 'text' : 'password'}
          value={formData.password}
          onChange={changeHandler}
          name="password"
          placeholder="Enter Password"
          className="bg-richblack-800 rounded-lg text-richblack-5 w-full p-3 focus:outline-none"
        />
        <span
          className="absolute right-3 top-[42px] cursor-pointer"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? (
            <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
          ) : (
            <AiOutlineEye fontSize={24} fill="#AFB2BF" />
          )}
        </span>

        <Link to="#" className="text-xs mt-1 text-blue-100 ml-auto block w-max">
          Forgot Password
        </Link>
      </label>

      <button className="bg-yellow-50 text-richblack-900 font-semibold py-2 px-4 mt-6 rounded-lg hover:bg-yellow-100 transition-all duration-200">
        Sign In
      </button>
    </form>
  )
}

export default LoginForm
