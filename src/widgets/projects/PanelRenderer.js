import React from 'react';
import Adpvr from './panels/Adprv';
import Widapp from './panels/Widapp';
import Ypkold from './panels/Ypkold';

const PanelRenderer = ({ projectTitle }) => {
    if (projectTitle === "adprv") {
        return (
            <div>
                <Adpvr />
            </div>
        )
    } else if (projectTitle === "widapp") {
        return (
            <div>
                <Widapp />
            </div>
        )
    } else if (projectTitle === "ypkold") {
        return (
            <div>
                <Ypkold />
            </div>
        )
    }
}

export default PanelRenderer