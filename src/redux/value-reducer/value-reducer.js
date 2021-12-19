import evaulate from "../../Components/util/evaluate";

const INITIAL_STATE = { prev: null, current: "0", operand: "" };

const valueReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {

		case "UPDATE_VALUE":
			if (!state.operand) {
				if (state.current === "0") {
					return { ...state, current: action.payload };
				} else {
					return {
						...state,
						current: state.current + action.payload,
					};
				}
			} else {
				if (state.prev === null) {
					return {
						prev: state.current,
						current: action.payload,
						operand: state.operand,
					};
				} else {
					return { ...state, current: state.current+action.payload};
				}
			}

		case "UPDATE_OPERAND":
			if(state.prev === null){
                return {...state, operand: action.payload}
            } else {
                return {prev: "0", current: `${evaulate(state.prev,state.current,state.operand)}`, operand: state.operand}
            }

		default:
			return state;
	}
};

export default valueReducer;
