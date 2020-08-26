const countReducer = (state = 0, action) => {
    switch(action.type) {
        case "INCREASE_COUNTER":
            return state + action.payload
        default:
            return state
    }
}

export default countReducer