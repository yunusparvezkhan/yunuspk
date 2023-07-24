import React from 'react'

//  The prop aspectRatio expects a array of two numbers being the aspect ratio of the frame
//  w and h should be numbers and will be converted to whatever is passed in dataUnit
const RectImage = ({ image, alt, width, height, dataType, dataUnit, w, h, aspectRatio }) => {
    let finalWidth;
    let finalHeight;

    if (dataType === 'w') {
        finalHeight = (w / aspectRatio[0]) * aspectRatio[1];
    } else if (dataType === 'h') {
        finalWidth = (h / aspectRatio[1]) * aspectRatio[0];
    }

    return (
        <div>
            <div style={{
                position: "relative",
                width: `${width ? width : finalWidth + dataUnit}`,
                height: `${height ? height : finalHeight + dataUnit}`,
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
            }} >
                <img
                    src={image}
                    alt={alt}
                    style={{
                        maxWidth: "100%",
                        height: "auto",
                        position: "absolute",
                        top: "50%",
                        transform: "translate(0, -50%)"
                    }}
                />
            </div>
        </div>
    )
}

export default RectImage