import React from 'react'
import SignUpForm from './SignUpForm'
import LoginForm from './LoginForm'
import frameImage from '../assets/frame.png'
import { FcGoogle } from 'react-icons/fc'

const Template = ({ title, desc1, desc2, image, formType, setIsLoggedIn }) => {
  return (
    <div className='flex flex-col-reverse lg:flex-row items-center justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-12'>
      {/* LEFT SECTION - FORM */}
      <div className='w-full max-w-[450px]'>
        <h1 className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]'>{title}</h1>
        <p className='text-[1.125rem] leading-[1.625rem] mt-4'>
          <span className='text-richblack-100'>{desc1}</span><br />
          <span className='text-blue-100 italic'>{desc2}</span>
        </p>

        {formType === "signup" ? (
          <SignUpForm setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        )}

        <div className='flex w-full items-center my-4 gap-x-2'>
          <div className='h-[1px] w-full bg-richblack-700'></div>
          <p className='text-richblack-700 font-medium'>OR</p>
          <div className='h-[1px] w-full bg-richblack-700'></div>
        </div>

        <button className='flex w-full justify-center items-center rounded-[8px] font-medium text-richblack-100
          border border-richblack-700 px-[12px] py-[8px] mt-6 gap-x-2'>
          <FcGoogle />
          <p>Sign in with Google</p>
        </button>
      </div>

      {/* RIGHT SECTION - IMAGE */}
      <div className='relative w-full max-w-[450px]'>
        <img
          src={frameImage}
          alt='Pattern'
          width={558}
          height={504}
          loading='lazy'
          className='w-full'
        />
        <img
          src={image}
          alt='Students'
          width={558}
          height={480}
          loading='lazy'
          className='absolute -top-4 right-4 w-full'
        />
      </div>
    </div>
  )
}

export default Template
