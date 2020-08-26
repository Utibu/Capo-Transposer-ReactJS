const chordsReducer = (state = {}, action) => {
    switch(action.type) {
        case "SET_CHORDS":
            return action.payload
        case "UPDATE_CHORDS": 
            return {...state, [action.payload.id]: action.payload.object }
        default:
            return state
    }
}

export default chordsReducer