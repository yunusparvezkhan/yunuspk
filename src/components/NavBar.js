import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import Link from './Link';
import { links } from '../data/navbar-links';

const NavBar = () => {
    const { activePage } = useSelector((state) => {
        return state.navigation;
    })

    const stylefunc = (path, secondaryPath) => {
        if (path === activePage || secondaryPath === activePage) {
            return "text-gray-800 font-bold underline "
        }
    }

    const renderNavBtns = links.map((link) => {
        return (
            <Link to={link.path} secondaryPath={link.secondaryPath} className={stylefunc(link.path) + ' ' + stylefunc(link.secondaryPath)} key={link.path} >{link.title}</Link>
        )
    });


    return (
        <div className='w-full bg-blue-500 h-14 flex flex-row items-center justify-between text-white' >
            <h1 className='text-3xl font-thin ml-10'>YunusPK</h1>
            <div className='flex flex-row items-center gap-2'>
                {renderNavBtns}
            </div>
            <div className='mr-10 bg-gray-800 h-9 flex flex-row items-center p-2' >
                <input className='bg-transparent border-none outline-none' placeholder='Search...' />
                <BsSearch className='cursor-pointer' />
            </div>
        </div>
    )
}

export default NavBar