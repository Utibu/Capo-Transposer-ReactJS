import React from "react"
import { useSelector, useDispatch } from "react-redux"

import {setTooltipBool} from "../actions"

function ToggleTooltip() {
    const shouldShowTooltip = useSelector(state => state.shouldShowTooltip)
    const dispatch = useDispatch()

    function setTooltip(event) {
        const value = event.target.checked
        dispatch(setTooltipBool(value))
    }

    return (
        <label htmlFor="toggleTooltip" className="toggleTooltip">
            Show tooltips:
            <input type="checkbox" id="toggleTooltip" name="toggleTooltip" checked={shouldShowTooltip} onChange={setTooltip} />
        </label>
    )
}

export default ToggleTooltip