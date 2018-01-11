/**
 * Created by hansel.tritama on 1/10/18.
 */
import React from "react";

// let value = 0;
// var styles = {
//     fontSize: value + "px"
// };

const Math = (props) => {
    let value;
    switch(props.operator) {
        case "+":
            value = props.num1 + props.num2;
            break;
        case "-":
            value = props.num1 - props.num2;
            break;
        case "*":
            value = props.num1 * props.num2;
            break;
        case "/":
            value = props.num1 / props.num2;
            break;
        default:
            value = NaN;
    }

    return <span style={{fontSize: value}}>{value}</span>
};

export default Math;