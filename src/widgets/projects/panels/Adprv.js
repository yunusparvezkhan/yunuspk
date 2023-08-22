import React from 'react'

const Adpvr = () => {

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
                <div>
                    <h1 className='text-2xl mb-2' >Introduction</h1>
                    <p className='text-md text-gray-300 mb-8'>
                        Adprava is a project built with the intention of practice and learning
                        web development with ReactJS. The project is very simple and straight
                        forward. This project have taught me some most useful and important
                        concepts in ReactJS
                    </p>
                    <h1 className='text-2xl mb-2' >Purpose</h1>
                    <p className='text-md text-gray-300 mb-8'>
                        Adprava is built solely with the purpose of learning React JS and is
                        being shared with other developers in github for reviews, practice,
                        help to begginers etc reasons.
                    </p>
                </div>
                <div className='flex-2 mr-5 ml-2 '>
                    <img src='https://mediabase.netlify.app/projects/adprava/assets/AA-in-Hindi-in-blue-with-techboy.png' alt='adprava logo' />
                </div>
            </div>

            <h1 className='text-2xl mb-2' >Overview</h1>
            <p className='text-md text-gray-300 mb-8'>
                The app essentially has 6 pages, namely Dropdown, Accordion, Buttons, Modal,
                Table, Counter. Links to all these pages are there in the navbar at the top
                of the app. Each page contains some features, that consists of different
                kinds for concepts & experience in ReactJS.
            </p>

            <h1 className='text-2xl mb-2' >Pages</h1>
            <div className='mb-8 ml-5'>
                <h2 className='text-lg font-semibold' >1. Dropdown</h2>
                <p className='text-md text-gray-300 mb-3 ml-5'>
                    The Dropdown page is simply a Dropdown element rendered in screen. When ever user clicks on it, this dropdown opens and lets the user select from one of the options.
                </p>

                <h2 className='text-lg font-semibold' >2. Accordion</h2>
                <p className='text-md text-gray-300 mb-3 ml-5'>
                    The AccordionPage is a basic list of questions, and if clicked, some extended text appears below the clicked question. Only one of these Accordions can be extended at a time.
                </p>

                <h2 className='text-lg font-semibold' >3. Buttons</h2>
                <p className='text-md text-gray-300 mb-3 ml-5'>
                    The ButtonsPage is essentially a showcase of the button theory in React JS. Here we have a component created as Button and that can be used as a normal button. The plus point of this Button component is that just by passing some simple prop names we can use button configurations from our 20 presets.
                </p>

                <h2 className='text-lg font-semibold' >4. Modal</h2>
                <p className='text-md text-gray-300 mb-3 ml-5'>
                    ModalPage is a demostration of a component Modal. Modal is basically a popup box component. The Modal popup box has a bold centered title, a text for giving some message to the user and two buttons, one for conformaiton, called Proceed and another for cancelation, called Cancel.
                </p>

                <h2 className='text-lg font-semibold' >5. Table</h2>
                <p className='text-md text-gray-300 mb-3 ml-5'>
                    Table Page is just a demonstration of how tables can be achieved in ReactJS. And this component is also reusable with dynamic datasets.
                </p>

                <h2 className='text-lg font-semibold' >6. Counter</h2>
                <p className='text-md text-gray-300 mb-3'>
                    Counter is just a simple React Counter component, but with use of custom hooks.
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

export default Adpvr;