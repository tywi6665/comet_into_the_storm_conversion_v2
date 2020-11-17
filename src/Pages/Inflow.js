import React, { useState } from 'react';
import SubContainer from '../Components/Containers/Subcontainer';
import ImageWrapper from '../Components/ImageWrapper';

const Inflow = ({ setCurrentPage }) => {

    const [sliderValue, setSliderValue] = useState(0)
    const [isToggled, setIsToggled] = useState(false)

    const handleOnChange = (e) => {
        if (e.target.getAttribute("data-arrow") === "up" && sliderValue < 4) {
            setSliderValue(sliderValue + 1)
            setIsToggled(false)
        } else if (e.target.getAttribute("data-arrow") === "down" && sliderValue > 0) {
            setSliderValue(sliderValue - 1)
            setIsToggled(false)
        } else { }
    }

    return (
        <SubContainer>
            <h3>Inflow</h3>
            <div className="wrapper">
                <div className="inflow-image-wrapper">
                    <ImageWrapper
                        src={!isToggled ? (`inflow_${sliderValue}`) : (`inflow_${sliderValue}_wire`)}
                    />
                    <form className="input-wrapper">
                        <i className="arrow up" data-arrow="up" onClick={(e) => handleOnChange(e)}></i>
                        <input id="slider" type="range" name="slider" orient="vertical" value={sliderValue} min="0" max="4" onChange={(e) => setSliderValue(e.target.value)} />
                        <i className="arrow down" data-arrow="down" onClick={(e) => handleOnChange(e)}></i>
                    </form>
                    <label name="slider-label" htmlFor="slider">Camera Height</label>
                </div>
                <div className="clickable-wrapper" style={{
                    "bottom": "-10px"
                }}>
                    {sliderValue === 0 || sliderValue === 4 ? (
                        !isToggled ? (
                            <p
                                className="clickable"
                                onClick={() => setIsToggled(!isToggled)}
                            >
                                Wire Frame Image</p>
                        ) : (
                                <p
                                    className="clickable"
                                    onClick={() => setIsToggled(!isToggled)}
                                >
                                    Solid Image</p>

                            )
                    ) : (null)}
                </div>
            </div>
            <ol className="info-list">
                <li>Air rising, forming thunderstorms</li>
                <li>Warm humid air flows inward, speeding up as it approaches the eyewall</li>
                <li>Winds spiral in the eyewall</li>
            </ol>
            <p
                className="clickable"
                onClick={e => setCurrentPage("Main")}
            >
                Back to Menu</p>
        </SubContainer>
    );
}

export default Inflow;