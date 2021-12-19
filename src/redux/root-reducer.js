import equationReducer from "./equation-reducer/equation-reducer"
import { combineReducers } from "redux"
import valueReducer from "./value-reducer/value-reducer"

const rootReducer = combineReducers({
    equation : equationReducer,
    value : valueReducer
})

export default rootReducer