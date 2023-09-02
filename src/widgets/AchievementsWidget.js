import React from 'react';
import Slider from '../components/Slider';
import "./styles/achievements-widget.css"
import AchievementsPanelRenderer from './achievements/AchievementsPanelRenderer';

const AchievementsWidget = () => {
    return (
        <div className='flex flex-col items-center justify-between mt-10 achievements-widget-container' >
            <h1 className='text-5xl w-fit mb-10' >Achievements</h1>
            <Slider />
            <AchievementsPanelRenderer />
        </div>
    )
}

export default AchievementsWidget;