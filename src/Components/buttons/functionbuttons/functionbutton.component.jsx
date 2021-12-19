import React from "react";
import './functionbutton.styles.css'
import { connect } from "react-redux";
import { updateOperand } from "../../../redux/actions";

const FunctionButton = (props) => {
    return (<div className="function-button" onClick={()=>{props.updateOperand(props.label)}}>
        {props.label}
    </div>)
}

const mapDispatchToProps = (dispatch) => ({
    updateOperand: (operand) => dispatch(updateOperand(operand))
})

export default connect(null,mapDispatchToProps)(FunctionButton)