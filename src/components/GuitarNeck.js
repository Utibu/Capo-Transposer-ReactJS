import React from "react"
import {motion} from "framer-motion"

import guitarNeck from "../images/guitar_neck3.svg"
import capo from "../images/capo.svg"

function GuitarNeck(props) {
    const capoStepPercent = 5.9
    const percentageFromLeft = props.capoPosition <= 0 ? 26.76 + 5.75 * Math.abs(props.capoPosition) : 26.76

    return (
        <div className="guitar">
            <img src={guitarNeck} className="guitarNeck" />
            <motion.div className="capoContainer" animate={{left: `${percentageFromLeft}%`}}>
                <h5>{props.capoPosition}</h5>
                <img src={capo} className="capo" />
            </motion.div>
        </div>
    )
}

export default GuitarNeck