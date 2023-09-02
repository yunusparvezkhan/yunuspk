import React, { useState } from 'react';
import Slider from '../components/Slider';
import "./styles/achievements-widget.css"
import AchievementsPanelRenderer from './achievements/AchievementsPanelRenderer';
import { useFetchAchievementsWidgetQuery } from '../store';

const AchievementsWidget = () => {
    const { data, error, isLoading } = useFetchAchievementsWidgetQuery();
    const [activeCard, setActiveCard] = useState(1);
    console.log(activeCard);

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
                <Slider slides={data} activeCard={activeCard} onActiveCardChange={setActiveCard} />
                <AchievementsPanelRenderer />
            </div>
        )
    }
}

export default AchievementsWidget;