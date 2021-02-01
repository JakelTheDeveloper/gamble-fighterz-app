import React, { Component } from 'react'
import './ProfilesM.css'
import './ProfilesC.css'
class Profiles extends Component {
    render() {
        return (
            <div className="profileContainer">
                <div className="profile">
                    <img src={this.props.playerImg} alt='player' />
                    <div className = "nameDisplay">
                    <button className = "switchBtn" onClick={this.props.handleSwitch}>&#352;</button>
                        {this.props.playerName}</div>
                </div>
                <div className="profile">
                    <img src={this.props.enemyImg} alt='player' style={{ transform: "scaleX(-1)" }} />
                    <div className = "nameDisplay">{this.props.enemyName}</div>
                </div>
            </div>)
    }
}

export default Profiles