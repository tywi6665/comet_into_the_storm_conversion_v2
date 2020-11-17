import React, { useState } from 'react';
import SubContainer from '../Components/Containers/Subcontainer';
import ImageWrapper from '../Components/ImageWrapper';

const Outflow = ({ setCurrentPage }) => {

    const [isToggled, setIsToggled] = useState(false)

    return (
        <SubContainer>
            <h3>Outflow</h3>
            <div className="wrapper">
                <ImageWrapper
                    src={!isToggled ? ("outflow_1") : ("outflow_2")}
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
                    <li>Air flowing out from the center of the storm (Outflow)</li>
                    <li>Air sinking into storm center, warming and suppressing clouds. Winds are calm</li>
                    <li>Cirrostratus clouds capping the storm</li>
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

export default Outflow;