import React from 'react'
import Adprava from './panels/Adprava'
import WidgetApp from './panels/WidgetApp'

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
    }
}

export default PanelRenderer