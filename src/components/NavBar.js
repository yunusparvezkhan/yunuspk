import React from 'react';
import { BsSearch } from 'react-icons/bs'

const NavBar = () => {
    return (
        <div className='w-full bg-blue-500 h-14 flex flex-row items-center justify-between text-white' >
            <h1 className='text-3xl font-thin ml-10'>YunusPK</h1>
            <div className='flex flex-row items-center gap-5'>
                <button>home</button>
                <button>about</button>
                <button>blogs</button>
                <button>projects</button>
                <button>achievements</button>
                <button>academics</button>
                <button>playlists</button>
                <button>contact</button>
            </div>
            <div className='mr-10 bg-gray-800 h-9 flex flex-row items-center p-2' >
                <input className='bg-transparent border-none outline-none' placeholder='Search...' />
                <BsSearch className='cursor-pointer' />
            </div>
        </div>
    )
}

export default NavBar