import React from 'react'

const Tskrinreact = () => {

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
                <img src='https://mediabase.netlify.app/projects/tasker-in-react/diagrams/mockup.png' className='w-3/4 relative left-1/2 ttf' alt='niyoga mockup' />
            </div>
            <h1 className='text-2xl mb-2' >Introduction</h1>
            <p className='text-md text-gray-300 mb-8'>
                Tasker In React (Niyoga) is a basic tasker app that uses react states
                & json server to keep track of tasks that user creates.
                And lets the user mark tasks as completed, delete, edit as well.
            </p>

            <h1 className='text-2xl mb-2' >Purpose</h1>
            <p className='text-md text-gray-300 mb-8'>
                Purpose of making this tasker app is to learn about several
                design aspects of reactjs and data handling & forms as well.
            </p>

            <h1 className='text-2xl mb-2' >Overview</h1>
            <p className='text-md text-gray-300 mb-8'>
                The app has a big input field at the top for typing the tasks. All the created tasks then lists down as cards, in a grid view.
            </p>

            <h1 className='text-2xl mb-2' >Elements</h1>
            <div className='mb-8 ml-5'>
                <h2 className='text-lg font-semibold' >1. Heading</h2>
                <p className='text-md text-gray-300 mb-3 ml-5'>
                    Heading is basically the name of the project being rendered at the very top. It is spelled "Niyoga" in the app.
                </p>

                <h2 className='text-lg font-semibold' >2. Task Creator</h2>
                <p className='text-md text-gray-300 mb-3 ml-5'>
                    Task creator is the chunk of features, which lets the user create a new task. This consists of a input field, a submit button & a label.
                </p>

                <h2 className='text-lg font-semibold' >3. Task Previewer</h2>
                <p className='text-md text-gray-300 mb-3 ml-5'>
                    After the user has some tasks created, the Tasks Previewer renders the tasks as cards in a grid view at the very bottom of the app.
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

export default Tskrinreact