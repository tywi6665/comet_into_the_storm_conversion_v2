import React from 'react';

const SubContainer = ({ children }) => {
    return (
        <div className={`sub-container`}>
            <h1>Inside the storm</h1>
            {children}
        </div>
    );
}

export default SubContainer;