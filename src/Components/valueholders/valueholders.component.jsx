import React from "react";
import "./valueholders.styles.css";
import { connect } from "react-redux";

const ValueHolders = (state) => {
	return (
    <div>
        <div className="equation"></div>
        <div className="value">{state.value.current}</div>
    </div>);
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(ValueHolders);
