import React from "react"
import {useParams} from "react-router-dom"

function ChordPage() {
    const { chordName } = useParams()
    const fixedChord = chordName.replace("$", "#")


    return (
        <main>
            <h1>Chosen chord: {fixedChord}</h1>
            <p>Coming soon</p>
        </main>
    )
}

export default ChordPage