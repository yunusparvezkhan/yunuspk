import React from 'react'

const Ulbm = () => {
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
                <img src='https://mediabase.netlify.app/projects/ulbumy/screenshots/allfeat.png' className='w-5/6 relative left-1/2 ttf' alt='FotoVision' />
            </div>
            <h1 className='text-2xl mb-2' >Introduction</h1>
            <p className='text-md text-gray-300 mb-8'>
                Ulbumy is a app that organises user datasets in a three layer level. Initially this app has a button to create a user, then inside the user tabs, it has option to create albums and inside albums it has features to create images. This way albums of different photos under different users can be organised.
            </p>

            <h1 className='text-2xl mb-2' >Purpose</h1>
            <p className='text-md text-gray-300 mb-8'>
                Ulbumy is a beginner project in react js to practice and learn about async thunks and backend data fetching methods with reduxjs store.
            </p>

            <h1 className='text-2xl mb-2' >Overview</h1>
            <p className='text-md text-gray-300 mb-8'>
                This app on the top level has 3 features, that’s users, albums & images. At the landing in the app, it has feature to add a new user, and inside every user’s panel (that will apprear as a list), there is a feature to add a new album, and exactly in the same way, every album has a feature to add images.
            </p>


            <h1 className='text-2xl mb-2' >! Note</h1>
            <p className='text-md text-gray-300 mb-8'>
                This app only works with a json server running on the localhost:3010 port.
            </p>

            <h1 className='text-2xl mb-2' >Features</h1>
            <div className='mb-8 ml-5'>
                <h2 className='text-lg font-semibold' >1. User's Feature</h2>
                <p className='text-md text-gray-300 mb-3 ml-5'>
                    The search feature in Ulbumy creates a user, and sends that request to backend as well. Inside every user, multiple albums can be created.
                </p>

                <h2 className='text-lg font-semibold' >2. Albums Feature</h2>
                <p className='text-md text-gray-300 mb-3 ml-5'>
                    The albums feature in Ulbumy creates an album under a certain user. This feature also sends that data/request to the backend as well.
                </p>

                <h2 className='text-lg font-semibold' >3. Images Feature</h2>
                <p className='text-md text-gray-300 mb-3 ml-5'>
                    The images feature in Ulbumy creates a random image under an album using the faker js library. This feature too, send that data to the backend.
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

export default Ulbm