import React from 'react';
import Adpvr from './panels/Adprv';
import Widapp from './panels/Widapp';
import Ypkold from './panels/Ypkold';
import Tskrinreact from './panels/Tskrinreact';
import Vidsfetapp from './panels/Vidsfetapp';
import Picsfetapp from './panels/Picsfetapp';
import Ulbm from './panels/Ulbm';

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
    } else if (projectTitle === "tskrinreact") {
        return (
            <div>
                <Tskrinreact />
            </div>
        )
    } else if (projectTitle === "vidsfetapp") {
        return (
            <div>
                <Vidsfetapp />
            </div>
        )
    } else if (projectTitle === "picsfetapp") {
        return (
            <div>
                <Picsfetapp />
            </div>
        )
    } else if (projectTitle === "ulbm") {
        return (
            <div>
                <Ulbm />
            </div>
        )
    }
}

export default PanelRenderer