import React from 'react';

    const Buttons = ({disabled, name, type, onClick}) => {

        return (
            <div className="funcBtn">
                <button className="btn" type={type} onClick={onClick} disabled={disabled}>
                    {name}
                </button>
            </div>
        );
    };

export default Buttons;