import React from 'react'


// This component will have essentially have 12 types which are planned to be created in next commits.

// type writting format :-  xyz-p, where x,y,z(aka format) are either d,m,y (meaning day, month, year respectively) (the name should have either dmy or mdy) 
// and p (aka structure) is some alphabet between a to f from below table

// structure    |   format dmy               |   format mdy
// ------------------------------------------------------------------------------------------------------
//      A       |   Seventh of August, 2023  |   August the Seventh, 2023                               |
//      B       |   7th August, 2023         |   August 7th, 2023                                       | 
//      C       |   7 August 2023            |   August 7, 2023                                         |
//      D       |   7/8/2023                 |   8/7/2023                                               |
//      E       |   7/8/23                   |   8/7/23                                                 |   
//      F       |   07/08/23                 |   08/07/23                                               |
// ------------------------------------------------------------------------------------------------------



const Datifier = ({ type, day, month, year }) => {

    let daySuffix;
    const dayString = String(day)

    if (dayString.length === 2) {
        if (dayString[0] !== "1") {
            if (dayString[1] === "1") {
                daySuffix = "st";
            } else if (dayString[1] === "2") {
                daySuffix = "nd";
            } else if (dayString[1] === "3") {
                daySuffix = "rd";
            } else {
                daySuffix = "th";
            }
        } else if (dayString[0] === "1") {
            daySuffix = "th";
        }
    } else if (dayString.length === 1) {
        if (dayString[0] === "1") {
            daySuffix = "st";
        } else if (dayString[0] === "2") {
            daySuffix = "nd";
        } else if (dayString[0] === "3") {
            daySuffix = "rd";
        } else {
            daySuffix = "th";
        }
    }

    if (type === "dmy-b") {
        return <div>{dayString + daySuffix}</div>
    }
}

export default Datifier