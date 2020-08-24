import React, {Component} from "react"

class ChordTile extends Component {
    constructor() {
        super()
        this.state = {
            
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

    render() {
        return (
            <input type="text" name="chord" placeholder="C#" value={this.props.chordName} onChange={this.handleChange}/>
        )
    }
}

export default ChordTile