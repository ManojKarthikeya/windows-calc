const INITIAL_STATE = {
    operand1: "",
    operand2: "",
    operation: ""
}

const equationReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case "":
            return "";
        default:
            return state;
    }
}

export default equationReducer