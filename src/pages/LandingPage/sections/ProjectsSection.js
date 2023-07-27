import React, { useState } from 'react';
import Link from '../../../components/Link'
import { FiExternalLink } from 'react-icons/fi'
import '../styles/projects-section.css'

// This component expects the `projectsData` prop to be an array of objects
const ProjectsSection = ({ projectsData }) => {
    const [activeProject, setActiveProject] = useState(0);

    const renderProjectsList = projectsData.map((project, i) => {
        return (
            <div key={i} className='projects-sec-card-container'
                onClick={() => setActiveProject(i)}
                style={{
                    backgroundColor: activeProject === i ? "#252F39" : "transparent",
                    width: "calc(100% + 1px)",
                }}
            >
                <h3>
                    {project.title}
                </h3>
                <p>
                    {project.subtitle.trim().slice(0, 85) + "..."}
                </p>
            </div>
        )
    })


    return (
        <div className='flex flex-col items-center  projects-sec' >
            <h1 className='text-5xl w-fit mb-20' >Projects</h1>
            <div className='  projects-sec-container flex flex-row' >
                {/* Create a component for listing out the projects */}
                <div className='projects-sec-cards-panel flex flex-col cursor-pointer' >
                    {renderProjectsList}
                </div>
                {/* Create a component for rendering a a function as recieved in a object */}
                <div className=' w-full'>
                    <div className='flex flex-row items-center justify-between' >
                        <h2 className='text-2xl font-bold px-10 pt-10 pb-3'>{projectsData[activeProject].title}</h2>
                        <div className='px-10 pt-10 pb-3 cursor-pointer hover:text-green-400 transition-0p1' >
                            <Link to={`/projects/${projectsData[activeProject].pathName}`}>
                                <FiExternalLink />
                            </Link>
                        </div>
                    </div>
                    <hr className='mx-10' ></hr>
                    <div className='pl-10 p-5' >
                        {projectsData[activeProject].body()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsSection