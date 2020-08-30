const tooltipReducer = (state = true, action) => {
    switch(action.type) {
        case "SET_BOOL":
            return action.payload
        default:
            return state
    }
}

export default tooltipReducer