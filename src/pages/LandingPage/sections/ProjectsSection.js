import React, { useState } from 'react';
import '../styles/projects-section.css'

// This component expects the `projectsData` prop to be an array of objects
const ProjectsSection = ({ projectsData }) => {
    const [activeProject, setActiveProject] = useState(0);

    const renderProjectsList = projectsData.map((project, i) => {
        return (
            <div key={i} className='w-64 border' onClick={() => setActiveProject(i)} >
                <h1 className='text-lg font-bold' >
                    {project.title} <br></br>
                </h1>
                {project.subtitle}
            </div>
        )
    })


    return (
        <div className='flex flex-col items-center  projects-sec' >
            <h1 className='text-5xl w-fit mb-20' >Projects</h1>
            <div className='border  projects-sec-container flex flex-row' >
                {/* Create a component for listing out the projects */}
                <div className='flex flex-col cursor-pointer' >
                    {renderProjectsList}
                </div>
                {/* Create a component for rendering a a function as recieved in a object */}
                <div className='border'>
                    {projectsData[activeProject].body()}
                </div>
            </div>
        </div>
    )
}

export default ProjectsSection