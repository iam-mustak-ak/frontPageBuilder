import React from 'react'
import { useDisclosure } from '@mantine/hooks';
import Modal from '../components/Modal';
const Hero = () => {

    const [opened, { open, close }] = useDisclosure(false);
  return (
      <div className='flex flex-col items-center justify-center font-alumni h-screen text-white'>
          
          <div className='w-2/4 mx-auto text-center'>
              <h1 className='text-[2rem] mb-6'>Create Your Front-Page in a snap</h1>
              <button onClick={open} className='bg-black px-3 py-2 rounded-md'>Create Now</button>
          </div>
          <Modal close={close} open={opened} />
    </div>
  )
}

export default Hero