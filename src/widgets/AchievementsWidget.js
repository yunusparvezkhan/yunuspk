import React from 'react';
import Slider from '../components/Slider';
import "./styles/achievements-widget.css"
import AchievementsPanelRenderer from './achievements/AchievementsPanelRenderer';
import { useFetchAchievementsWidgetQuery } from '../store';

const AchievementsWidget = () => {
    const { data, error, isLoading } = useFetchAchievementsWidgetQuery();

    if (isLoading) {
        return (
            <div>
                Loading...
            </div>
        )
    } else if (error) {
        console.log(error);
        return (
            <div>
                Error fetching Achievements Data
            </div>
        )
    } else {
        return (
            <div className='flex flex-col items-center justify-between mt-10 achievements-widget-container' >
                <h1 className='text-5xl w-fit mb-10' >Achievements</h1>
                <Slider slides={data} />
                <AchievementsPanelRenderer />
            </div>
        )
    }
}

export default AchievementsWidget;