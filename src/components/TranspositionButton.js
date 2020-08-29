import React, {useState} from "react"
import ReactTooltip from "react-tooltip"

function TranspositionButton(props) {
    const [hasReadTooltip, setHasReadTooltip] = useState(false)

    function handleClick(event) {
        event.preventDefault()
        //setHasReadTooltip(true)
        console.log(hasReadTooltip)
        props.transpositionMethod(event)
    }

    function handleTooltipClick(event) {
        console.log("hello")
    }

    const text = props.tooltip

    return (
        <div className="transpositionButton">
            <button name={props.name} onClick={handleClick} data-tip={text} data-tip-disable={hasReadTooltip} data-tip-place="bottom" data-tip-clickable={true}>{props.value}</button>
            <ReactTooltip className="tooltip" effect="solid" multiline={true} place="bottom" clickable={true} onClick={handleTooltipClick} isCapture={true} />
        </div>
    )
}

/*
    TODO: Fix tooltip on mobile so it doesn't cover the guitar!
    
*/

export default TranspositionButton