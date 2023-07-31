import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Link from './Link';
import { links } from '../data/navbar-links';
import './styles/navbar.css'

import { BsSearch } from 'react-icons/bs';
import { IoMenu } from 'react-icons/io5'
import { AiOutlineClose } from 'react-icons/ai'

const NavBar = () => {
    const [screenWidthSts, setScreenWidthSts] = useState(window.innerWidth > 1100 ? 'alpha' : window.innerWidth > 600 ? 'beta' : 'gamma');
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
            <div
                key={link.path}
                onClick={() => setIsMenuActive(false)}
                className={isMenuActive ? 'w-full py-2 pl-7 hover:bg-gray-800 cursor-pointer ' : 'px-2 py-1 hover:bg-gray-800 cursor-pointer ' + stylefunc(link.path) + ' ' + stylefunc(link.secondaryPath)}
            >
                <Link
                    to={link.path}
                    secondaryPath={link.secondaryPath}
                >
                    {link.title}
                </Link>
            </div>
        )
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 1100) {
            setScreenWidthSts('alpha')
        } else if (window.innerWidth < 1100) {
            if (window.innerWidth > 600) {
                setScreenWidthSts('beta');
            } else {
                setScreenWidthSts('gamma');
            }
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

    if (screenWidthSts === 'alpha') {
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
    } else if (screenWidthSts === 'beta') {
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
                        <div className='nav-menu fixed w-4/5 text-white justify-between' >
                            <div className='nav-menu-header flex flex-row items-center justify-between ' >
                                <div className='nav-menu-branding' >
                                    <h1 className='text-3xl font-thin ml-6 '>YunusPK</h1>
                                </div>
                                <button onClick={handleMenuCloseClick} className="nav-menu-close-btn p-3 mr-3 transition duration-300">
                                    <AiOutlineClose />
                                </button>
                            </div>
                            <div className='nav-menu-contents flex flex-col items-start justify-between'>
                                {renderNavBtns}
                            </div>
                        </div>

                    }
                </div>
            </div>
        )
    } else if (screenWidthSts === 'gamma') {
        return (
            <div>
                Gamma NavBar
            </div>
        )
    }
}

export default NavBar