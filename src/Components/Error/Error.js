import React from 'react'
import './Error.css'
export default function Error(props) {
    return (
      <div className="error">
        <div className = "message">{props.message}</div>
        <button className = "closeErr" onClick={props.clearError}>X</button>
      </div>
    )
  }
