import React from 'react'
import SignUpForm from './SignUpForm'
import LoginForm from './LoginForm'
import frameImage from '../assets/frame.png'


const Template = ({title,desc1,desc2,image,formType,setIsLoggedIn}) => {
  return (
    <div className='flex w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12gap-y-0'>
        <div>
            <h1>{title}</h1>
            <p>
                <span>{desc1}</span>
                <span>{desc2}</span>
            </p>
            {formType === "signup" ?
            (<SignUpForm setIsLoggedIn={setIsLoggedIn}/>):
            (<LoginForm  setIsLoggedIn={setIsLoggedIn}/>)
            }

            <div>
              <div></div>
              <p>OR</p>
              <div></div>
            </div>
            <button>
              <p>Sign in with Google</p>
            </button>

        </div>
        <div>
          <img src={frameImage}
          alt='Pattern'
          width={558}
          height={504}
          loading='lazy'/>

          <img src={image}
          alt='Students'
          width={558}
          height={480}
          loading='lazy'/>

        </div>
      
    </div>
  )
}

export default Template
