import React from 'react';
import "./achievementsPanel.css"

const AchievementsPanelRenderer = ({ title, description, codeName }) => {

    const renderDescription = description.map((paragraph) => {
        return (
            <div className='mb-3'>
                {paragraph}
            </div>
        )
    })

    return (
        <div className='mb-96 achievementsPanel' >
            <div className='achievements-panel-title-bar w-contain mx-10 flex flex-row items-center' >
                <h1 className='text-lg' >
                    {title}
                </h1>
            </div>
            <div className='achievements-panel-description-box px-10' >
                <div className='achievements-panel-description-box-text'>
                    {renderDescription}
                </div>
            </div>
        </div>
    )
}

export default AchievementsPanelRenderer;