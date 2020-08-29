import React from "react"
import ReactTooltip from "react-tooltip"

function TranspositionButton(props) {
    return (
        <div className="transpositionButton">
            <button name={props.name} onClick={props.transpositionMethod} data-tip={props.tooltip}>{props.value}</button>
            <ReactTooltip className="tooltip" effect="solid" multiline={true} place="bottom" />
        </div>
    )
}

export default TranspositionButton