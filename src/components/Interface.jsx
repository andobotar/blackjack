import React from 'react';

function UserInterface() {
    return (
        <div>
            <Outcome/>
            <div>
                <a className="score">Dealer Score : </a>
                <a className="score">Player Score : </a>
            </div>
            <button id="deal-button">Deal</button>
            <button id="hit-button">Hit</button>
            <button id="stand-button">Stand</button>
        </div>
    )
};

export default UserInterface;