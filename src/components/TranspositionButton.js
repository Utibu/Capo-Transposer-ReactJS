import React from "react"
import ReactTooltip from "react-tooltip"

function TranspositionButton(props) {
    return (
        <div class="transpositionButton">
            <button name={props.name} onClick={props.transpositionMethod} data-tip={props.tooltip}>{props.value}</button>
            <ReactTooltip className="tooltip" effect="float" multiline="true" />
        </div>
    )
}

export default TranspositionButton