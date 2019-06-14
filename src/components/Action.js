import React from "react";

const Action = (props) => {
    return (
        <div>
            <button className="big-button" disabled={!props.hasOptions} onClick={props.handlePick}>What should I Do?</button>
        </div>
    );
};

export default Action;