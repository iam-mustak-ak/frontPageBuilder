import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/heart.png'
import { Github } from 'lucide-react';
const Navbar = () => {
  return (
      <div className='py-5 absolute w-full'>
          <div className="logo flex justify-between items-center">
              <Link to="/">
                  <div className='flex items-center'>
                      <img className='w-10' src={logo} alt="" />
                      <p className='text-[2rem] font-bold font-alumni text-white'>Create Front-Page</p>
                  </div>
              </Link>

              <div className="menu flex items-center gap-5 font-alumni text-white">
                  <Link className='' href="#">About</Link>
                  <Link className='bg-black px-3 py-2 rounded-md flex gap-2 items-center' href="#"> {<Github size={20}/>} Repo</Link>
              </div>
          </div>
    </div>
  )
}

export default Navbar