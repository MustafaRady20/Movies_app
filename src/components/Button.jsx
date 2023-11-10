import React from "react";

import './button.css'

const Button = (props)=>{
    return(
        <a href="." className="btn">
            {props.icon}{props.name}
        </a>
    )
}
export default Button