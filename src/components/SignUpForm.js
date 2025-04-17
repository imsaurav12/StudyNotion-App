import React, { useState } from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const SignUpForm = ({setIsLoggedIn}) => {

     const navigate = useNavigate();
   
    const[formData,setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    })



    function changeHandler(event){
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    
    }
    ;

    function submitHandler(event){
        event.preventDefault();
        if(formData.password !== formData.confirmPassword){
            toast.error("Kindly Enter Same Password! ");
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account Created");
        const accountData={
            ...formData
        }
        console.log("Printing Data");
        console.log(formData);

        navigate("/dashboard");


    }
    const [showPassword,setShowPassword] = useState(false);
    const [showCnfPassword,setCnfShowPassword] = useState(false);

    const [accountType,setAccountType] = useState("student ")
    

  return (
    <div>
        {/* Student-Instructor Tab */}

        <div class="flex text-white my-6 gap-z-1 bg-richblack-800 p-1 rounded-full max-w-max">
  <button
  onClick={()=> setAccountType("student")}
   class="px-5 py-2 rounded-full text-sm font-medium bg-yellow-50 text-richblack-900">
    Student
  </button>
  <button
  onClick={()=>setAccountType("In")}
   class="px-5 py-2 rounded-full text-sm font-medium text-richblack-200 hover:bg-richblack-700 transition-all duration-200">
    Instructor
  </button>
</div>

        <form onSubmit={submitHandler}>
            {/* First Name and Last Name Box */}
            <div className='flex gap-x-4 mt-[20px]'>
                <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                First Name<sup className='text-pink-200'>*</sup>
            </p>
            <input
            className='border-r-1 border-b-1 border-white bg-richblack-800 rounded-[0.5rem] text-richblack w-full p-[12px]'
            required
            type='text'
            value={formData.firstName}
            onChange={changeHandler}
            name='firstName'
            placeholder='First Name'
            />
                </label>
                <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Last Name<sup className='text-pink-200'>*</sup>
            </p>
            <input
            className='border-r-1 border-b-1 border-white bg-richblack-800 rounded-[0.5rem] text-richblack w-full p-[12px]'
            required
            type='text'
            value={formData.lastName}
            onChange={changeHandler}
            name='lastName'
            placeholder='Enter Last Name'
            />
                </label>
            </div>
            {/* Email */}
            <div className='mt-[10px]'>
                <label className='w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                        Email Address<sup className='text-pink-200'>*</sup>
                    </p>
                    <input
                    className='border-r-1 border-b-1 border-white bg-richblack-800 rounded-[0.5rem] text-richblack w-full p-[12px]'
                    required
                    type='email'
                    value={formData.email}
                    onChange={changeHandler}
                    name='email'
                    placeholder='Enter Email address'
                    />
                </label>
            </div>
            {/* Create Password */}
            <div className='flex gap-x-4 mt-[10px]'>
                <label className='relative w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] w-full'>
                            Create Password<sup className='text-pink-200'>*</sup>
                        </p>
                        <input
                        className='border-r-1 border-b-1 border-white bg-richblack-800 rounded-[0.5rem] text-richblack w-full p-[12px]'
                        required
                        type={showPassword ? ("text") : ("password")}
                        value={formData.password}
                        onChange={changeHandler}
                        name='password'
                        placeholder='Enter Password'
                        />
                        <span
                        className='absolute right-3 top-[38px] cursor-pointer' 
                        onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ?
                             (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) :
                              (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                        </span>
                    </label>
                    <label className='relative w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] w-full'>
                            Confirm Password<sup className='text-pink-200'>*</sup>
                        </p>
                        <input
                        className='border-r-1 border-b-1 border-white bg-richblack-800 rounded-[0.5rem] text-richblack w-full p-[12px]'
                        required
                        type={showCnfPassword ? ("text") : ("password")}
                        value={formData.confirmPassword}
                        onChange={changeHandler} 
                        name='confirmPassword'
                        placeholder='Confirm Password'
                        />
                        <span
                        className='absolute right-3 top-[38px] cursor-pointer'
                         onClick={() => setCnfShowPassword((prev) => !prev)}>
                                {showCnfPassword ?
                                 (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 
                                 (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                        </span>
                    </label>
            </div>
            {/* Create Account Button */}
            <button className=' w-full bg-yellow-50 text-richblack-900 font-semibold py-2 px-4 rounded-lg hover:bg-yellow-100 transition-all duration-200 mt-7'>
                Create an Account
            </button>

        

        </form>
      
    </div>
  )
}

export default SignUpForm
