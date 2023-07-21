import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';

const NavBar = () => {
    const dispatch = useDispatch();

    const { activePage } = useSelector((state) => {
        return state.navigation;
    })

    console.log(activePage);

    const links = [
        {
            title: 'home',
            path: '/home',
            secondaryPath: '/'
        },
        {
            title: 'about',
            path: '/about',
            secondaryPath: ''
        },
        {
            title: 'blogs',
            path: '/blogs',
            secondaryPath: ''
        },
        {
            title: 'projects',
            path: '/projects',
            secondaryPath: ''
        },
        {
            title: 'achievements',
            path: '/achievements',
            secondaryPath: ''
        },
        {
            title: 'academics',
            path: '/academics',
            secondaryPath: ''
        },
        {
            title: 'playlists',
            path: '/playlists',
            secondaryPath: ''
        },
        {
            title: 'contact',
            path: '/contact',
            secondaryPath: ''
        },
    ];

    const renderNavBtns = links.map((link) => {
        return (
            <button href={link.path} key={link.path} >{link.title}</button>
        )
    })

    return (
        <div className='w-full bg-blue-500 h-14 flex flex-row items-center justify-between text-white' >
            <h1 className='text-3xl font-thin ml-10'>YunusPK</h1>
            <div className='flex flex-row items-center gap-5'>
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