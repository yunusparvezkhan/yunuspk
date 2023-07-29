import React, { useState } from 'react';
import Link from '../../../components/Link'
import { FiExternalLink } from 'react-icons/fi'
import '../styles/projects-section.css'
import { useLink } from '../../../hooks/use-link';
import Button from '../../../components/Button';
import { GiArmoredBoomerang } from 'react-icons/gi';

// This component expects the `projectsData` prop to be an array of objects
const ProjectsSection = ({ projectsData }) => {
    const [activeProject, setActiveProject] = useState(0);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 800 ? true : false);
    const navigate = useLink();

    window.addEventListener("resize", () => {
        if (window.innerWidth >= 800) {
            setIsSmallScreen(false);
        } else if (window.innerWidth < 800) {
            setIsSmallScreen(true);
        }
    }, true)

    const handleProjectsCardClick = (projectIndex, event) => {
        if (isSmallScreen) {
            if (event.ctrlKey || event.metaKey) {
                window.open(`/projects/${projectsData[projectIndex].pathName}`);
                return;
            }
            event.preventDefault();
            navigate(`/projects/${projectsData[projectIndex].pathName}`);
            window.scrollTo({ top: 0, left: 0 })
        } else if (!isSmallScreen) {
            setActiveProject(projectIndex)
        }
    }

    const renderProjectsList = projectsData.map((project, i) => {
        return (
            <div key={i} className='projects-sec-card-container'
                onClick={(event) => handleProjectsCardClick(i, event)}
                style={{
                    backgroundColor: activeProject === i && !isSmallScreen ? "#252F39" : "transparent",
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
            <div className='projects-sec-container flex flex-row mb-20' >
                {/* Create a component for listing out the projects */}
                <div className='projects-sec-cards-panel flex flex-col cursor-pointer' >
                    {renderProjectsList}
                </div>
                {/* Create a component for rendering a a function as recieved in a object */}
                <div className=' w-full  projects-sec-preview-panel'>
                    <div className='flex flex-row items-center justify-between ' >
                        <h2 className='text-2xl font-bold px-10 pt-10 pb-3'>{projectsData[activeProject].title}</h2>
                        <div className='px-10 pt-10 pb-3 cursor-pointer hover:text-green-400 transition-0p1' >
                            <Link to={`/projects/${projectsData[activeProject].pathName}`}>
                                <FiExternalLink />
                            </Link>
                        </div>
                    </div>
                    <hr className='mx-10' ></hr>
                    <div className='pl-10 p-5' >
                        <div dangerouslySetInnerHTML={{ __html: projectsData[activeProject].body }} />
                    </div>
                </div>
            </div>
            <Link to='/projects'>
                <Button primary
                    className="mb-52 px-6 font-mono rounded-lg"
                >
                    Projects Page
                    <GiArmoredBoomerang className='ml-2' />
                </Button>
            </Link>
        </div>
    )
}

export default ProjectsSection