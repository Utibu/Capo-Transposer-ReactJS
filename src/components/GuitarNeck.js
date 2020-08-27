import React, {useEffect, useState} from "react"
import {motion} from "framer-motion"

import guitarNeck from "../images/guitar_neck3.svg"
import capo from "../images/capo.svg"

function GuitarNeck(props) {
    const capoStepPercent = 5.9
    const percentageFromLeft = props.capoPosition <= 0 ? 25.35 + 5.74 * Math.abs(props.capoPosition) : 25.15

    return (
        <div className="guitar" id="guitar">
            <img src={guitarNeck} className="guitarNeck" />
            <motion.div className="capoContainer" 
                animate={{
                    left: `${percentageFromLeft}%`
                }}
                transition={{
                    type: "spring", 
                    stiffness: 500,
                    damping: 26
                }}>
                <img src={capo} className="capo"/>
            </motion.div>
            <svg viewBox="0 0 56 6" className="capoSvg">
                <text x="0" y="4" className="capoPosition">Transposition: {props.capoPosition}</text>
            </svg>
        </div>
    )
}

export default GuitarNeck