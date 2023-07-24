import React from 'react'

const RectImage = ({ image, alt, width, height }) => {
    return (
        <div>
            <div style={{
                width: `${width}`,
                height: `${height}`,
            }} >
                <img
                    src={image}
                    alt={alt}
                    style={{
                        maxWidth: "100%",
                        height: "auto",
                        position: "relative",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)"
                    }}
                />
            </div>
        </div>
    )
}

export default RectImage