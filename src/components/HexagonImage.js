import React from 'react';

const HexagonImage = ({ image, alt, bgcolor, borderColor }) => {
    return (
        <div>
            <div className='relative' style={{
                width: "345px",
                height: "297px", // width*√3/2
                clipPath: "polygon(25% 0, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                backgroundColor: `${borderColor}`
            }}>
                <div className='relative left-1/2 top-1/2 ttff ' style={{
                    width: "330px",
                    height: "286px", // width*√3/2
                    clipPath: "polygon(25% 0, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                    backgroundColor: `${bgcolor}`,
                }} >
                    <div className='relative left-1/2 top-1/2 ttff' style={{
                        width: "300px",
                        height: "260px", // width*√3/2 
                        clipPath: "polygon(25% 0, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                    }}>
                        <img src={image} alt={alt} className='absolute' style={{
                            maxWidth: "100%",
                            height: "auto",
                            top: "50%",
                            transform: "translate(0, -50%)"
                        }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HexagonImage;