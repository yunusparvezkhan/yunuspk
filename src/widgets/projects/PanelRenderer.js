import React from 'react'
import Adprava from './panels/Adprava'
import WidgetApp from './panels/WidgetApp'
import YunusPKold from './panels/YunusPKold'

const PanelRenderer = ({ projectId }) => {
    if (projectId === 1) {
        return (
            <div>
                <Adprava />
            </div>
        )
    } else if (projectId === 2) {
        return (
            <div>
                <WidgetApp />
            </div>
        )
    } else if (projectId === 3) {
        return (
            <div>
                <YunusPKold />
            </div>
        )
    }
}

export default PanelRenderer