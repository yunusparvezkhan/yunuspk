import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Link from './Link';
import { links } from '../data/navbar-links';
import './styles/navbar.css'

import { BsSearch } from 'react-icons/bs';
import { IoMenu } from 'react-icons/io5'
import { AiOutlineClose } from 'react-icons/ai'

const NavBar = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1100 ? true : false);
    const [isMenuActive, setIsMenuActive] = useState(false);
    const { activePage } = useSelector((state) => {
        return state.navigation;
    })

    const stylefunc = (path, secondaryPath) => {
        if (path === activePage || secondaryPath === activePage) {
            return "text-gray-900 hover:text-gray-100 "
        }
    }

    const renderNavBtns = links.map((link) => {
        return (
            <Link
                to={link.path}
                secondaryPath={link.secondaryPath}
                className={'px-2 py-1 hover:bg-gray-800 cursor-pointer ' + stylefunc(link.path) + ' ' + stylefunc(link.secondaryPath)}
                key={link.path}
            >
                {link.title}
            </Link>
        )
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth >= 1100) {
            setIsSmallScreen(false);
        } else if (window.innerWidth < 1100) {
            setIsSmallScreen(true);
        }
    }, true)

    const handleMenuClick = () => {
        // pop up menu section
        setIsMenuActive(true);
    }

    const handleMenuCloseClick = () => {
        // Close the menu
        setIsMenuActive(false)
    }

    if (isSmallScreen) {
        return (
            <div>
                <div className='nav-bar flex flex-row items-center justify-between text-white' >
                    <div className='text-4xl ml-8 cursor-pointer' onClick={handleMenuClick} >
                        <IoMenu />
                    </div>
                    <h1 className='text-3xl font-thin ml-10'>YunusPK</h1>
                    <div className='mr-10 bg-gray-800 h-9 flex flex-row items-center p-2' >
                        <input className='bg-transparent border-none outline-none' placeholder='Search...' />
                        <BsSearch className='cursor-pointer' />
                    </div>
                </div>
                <div className='nav-menu-container' >
                    {
                        isMenuActive &&
                        <div className='nav-menu fixed w-4/5 text-white' >
                            <button onClick={handleMenuCloseClick} className="nav-menu-close-btn absolute top-3 right-3 p-3 transition duration-300">
                                <AiOutlineClose />
                            </button>
                            <div className='nav-menu-branding' >
                                <h1 className='text-3xl font-thin absolute top-3 ttf'>YunusPK</h1>
                            </div>
                            <div className='nav-menu-contents'>
                                Hello from the popup menu
                            </div>
                        </div>

                    }
                </div>
            </div>
        )
    } else {
        return (
            <div className=' nav-bar flex flex-row items-center justify-between text-white' >
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
}

export default NavBar