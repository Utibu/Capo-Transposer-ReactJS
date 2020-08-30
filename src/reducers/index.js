import { combineReducers } from "redux"

import CountReducer from "./CountReducer"
import ChordReducer from "./ChordsReducer"
import TranspositionReducer from "./TranspositionReducer"
import TooltipReducer from "./TooltipReducer"

const allReducers = combineReducers({
    count: CountReducer,
    chords: ChordReducer,
    transpositionNumber: TranspositionReducer,
    shouldShowTooltip: TooltipReducer
})

export default allReducers