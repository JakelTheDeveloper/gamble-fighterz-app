import React from 'react'
import './Confirm.css'
export default function Confirm(props) {
    return (
      <div className="confirm">
        <div className = "message">{props.message}</div>
        <button className = "closeConfirm" onClick={props.endGame}>OK</button>
        <button className = "closeConfirm" onClick={props.clearConfirm}>X</button>
      </div>
    )
  }
