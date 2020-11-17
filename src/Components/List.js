import React, { useState } from 'react';

const List = ({ tabData }) => {

    const [innerTab, setInnerTab] = useState(0)

    return (
        <>
            <p key={"Header" + tabData.name}>{tabData.name}</p>
            <ol>
                {tabData.bullets[innerTab].map((bullet, i) => (
                    <li key={"Bullet" + tabData.name + i}>{bullet}</li>
                ))}
            </ol>
        </>
    );
}

export default List;
