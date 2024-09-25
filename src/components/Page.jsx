import React from 'react'
import Profile from './Profile'
import Stack from './Stack'
import Projects from './Projects'
import Footer from './Footer'

const Page = () => {
  return (
    <div className='md:pt-20 pt-24 transition-colors duration-500 dark:bg-neutral-900 bg-neutral-100'>
        <Profile/>
        <Stack/>
        <Projects/>
        <Footer/>
    </div>
  )
}

export default Page