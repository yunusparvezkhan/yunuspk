import React from 'react'

const UnderDevNotifier = ({ animationHeight }) => {
    return (
        <div className='h-full w-full absolute' >
            <div className='absolute t-40percent left-1/2 ttff ' >
                <center>
                    <iframe src='https://lottie.host/?file=30586555-da89-41aa-83ba-e1e8d92784fc/mXyBOCCNhC.json' title='development-animation' height={animationHeight} />
                </center>
                <h1 className='text-4xl'>
                    This page is under development!
                </h1>
            </div>
        </div >
    )
}

export default UnderDevNotifier