import React, { useState } from 'react';
import SubContainer from '../Components/Containers/Subcontainer';
import ImageWrapper from "../Components/ImageWrapper";

const Main = ({ setCurrentPage }) => {

    const [hover, setHover] = useState("")
    const overlays = {
        inflow: ["inflow-1", "inflow-2"],
        rainbands: ["rainbands-1", "rainbands-2", "rainbands-3", "rainbands-4", "rainbands-5", "rainbands-6", "rainbands-7", "rainbands-8"],
        eyewall: ["eyewall-1", "eyewall-2"],
        outflow: ["outflow-1", "outflow-2"]
    }

    return (
        <SubContainer>
            <div className="img-overlay-container">
                <ImageWrapper
                    src={"mainmenu"}
                />
                <div className="overlay">
                    {hover ? (
                        hover.map((overlay, i) => (
                            <div className={`${overlay} circle`} key={i}></div>
                        ))
                    ) : (null)}
                </div>
            </div>
            <ul className="menu-list">
                <li className="clickable"
                    onClick={e => setCurrentPage("Inflow")}
                    onMouseEnter={() => setHover(overlays.inflow)}
                    onMouseLeave={() => setHover("")}
                >Inflow</li>
                <li className="clickable"
                    onClick={e => setCurrentPage("Rainbands")}
                    onMouseEnter={() => setHover(overlays.rainbands)}
                    onMouseLeave={() => setHover("")}
                >Rainbands</li>
                <li className="clickable"
                    onClick={e => setCurrentPage("Eye&eyewall")}
                    onMouseEnter={() => setHover(overlays.eyewall)}
                    onMouseLeave={() => setHover("")}
                >Eye & Eyewall</li>
                <li className="clickable"
                    onClick={e => setCurrentPage("Outflow")}
                    onMouseEnter={() => setHover(overlays.outflow)}
                    onMouseLeave={() => setHover("")}
                >Outflow</li>
            </ul>
        </SubContainer>
    );
}

export default Main;