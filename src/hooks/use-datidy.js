const useDatify = () => {
    const datify = (type, month, year) => {

        let daySuffix = "th";
        let monthName;
        let shortYear;

        let day = 22

        if (day.length === 2) {
            if (day[0] !== 1) {
                if (day[1] === 1) {
                    daySuffix = "st"
                } else if (day[1] === 2) {
                    daySuffix = "nd"
                } else if (day[1] === 3) {
                    daySuffix = "rd"
                } else {
                    daySuffix = "th"
                }
            } else if (day[0] === 1) {
                daySuffix = "th"
            }
        } else if (day.length === 1) {
            if (day[0] === 1) {
                daySuffix = "st"
            } else if (day[0] === 2) {
                daySuffix = "nd"
            } else if (day[0] === 3) {
                daySuffix = "rd"
            } else {
                daySuffix = "th"
            }
        }

        console.log(daySuffix)

        if (type === "dmy-b") {
            return <div>{String(day) + daySuffix}</div>
            // return <div>hello</div>
        }
    }
    return datify;
}

export default useDatify;