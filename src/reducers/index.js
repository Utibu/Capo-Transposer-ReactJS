import { combineReducers } from "redux"

import CountReducer from "./CountReducer"
import ChordReducer from "./ChordsReducer"
import TranspositionReducer from "./TranspositionReducer"

const allReducers = combineReducers({
    count: CountReducer,
    chords: ChordReducer,
    transpositionNumber: TranspositionReducer
})

export default allReducers