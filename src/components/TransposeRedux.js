import React, {Component, useEffect} from "react"
import {cloneDeep} from "lodash"
import { useSelector, useDispatch } from "react-redux"

import ChordTile from "./ChordTile"
import GuitarNeck from "./GuitarNeck"
import { increaseCounter, setChords, updateChords, increaseTransposition } from "../actions"

/*class Transpose extends Component {
    constructor() {
        super()
        this.state = {
            chords: {},
            transpositionNumber: 0,
            sharpChordNames: ["A", "AX", "B", ["C", "BX"], "CX", "D", "DX", "E", ["F", "EX"], "FX", "G", "GX"],
            flatChordNames: ["AX", "A", "BX", ["B", "CX"], "C", "DX", "D", "EX", ["E", "FX"], "F", "GX", "G"]
        }
        this.transpose = this.transpose.bind(this)
        this.handleChordUpdate = this.handleChordUpdate.bind(this)
    }

    componentDidMount() {
        this.setState(() => {
            let returnObject = {}
            for(let i = 1; i <= 9; i++) {
                returnObject[i] = { id: i, ["chord"]: "", "symbol": "#" }
            }
            return { chords: returnObject }
        })
    }

    transpose(event) {
        const toAdd = event.target.name === "increase" ? 1 : -1
        this.setState((prevState) => {
            let newNumber = prevState.transpositionNumber + toAdd
            if(Math.abs(newNumber) > 11) {
                newNumber = 0
            }
            return { transpositionNumber: newNumber }
        })

        this.updateChords(toAdd)
    }

    updateChords(amount) {
        const chordObject = cloneDeep(this.state.chords)
        console.log(chordObject)
        const sharpChordNames = { ...this.state.sharpChordNames }
        const flatChordNames = { ...this.state.flatChordNames }
        for(let i = 1; i <= Object.keys(chordObject).length; i++) {
            const originalChordName = chordObject[i].chord
            const chordSymbol = chordObject[i].symbol
            let originalChordIndex = -1

            //Skip if empty chord
            if(originalChordName === "") {
                continue
            }

            let chordNames = chordSymbol === "#" ? sharpChordNames : flatChordNames
            

            chordObject[i].chord = this.getNextChordName(chordNames, originalChordName, chordSymbol, amount)
            console.log("CHORD OBJECT: " + chordObject[i].chord)
        }

        this.setState({ chords: chordObject })
    }

    normalizeChord(originalChordName) {
        let chordName = ""
        if(originalChordName.length > 1 && originalChordName[1].match("[#b]")) {
            //Chord is sharp or flat
            chordName = originalChordName[0] + "X"
        } else {
            chordName = originalChordName[0]
        }

        return chordName
    }

    getIndexOfChord(chordNames, normalizedChordName) {
        for(let i = 0; i <= Object.keys(chordNames).length; i++) {
            const item = chordNames[i]
            if(Array.isArray(item)) {
                for(let j = 0; j <= item.length; j++) {
                    if(item[j] === normalizedChordName) {
                        return i
                        break
                    }
                }
            } else {
                if(item === normalizedChordName) {
                    return i
                    break
                }
            }
        }
        return -1
    }

    getNextChordName(chordNames, originalChordName, chordSymbol, increaseWith) {
        const normalizedChordName = this.normalizeChord(originalChordName)
        const chordNamesSize = Object.keys(chordNames).length

        let newIndex = this.getIndexOfChord(chordNames, normalizedChordName)
        if(newIndex + increaseWith > chordNamesSize - 1) {
            const diff = increaseWith - (chordNamesSize - 1 - newIndex)
            newIndex = diff - 1
        } else if(newIndex + increaseWith < 0) {
            const diff = 0 - (newIndex + increaseWith)
            newIndex = chordNamesSize - diff
        } else {
            newIndex += increaseWith
        }
        

        console.log("FOUND INDEX: " + newIndex + "    NORMALIZED CHORD NAME: " + normalizedChordName)

        let nextChordTemp = chordNames[newIndex]
        let nextChordNormalized = ""
        if(Array.isArray(nextChordTemp)) {
            nextChordNormalized = nextChordTemp[0]
        } else {
            nextChordNormalized = nextChordTemp
        }
        let nextChord = ""
        let startFrom = 0
        if(nextChordNormalized.length === 1) {
            nextChord = nextChordNormalized[0]
        } else if(nextChordNormalized.length === 2) {
            nextChord = nextChordNormalized[0] + chordSymbol
        }

        if(normalizedChordName.length === 1) {
            nextChord = nextChord.concat(originalChordName.substring(1, originalChordName.length))
        } else {
            nextChord = nextChord.concat(originalChordName.substring(2, originalChordName.length))
        }

        return nextChord
    }

    handleChordUpdate(chord, id) {
        //Do a deep copy to not change the states
        const chordObject = cloneDeep(this.state.chords)
        const chords = cloneDeep(this.state.chords)

        chordObject[id].chord = chord
        if(chord.length >= 2 && chord[1].match("[b#]")) {
            chordObject[id].symbol = chord[1]
        }

        const newChordObject = {
            ...chords, 
            [id]: chordObject[id]
        }
        this.setState({chords: newChordObject })
    }

    render() {

        const chordTiles = Object.values(this.state.chords).map((item) => {
            return ( 
                <ChordTile key={item.id}
                    chordName={item.chord} 
                    id={item.id} 
                    handleChordUpdateMethod={this.handleChordUpdate} 
                />
            )}
        )

        return (
            <div>
                {chordTiles}
                <button name="increase" onClick={this.transpose}>Increase</button>
                <button name="decrease" onClick={this.transpose}>Decrease</button>
                <h3>Transposition: {this.state.transpositionNumber}</h3>
            </div>
        )
    }
}

*/

function TransposeRedux() {
    const sharpChordNames = ["A", "AX", "B", ["C", "BX"], "CX", "D", "DX", "E", ["F", "EX"], "FX", "G", "GX"]
    const flatChordNames = ["AX", "A", "BX", ["B", "CX"], "C", "DX", "D", "EX", ["E", "FX"], "F", "GX", "G"]

    const chords = useSelector(state => state.chords)
    const transpositionNumber = useSelector(state => state.transpositionNumber)
    const dispatch = useDispatch()
    
    useEffect(() => {
        let returnObject = {}
            for(let i = 1; i <= 9; i++) {
                returnObject[i] = { id: i, ["chord"]: "", "symbol": "#" }
            }
        dispatch(setChords(returnObject))
    }, [])

    function transpose(event) {
        const toAdd = event.target.name === "increase" ? 1 : -1
        dispatch(increaseTransposition(toAdd))

        updateVisualChords(toAdd)
    }

    function updateVisualChords(amount) {
        const chordObject = cloneDeep(chords)
        console.log(chordObject)
        let returnObject = null
        for(let i = 1; i <= Object.keys(chordObject).length; i++) {
            const originalChordName = chordObject[i].chord
            const chordSymbol = chordObject[i].symbol

            //Skip if empty chord
            if(originalChordName === "") {
                continue
            }

            let chordNames = chordSymbol === "#" ? sharpChordNames : flatChordNames
            

            chordObject[i].chord = getNextChordName(chordNames, originalChordName, chordSymbol, amount)
            console.log("CHORD OBJECT: " + chordObject[i].chord)
            returnObject = chordObject[i]
        }

        if(returnObject === null) {
            return
        }
        dispatch(setChords(chordObject))
    }

    function normalizeChord(originalChordName) {
        let chordName = ""
        if(originalChordName.length > 1 && originalChordName[1].match("[#b]")) {
            //Chord is sharp or flat
            chordName = originalChordName[0] + "X"
        } else {
            chordName = originalChordName[0]
        }

        return chordName
    }

    function getIndexOfChord(chordNames, normalizedChordName) {
        for(let i = 0; i <= Object.keys(chordNames).length; i++) {
            const item = chordNames[i]
            if(Array.isArray(item)) {
                for(let j = 0; j <= item.length; j++) {
                    if(item[j] === normalizedChordName) {
                        return i
                    }
                }
            } else {
                if(item === normalizedChordName) {
                    return i
                }
            }
        }
        return -1
    }

    function getNextChordName(chordNames, originalChordName, chordSymbol, increaseWith) {
        const normalizedChordName = normalizeChord(originalChordName)
        const chordNamesSize = Object.keys(chordNames).length

        let newIndex = getIndexOfChord(chordNames, normalizedChordName)
        if(newIndex + increaseWith > chordNamesSize - 1) {
            const diff = increaseWith - (chordNamesSize - 1 - newIndex)
            newIndex = diff - 1
        } else if(newIndex + increaseWith < 0) {
            const diff = 0 - (newIndex + increaseWith)
            newIndex = chordNamesSize - diff
        } else {
            newIndex += increaseWith
        }
        

        console.log("FOUND INDEX: " + newIndex + "    NORMALIZED CHORD NAME: " + normalizedChordName)

        let nextChordTemp = chordNames[newIndex]
        let nextChordNormalized = ""
        if(Array.isArray(nextChordTemp)) {
            nextChordNormalized = nextChordTemp[0]
        } else {
            nextChordNormalized = nextChordTemp
        }
        let nextChord = ""
        if(nextChordNormalized.length === 1) {
            nextChord = nextChordNormalized[0]
        } else if(nextChordNormalized.length === 2) {
            nextChord = nextChordNormalized[0] + chordSymbol
        }

        if(normalizedChordName.length === 1) {
            nextChord = nextChord.concat(originalChordName.substring(1, originalChordName.length))
        } else {
            nextChord = nextChord.concat(originalChordName.substring(2, originalChordName.length))
        }

        return nextChord
    }

    function handleChordUpdate(chord, id) {
        //Do a deep copy to not change the states
        const chordObject = cloneDeep(chords)
        console.log("CHORD OBJECT")
        console.log(chordObject)

        chordObject[id].chord = chord
        if(chord.length >= 2 && chord[1].match("[b#]")) {
            chordObject[id].symbol = chord[1]
        }

        const newChordObject = chordObject[id]
        dispatch(updateChords(
            {id: id, object: newChordObject}
        ))
    }

    const chordTiles = Object.values(chords).map((item) => {
        return ( 
            <ChordTile key={item.id}
                chordName={item.chord} 
                id={item.id} 
                handleChordUpdateMethod={handleChordUpdate} 
            />
        )}
    )

    return (
        <div>
            <GuitarNeck capoPosition={transpositionNumber}/>
            <div className="tileContainer">
                {chordTiles}
            </div>
            <h3>Transposition: {transpositionNumber}</h3>
            <button name="increase" onClick={transpose}>Increase</button>
            <button name="decrease" onClick={transpose}>Decrease</button>
        </div>
    )
}

/*
<button name="increase" onClick={this.transpose}>Increase</button>
<button name="decrease" onClick={this.transpose}>Decrease</button>
<h3>Transposition: {this.state.transpositionNumber}</h3>
*/



export default TransposeRedux