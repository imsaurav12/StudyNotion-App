import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const SignUpForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showCnfPassword, setCnfShowPassword] = useState(false)
  const [accountType, setAccountType] = useState('student')

  const changeHandler = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }))
  }

  const submitHandler = (event) => {
    event.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      toast.error('Kindly Enter Same Password!')
      return
    }
    setIsLoggedIn(true)
    toast.success('Account Created')
    const finalData = {
      ...formData,
      accountType,
    }
    console.log('Printing Final Account Data')
    console.log(finalData)
    navigate('/dashboard')
  }

  return (
    <div className="w-full max-w-xl mx-auto px-4 sm:px-0">
      <div className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max mx-auto">
        <button
          className={`py-2 px-5 rounded-full transition-all duration-200 ${
            accountType === 'student'
              ? 'bg-yellow-50 text-richblack-900 font-semibold'
              : 'bg-transparent text-richblack-200'
          }`}
          onClick={() => setAccountType('student')}
        >
          Student
        </button>
        <button
          className={`py-2 px-5 rounded-full transition-all duration-200 ${
            accountType === 'Instructor'
              ? 'bg-yellow-50 text-richblack-900 font-semibold'
              : 'bg-transparent text-richblack-200'
          }`}
          onClick={() => setAccountType('Instructor')}
        >
          Instructor
        </button>
      </div>

      <form onSubmit={submitHandler} className="flex flex-col gap-y-4">
        <div className="flex flex-col sm:flex-row gap-x-4">
          <label className="w-full">
            <p className="text-sm text-richblack-5 mb-1 leading-6">
              First Name<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={changeHandler}
              placeholder="First Name"
              className="bg-richblack-800 rounded-lg text-richblack-5 w-full p-3 border border-white focus:outline-none"
            />
          </label>
          <label className="w-full">
            <p className="text-sm text-richblack-5 mb-1 leading-6">
              Last Name<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={changeHandler}
              placeholder="Enter Last Name"
              className="bg-richblack-800 rounded-lg text-richblack-5 w-full p-3 border border-white focus:outline-none"
            />
          </label>
        </div>

        <label className="w-full">
          <p className="text-sm text-richblack-5 mb-1 leading-6">
            Email Address<sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Enter Email address"
            className="bg-richblack-800 rounded-lg text-richblack w-full p-3 border border-white focus:outline-none"
          />
        </label>

        <div className="flex flex-col sm:flex-row gap-x-4">
          <label className="relative w-full">
            <p className="text-sm text-richblack-5 mb-1 leading-6">
              Create Password<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={changeHandler}
              placeholder="Enter Password"
              className="bg-richblack-800 rounded-lg text-richblack-5 w-full p-3 border border-white focus:outline-none"
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
          </label>

          <label className="relative w-full">
            <p className="text-sm text-richblack-5 mb-1 leading-6">
              Confirm Password<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showCnfPassword ? 'text' : 'password'}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={changeHandler}
              placeholder="Confirm Password"
              className="bg-richblack-800 rounded-lg text-richblack-5 w-full p-3 border border-white focus:outline-none"
            />
            <span
              className="absolute right-3 top-[42px] cursor-pointer"
              onClick={() => setCnfShowPassword((prev) => !prev)}
            >
              {showCnfPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-50 text-richblack-900 font-semibold py-2 px-4 rounded-lg hover:bg-yellow-100 transition-all duration-200 mt-4"
        >
          Create an Account
        </button>
      </form>
    </div>
  )
}

export default SignUpForm
