// SwitchButton.js
import React from 'react';
import './SwitchButton.css';

const SwitchButton = ({ isToggled, onToggle }) => {
    return (
        <div className="switch" onClick={onToggle}>
            <span className={"light"}>{isToggled ? "Dark" : "Light"}</span>
            <div className={`slider ${isToggled ? 'toggled' : ''}`}></div>
        </div>
    );
};

export default SwitchButton;
