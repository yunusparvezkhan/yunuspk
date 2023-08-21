import React from 'react'
import Adprava from './panels/Adprava'
import WidgetApp from './panels/WidgetApp'
import YunusPKold from './panels/YunusPKold'

const PanelRenderer = ({ projectTitle }) => {
    if (projectTitle === "adprv") {
        return (
            <div>
                <Adprava />
            </div>
        )
    } else if (projectTitle === "widapp") {
        return (
            <div>
                <WidgetApp />
            </div>
        )
    } else if (projectTitle === "ypkold") {
        return (
            <div>
                <YunusPKold />
            </div>
        )
    }
}

export default PanelRenderer