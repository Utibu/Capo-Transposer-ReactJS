export const increaseCounter = count => {
    return {
        type: "INCREASE_COUNTER",
        payload: count
    }
}

export const setChords = chords => {
    return {
        type: "SET_CHORDS",
        payload: chords
    }
}

export const updateChords = chords => {
    return {
        type: "UPDATE_CHORDS",
        payload: chords
    }
}

export const increaseTransposition = byNumber => {
    return {
        type: "INCREASE_TRANSPOSITION",
        payload: byNumber
    }
}

export const setTooltipBool = toggle => {
    return {
        type: "SET_BOOL",
        payload: toggle
    }
}