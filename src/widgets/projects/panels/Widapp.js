import React from 'react'

const Widapp = () => {

    const outcomes = [
        "Lorem Ipsum is a dummy text model that can be used in any     kind of paragraph examples.",
        "Lorem Ipsum is a dummy text model that can be used in any.",
        "Lorem Ipsum is a dummy text model that can be used in any kind of paragraph examples.",
        "Lorem Ipsum is a dummy text model that can be used in any kind of paragraph examples. Lorem Ipsum is a dummy text model that can be used in any kind of paragraph examples.",
        "Lorem Ipsum is a dummy text model that can be used in any."
    ]

    return (
        <div>
            <div className='flex flex-row'>
                <div className='flex-1' >
                    <h1 className='text-2xl mb-2' >Introduction</h1>
                    <p className='text-md text-gray-300 mb-8'>
                        Widget App is a very simple practice app of React Hooks systems. This app consists 4 pages & concepts like react hooks & fetching data from api.
                    </p>
                    <h1 className='text-2xl mb-2' >Purpose</h1>
                    <p className='text-md text-gray-300 mb-8'>
                        Purpose of making the Widget App is to learn & practice about some of the most important aspects of ReactJs. This project taught me about hooks, fetching api data & practised react application states.
                    </p>
                </div>
                <div className='flex-2 mr-5 ml-2 '>
                    <img src='https://mediabase.netlify.app/projects/widget-app/assets/logo.png' alt='widget-app logo' />
                </div>
            </div>

            <h1 className='text-2xl mb-2' >Overview</h1>
            <p className='text-md text-gray-300 mb-8'>
                This app has 4 pages, namely Search, SB Slokas, Dropdown, Translate. Two of them taught me about data fetching & 2 of them taught me about hooks and states.
            </p>

            <h1 className='text-2xl mb-2' >Pages</h1>
            <div className='mb-8 ml-5'>
                <h2 className='text-lg font-semibold' >1. Search</h2>
                <p className='text-md text-gray-300 mb-3 ml-5'>
                    The Dropdown page is simply a Dropdown element rendered in screen. When ever user clicks on it, this dropdown opens and lets the user select from one of the options.
                </p>

                <h2 className='text-lg font-semibold' >2. SB Slokas</h2>
                <p className='text-md text-gray-300 mb-3 ml-5'>
                    The SB Slokas stands for Srimad Bhagavatam Slokas. This page is a accordion page, which responds on user clicks by expanding the clicked accordion. The list contains slokas from Srimad Bhagavatam
                </p>

                <h2 className='text-lg font-semibold' >3. Dropdown</h2>
                <p className='text-md text-gray-300 mb-3 ml-5'>
                    The dropdown page is basically a dropdown element created by React logics & not with any prebuild markup tags.
                </p>

                <h2 className='text-lg font-semibold' >4. Translate</h2>
                <p className='text-md text-gray-300 mb-3 ml-5'>
                    Translate is a page which takes an input in any language, and translates that to any desired language. But this page won't work without localhost:3000 url. Therefore anyone who wants to use this, have to clone the project in their local machine.
                </p>
            </div>

            <h1 className='text-2xl mb-2' >Project Outcomes</h1>
            <p className='text-md text-gray-300 mb-5'>
                Lorem Ipsum is a dummy text model that can be
                used in any kind of paragraph examples. Lorem Ipsum is a dummy text model that can be used in any kind of paragraph examples.
            </p>
            <div className='text-md text-gray-300 mb-8 ml-5' >
                {outcomes.map((outcome, index) => {
                    return (
                        <div key={index} className='flex flex-row items-left' >
                            <span>{index + 1 + "."}</span>
                            <label className='ml-2' >{outcome}</label>
                        </div>
                    )
                })}
            </div>

            <h1 className='text-2xl mb-2' >Conclusion</h1>
            <p className='text-md text-gray-300 mb-8'>
                Lorem Ipsum is a dummy text model that can be
                used in any kind of paragraph examples. Lorem
                Ipsum is a dummy text model that can be used
                in any kind of paragraph examples. Lorem Ipsum
                is a dummy text model that can be used in any
                kind of paragraph examples. Lorem Ipsum is a
                dummy text model that can be used in any. Lorem
                Ipsum is a dummy text model that can be used
                in any kind of paragraph examples. Lorem Ipsum
                is a dummy text model that can be used in any kind
                of paragraph examples. Lorem Ipsum is a dummy text
                model that can be used in any kind of paragraph
                examples. Lorem Ipsum is a dummy text model that
                can be used in any.
            </p>






        </div>
    )
}

export default Widapp;