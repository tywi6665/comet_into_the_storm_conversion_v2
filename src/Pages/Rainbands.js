import React, { useState } from 'react';
import SubContainer from '../Components/Containers/Subcontainer';
import ImageWrapper from '../Components/ImageWrapper';

const Rainbands = ({ setCurrentPage }) => {

    const [isToggled, setIsToggled] = useState(false)

    return (
        <SubContainer>
            <h3>Rainbands</h3>
            <div className="wrapper">
                <ImageWrapper
                    src={!isToggled ? ("rainband_1") : ("rainband_2")}
                />
                <div className="clickable-wrapper" style={{
                    "bottom": "-23px",
                }}>
                    {!isToggled ? (
                        <p
                            className="clickable"
                            onClick={() => setIsToggled(!isToggled)}
                        >
                            Inside The Bands <small>(Click to go inside the bands)</small></p>
                    ) : (
                            <p
                                className="clickable"
                                onClick={() => setIsToggled(!isToggled)}
                            >
                                Back Out</p>
                        )}
                </div>
            </div>
            <div style={{
                "marginTop": "25px"
            }}>
                {!isToggled ? (
                    <ol className="info-list">
                        <li>Rainbands typically are 3-30 miles wide and up tp 300 miles long</li>
                    </ol>
                ) : (
                        <ol className="info-list">
                            <li>Rainbands produce heavy rainfall, as much as 25 cm (10 in.) per hour</li>
                            <li>RADAR image of a rainband</li>
                        </ol>
                    )}
            </div>

            <p
                className="clickable"
                onClick={e => setCurrentPage("Main")}
            >
                Back to Menu</p>
        </SubContainer>
    );
}

export default Rainbands;