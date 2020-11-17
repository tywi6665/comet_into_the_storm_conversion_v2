import React, { useState } from 'react';
import SubContainer from '../Components/Containers/Subcontainer';
import ImageWrapper from '../Components/ImageWrapper';

const Eye_Eyewall = ({ setCurrentPage }) => {

    const [isToggled, setIsToggled] = useState(false)

    return (
        <SubContainer>
            <h3>Eye & Eyewall</h3>
            <div className="wrapper">
                <ImageWrapper
                    src={!isToggled ? ("eyewall_1") : ("eyewall_2")}
                />
                <div className="clickable-wrapper" style={{
                    "bottom": "-23px",
                }}>
                    <p
                        className="clickable"
                        onClick={() => setIsToggled(!isToggled)}
                    >
                        {!isToggled ? ("Wire Frame Image") : ("Solid Image")} </p>
                </div>
            </div>
            <div style={{
                "marginTop": "25px"
            }}>
                <ol className="info-list">
                    <li>Eye: Light winds, partly cloudy or clear skies. Average diameters 20-50 km</li>
                    <li>Eyewall: Heaviest precipitation and strongest winds</li>
                    <li>Spiraling winds in eyewall</li>
                    <li>Sinking air</li>
                </ol>
            </div>
            <p
                className="clickable"
                onClick={e => setCurrentPage("Main")}
            >
                Back to Menu</p>
        </SubContainer>
    );
}

export default Eye_Eyewall;