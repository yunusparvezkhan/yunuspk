import React from 'react'

//  *   The prop aspectRatio expects a array of two numbers being the aspect ratio of the frame
//  *   width and height should be numbers and will be converted to 
//      whatever is passed in dataUnit (do not provide % as 
//      that will involve height of the parent div of this component)

const TextThumbnail = ({ title, width, height, dataUnit, aspectRatio, background }) => {
    let finalWidth;
    let finalHeight;

    if (width && !height) {
        finalHeight = (width / aspectRatio[0]) * aspectRatio[1];
    } else if (height && !width) {
        finalWidth = (height / aspectRatio[1]) * aspectRatio[0];
    } else if (width && height) {
        finalWidth = width;
        finalHeight = height;
    }

    return (
        <div>
            <div style={{
                position: "relative",
                width: `${finalWidth + dataUnit}`,
                height: `${finalHeight + dataUnit}`,
                backgroundColor: `${background}`,
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
            }} >
                <div
                    palceholder={title}
                    style={{
                        fontSize: "24px",
                        position: "relative",
                        textAlign: "center",
                        fontFamily: "serif",
                        top: "50%",
                        transform: "translate(0, -50%"
                    }}
                >
                    {title}
                </div>
            </div>
        </div>
    )
}

export default TextThumbnail;