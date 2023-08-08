import React, { useState } from 'react'

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