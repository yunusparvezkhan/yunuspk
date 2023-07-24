import React from 'react'

const RectImage = ({ image, alt, width, height }) => {
    return (
        <div>
            <div style={{
                position: "relative",
                width: `${width}`,
                height: `${height}`,
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