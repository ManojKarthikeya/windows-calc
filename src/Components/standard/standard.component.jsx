import React from "react";
import './standard.styles.css'
import NumberButton from './../buttons/numberbuttons/numberbutton.component'
import FunctionButton from './../buttons/functionbuttons/functionbutton.component'

const Standard = () => {
    return (
        <div className="standard-buttons">
            <NumberButton label="1"/>
            <NumberButton label="2"/>
            <NumberButton label="3"/>
            <NumberButton label="4"/>
            <NumberButton label="5"/>
            <NumberButton label="6"/>
            <NumberButton label="7"/>
            <NumberButton label="8"/>
            <NumberButton label="9"/>
            <NumberButton label="0"/>
            <FunctionButton label="+" />
            <FunctionButton label="-" />
            <FunctionButton label="*" />
            <FunctionButton label="/" />
        </div>
    )
}

export default Standard;