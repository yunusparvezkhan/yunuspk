import React from 'react'

const Picsfetapp = () => {

    const outcomes = [
        "Lorem Ipsum is a dummy text model that can be used in any     kind of paragraph examples.",
        "Lorem Ipsum is a dummy text model that can be used in any.",
        "Lorem Ipsum is a dummy text model that can be used in any kind of paragraph examples.",
        "Lorem Ipsum is a dummy text model that can be used in any kind of paragraph examples. Lorem Ipsum is a dummy text model that can be used in any kind of paragraph examples.",
        "Lorem Ipsum is a dummy text model that can be used in any."
    ]

    return (
        <div>
            <div className='w-full mb-8'>
                <img src='https://mediabase.netlify.app/projects/pics-fetching-app/screenshots/allfeat.png' className='w-5/6 relative left-1/2 ttf' alt='FotoVision' />
            </div>
            <h1 className='text-2xl mb-2' >Introduction</h1>
            <p className='text-md text-gray-300 mb-8'>
                pics-fetching-app, (aka chitro) is an app that fetches Images matching with the user’s prompted query. This app uses api from unsplash & renders upto 10 available images to user.
            </p>

            <h1 className='text-2xl mb-2' >Purpose</h1>
            <p className='text-md text-gray-300 mb-8'>
                The purpose of building Chitro is to understand the concepts of fetching data from an api. This app also teaches and practices the state management concepts.
            </p>

            <h1 className='text-2xl mb-2' >Overview</h1>
            <p className='text-md text-gray-300 mb-8'>
                This app essentially has 2 sections. Those are the Search Feature & the Search Result Feature. The 2nd feature, Search Results, would not render at the first load of the application. It is when the user types some keywords and hits enter, the app sends request to the api & gets back some results. The app then renders the Search Results as images in a responsive grid UI.
            </p>

            <h1 className='text-2xl mb-2' >Features</h1>
            <div className='mb-8 ml-5'>
                <h2 className='text-lg font-semibold' >1. Search Feature</h2>
                <p className='text-md text-gray-300 mb-3 ml-5'>
                    Search Feature renders at the very top of the app. This is basically a search input bar and a submit button with a search icon. Users initially can type their queries here and hit the submit button or enter on keyboard.
                </p>

                <h2 className='text-lg font-semibold' >2. Search Results Feature</h2>
                <p className='text-md text-gray-300 mb-3 ml-5'>
                    After user submits some queries, the app sends a request to Unsplash with the user’s queries, and prints the images got back from the api as a grid view below the search feature.
                </p>

            </div>

            <h1 className='text-2xl mb-2' >Project Outcomes</h1>
            <p className='text-md text-gray-300 mb-5'>
                Lorem Ipsum is a dummy text model that can be
                used in any kind of paragraph examples. Lorem Ipsum is a dummy text
                model that can be used in any kind of paragraph examples.
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

export default Picsfetapp