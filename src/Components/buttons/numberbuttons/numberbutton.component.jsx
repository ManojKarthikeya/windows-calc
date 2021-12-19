import React from "react";
import "./numberbutton.styles.css";
import { connect } from "react-redux";
import { updateValue } from "../../../redux/actions";

const NumberButton = (props) => {
	return <div className="number-button" onClick={()=>{
        props.updateValue(props.label)
    }}>{props.label}</div>;
};

const mapDispatchToProps = (dispatch) => ({
	updateValue: (value) => dispatch(updateValue(value)),
});

export default connect(null, mapDispatchToProps)(NumberButton);
