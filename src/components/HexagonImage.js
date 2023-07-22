import React from 'react';

const HexagonImage = ({ image, alt }) => {
    return (
        <div>
            <div style={{
                width: "300px",
                height: "260px", // width*√3/2 
                clipPath: "polygon(25% 0, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
            }}>
                <img src={image} alt={alt} style={{
                    width: "300px",
                    height: "300px",
                    position: "absolute",
                    transform: "translate(0, -20px)"
                }} />
            </div>
        </div>
    )
}

export default HexagonImage;