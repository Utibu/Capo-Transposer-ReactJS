const TranspositionReducer = (state = 0, action) => {
    switch(action.type) {
        case "INCREASE_TRANSPOSITION":
            let newNumber = state + action.payload
            if(Math.abs(newNumber) > 11) {
                newNumber = 0
            }
            return newNumber
        default:
            return state
    }
}

export default TranspositionReducer