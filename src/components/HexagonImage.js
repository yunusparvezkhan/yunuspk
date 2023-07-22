import React from 'react';

const HexagonImage = ({ image, alt, bgcolor, borderColor }) => {
    return (
        <div style={{
            width: "345px",
            height: "297px", // width*√3/2
            clipPath: "polygon(25% 0, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
            backgroundColor: `${borderColor}`,
            position: "absolute"
        }}>
            <div style={{
                width: "330px",
                height: "286px", // width*√3/2
                clipPath: "polygon(25% 0, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                backgroundColor: `${bgcolor}`,
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)"
            }} >
                <div style={{
                    width: "300px",
                    height: "260px", // width*√3/2 
                    clipPath: "polygon(25% 0, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)"
                }}>
                    <img src={image} alt={alt} style={{
                        width: "300px",
                        height: "300px",
                        position: "absolute",
                        transform: "translate(0, -20px)"
                    }} />
                </div>
            </div>
        </div>
    )
}

export default HexagonImage;