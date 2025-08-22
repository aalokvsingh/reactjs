import React from "react";

const Button = (props) => {
  return (
    <button 
      className="button" 
      onClick={props.onClick} 
      disabled={props.disabled}
    >
      {props.value}
    </button>
  );
}
export default Button;