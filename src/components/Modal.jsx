import React from 'react'
import { Modal, Group, Button } from '@mantine/core';
import { Link } from 'react-router-dom';
import { MoveRight } from 'lucide-react';

const Modalbox = ({open,close}) => {
   

    return (
        <>
            <Modal opened={open} onClose={close} centered>
                <div className='text-center'>
                    <p className='text-xl font-bold'>Choose to Create</p>
                    <div className="btns mt-7">
                        <Group className='flex-col'>
                            
                            <Link to='/individual'>
                                <Button
                                    variant="light"
                                    rightSection={<MoveRight size={14} />}
                                    className='bg-black text-white hover:text-[#228Be6]'
                                >
                                    Individual
                                </Button>

                            </Link>
                            <Link to='/group'> 
                                <Button
                                    variant="light"
                                    rightSection={<MoveRight size={14} />}
                                    className='bg-black text-white hover:text-[#228Be6]'
                                >
                                    Group
                                </Button>
                            </Link>
                       </Group>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default Modalbox