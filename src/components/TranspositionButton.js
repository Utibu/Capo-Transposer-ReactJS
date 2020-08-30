import React, {useState, useEffect} from "react"
import ReactTooltip from "react-tooltip"
import { useSelector } from "react-redux"

import useWindowDimensions from "./Hooks/useWindowDimensions"

function TranspositionButton(props) {
    const [shouldDisableTooltip, setShouldDisableTooltip] = useState(false)
    const { width } = useWindowDimensions()
    const shouldShowTooltipMaster = useSelector(state => state.shouldShowTooltip)
    const breakpoint = 768

    function handleClick(event) {
        event.preventDefault()
        //setHasReadTooltip(true)
        props.transpositionMethod(event)
    }

    function handleTooltipClick(event) {
        event.preventDefault()
        console.log("hello")
    }

    useEffect(() => {
        forceTooltipState(shouldShowTooltipMaster)
    })

    function forceTooltipState(forcedState) {
        if(forcedState !== !shouldDisableTooltip) {
            console.log("SHOULD DISABLE! " + forcedState + "    shoulddisable: " + shouldDisableTooltip)
            setShouldDisableTooltip(true)
        }
    }

    function setTooltipActive() {
        if(shouldShowTooltipMaster === true) {
            if(width <= breakpoint && shouldDisableTooltip === false) {
                setShouldDisableTooltip(true)
            } else if(width > breakpoint && shouldDisableTooltip === true) {
                setShouldDisableTooltip(false)
            }
        }
        
    }

    const text = props.tooltip
    const helpLink = width <= breakpoint && (
        <div>
            <a href="#" onClick={handleTooltipClick} data-tip={text} data-tip-disable={false} data-for={`${props.name}_help`}>What's this for?</a>
            <ReactTooltip id={`${props.name}_help`} className="tooltip" effect="solid" multiline={true} place="bottom" disable={false}/>
        </div>
    )
    
    setTooltipActive()
   

    return (
        <div className="transpositionButton">
            <button name={props.name} onClick={handleClick} data-tip={text} data-place="bottom" data-for={props.name}>{props.value}</button>
            <ReactTooltip id={props.name} className="tooltip" effect="solid" multiline={true} place="bottom" disable={shouldDisableTooltip}/>
            {helpLink}
        </div>
    )
}

/*
    TODO: Fix tooltip on mobile so it doesn't cover the guitar!
    
*/

export default TranspositionButton