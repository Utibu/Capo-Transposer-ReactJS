import React, {Component} from "react"
import Lodash, {cloneDeep, update} from "lodash"

import ChordTile from "./components/ChordTile"

/*
    TODO: 
    * B can be written as Cb and so on
    * Still unable to type anything other than X#/Xb

*/

class App extends Component {
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
            let currentChordName = originalChordName
            const chordSymbol = chordObject[i].symbol
            let originalChordIndex = -1
            let currentChordIndex = originalChordIndex
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
            //console.log("ITEM: " + item)
            if(Array.isArray(item)) {
                for(let j = 0; j <= item.length; j++) {
                    //console.log(item[i])
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

        //console.log(chordNames)
        //console.log("BEFORE ---- chordNames: " + chordNames.length)
        let newIndex = this.getIndexOfChord(chordNames, normalizedChordName)
        if(newIndex + increaseWith > chordNamesSize - 1) {
            const diff = increaseWith - (chordNamesSize - 1 - newIndex)
            //12 - 10 == 2 5 - 2 == 3
            console.log("DIFF: " + diff + " INCREASE WITH: " + increaseWith + " LENGTH: " + chordNamesSize + " newIndex: " + newIndex)
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
        } else if(originalChordName.length > 2) {
            nextChord.concat(originalChordName.substring(2, originalChordName.length))
        }

        
        /*
        currentChordIndex = originalChordIndex
        console.log("Current chord name: " + currentChordName)
        
        console.log("CURRENT INDEX: " + currentChordIndex + "     LENGTH: " + chordNames.length)
        if(currentChordIndex === chordNames.length - 1) {
            currentChordIndex = -1
        }
        let newChordName = chordNames[currentChordIndex + 1]
        console.log("NEW CHORD: " + newChordName)

        if(newChordName.length === 2) {
            newChordName = newChordName[0] + chordSymbol
        }
        console.log("NEW CHORD WITH SYMBOL: " + newChordName)

        if(originalChordName.length > 2) {
            newChordName.concat(originalChordName.substring(2, originalChordName.length))
        }

        return newChordName*/
        return nextChord
    }

    handleChordUpdate(chord, id) {
        //Do a deep copy to not change the states
        const chordObject = cloneDeep(this.state.chords)

        chordObject[id].chord = chord
        if(chord.length >= 2 && chord[1].match("[b#]")) {
            chordObject[id].symbol = chord[1]
        }
        /*const newChord = Object.values(chordObject).filter(item => item.id === id).map(item => { 
            item.chord = chord
            return item
        })
        */
        const newChordObject = {
            ...this.state.chords, 
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
                <h3>{this.state.transpositionNumber}</h3>
            </div>
        )
    }
}

export default App