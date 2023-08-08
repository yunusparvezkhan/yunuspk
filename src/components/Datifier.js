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
    let dayName;
    const dayString = String(day);


    // Validation of day suffix
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


    // Validation of day name

    const digitToNameTransformer = (digit) => {
        if (digit === "1") {
            return "fir"
        } else if (digit === "2") {
            return "seco"
        } else if (digit === "3") {
            return "thi"
        } else if (digit === "4") {
            return "four"
        } else if (digit === "5") {
            return "five"
        } else if (digit === "6") {
            return "six"
        } else if (digit === "7") {
            return "seven"
        } else if (digit === "8") {
            return "eigh"
        } else if (digit === "9") {
            return "nine"
        } else {
            return "";
        }
    }


    if (dayString.length === 1) {
        dayName = digitToNameTransformer(dayString[0]).charAt(0).toUpperCase() + digitToNameTransformer(dayString[0]).slice(1)
    } else if (dayString.length === 2) {
        if (dayString[0] === "1") {
            if (dayString[1] === "0") {
                dayName = "Ten"
            } else if (dayString[1] === "1") {
                dayName = "Eleven"
            } else if (dayString[1] === "2") {
                dayName = "Twelf"
            } else if (dayString[1] === "3") {
                dayName = "Thirteen"
            } else if (dayString[1] === "5") {
                dayName = "Fifteen"
            } else {
                dayName = digitToNameTransformer(dayString[1]).charAt(0).toUpperCase() + digitToNameTransformer(dayString[1]).slice(1) + 'teen'
            }
        } else if (dayString[0] === "2" && dayString[1] === "0") {
            dayName = "Twentie"
        } else if (dayString[0] === "2" && dayString[1] !== "0") {
            dayName = "Twenty" + digitToNameTransformer(dayString[1]);
        } else if (dayString[0] === "3" && dayString[1] === "0") {
            dayName = "Thirtie" + digitToNameTransformer(dayString[1]);
        } else if (dayString[0] === "3" && dayString[1] !== "0") {
            dayName = "Thirty" + digitToNameTransformer(dayString[1]);
        }
    }


    if (type === "dmy-a") {
        return <div>{dayName + daySuffix}</div>
    } else if (type === "dmy-b") {
        return <div>{dayString + daySuffix}</div>
    }
}

export default Datifier