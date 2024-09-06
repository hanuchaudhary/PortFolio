import React from 'react'
import Socials from './Socials'

const Profile = () => {
  return (
    <div className='text-white font-mono flex items-center justify-between mx-40 gap-20 my-20'>
        <div className="image">
            <img src="src\assets\profile.jpeg" alt="" />
        </div>
        <div className="details">
            <h1 className='text-5xl'>kush chaudhary</h1>
            <h2 className='mb-4'>fullstack developer from India..</h2>
            <p>I’m a full-stack developer passionate about building scalable and impactful websites and applications. With expertise in design, animation, and user experience, I craft seamless and dynamic interfaces that engage users while aligning with brand identities. Let's collaborate to create extraordinary digital experiences that stand out and make a difference.</p>
            <div className='mt-4'>

            <Socials/>
            </div>
        </div>
    </div>
  )
}

export default Profile