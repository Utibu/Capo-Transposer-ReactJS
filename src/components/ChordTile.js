import React, {Component} from "react"

class ChordTile extends Component {
    constructor() {
        super()
        this.state = {
            placeholder: "C#"
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        let chord = ""
        try {
            chord = this.validateChord(event.target.value)
        } catch(err) {
            console.log(err)
            return
        }
        //this.setState({ currentChord: chord })
        this.props.handleChordUpdateMethod(chord, this.props.id)
    }

    validateChord(chord) {
        if(chord.length >= 0) {
            if((chord.length >= 1 && chord[0].match("[A-Ha-h]")) || chord === "") {
                return chord
            } else {
                throw new Error("False chord")
            }
        } else {
            throw new Error("Too short chord")
        }
    }

    randomChord(chordArray) {
        const randomNumber = Math.floor(Math.random() * chordArray.length)
        const arrayItem = chordArray[randomNumber]
        let chord = ""
        if(Array.isArray(arrayItem)) {
            chord = arrayItem[0]
        } else {
            chord = arrayItem
        }

        if(chord.length > 1 && chord[1] === "X") {
            const randomNumber = Math.floor(Math.random() * 2)
            const chordSymbol = randomNumber === 0 ? "#" : "b"
            chord = chord[0] + chordSymbol + chord.substring(2)
        }
    
        return chord;
    }

    componentDidMount() {
        const placeholder = this.randomChord(this.props.chordArray)
        this.setState({ placeholder: placeholder })
    }

    render() {
        
        return (
            <input type="text" name="chord" placeholder={this.state.placeholder} value={this.props.chordName} onChange={this.handleChange}/>
        )
    }
}

export default ChordTile