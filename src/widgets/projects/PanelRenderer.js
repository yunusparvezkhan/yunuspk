import React from 'react'
import Adprava from './panels/Adprava'

const PanelRenderer = ({ projectId }) => {
    if (projectId === 1) {
        return (
            <div>
                <Adprava />
            </div>
        )
    }
}

export default PanelRenderer