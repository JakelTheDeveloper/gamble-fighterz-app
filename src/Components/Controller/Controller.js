import React, { Component } from 'react'
import './ControllerM.css'
import './ControllerC.css'
class Controller extends Component {
    render() {
        let bet = this.props.bet
        let spin = this.props.spin
        let credits = this.props.credits
        let betBtnClass
        let submitBtnClass
        if (bet < 3 && credits > 0 && !spin) {
            betBtnClass = "betBtnA"
        } else {
            betBtnClass = "betBtnI"
        }
        if (bet > 0 && !spin) {
            submitBtnClass = "spinBtnA"
        } else {
            submitBtnClass = "spinBtnI"
        }
        return (
            <div>
                <div className="controls">
                    <div className="betDiv">
                        <button className="scoreTableBtn" type="button" onClick={this.props.showTable}>Score Table </button>
                    </div>
                    <div className="betDiv">
                        <button className={betBtnClass} type="button" onClick={() => { this.props.handleBet(1) }}>Bet 1</button>
                        <button className={betBtnClass} type="button" onClick={() => this.props.handleBet(3)}>Bet Max</button>
                    </div>
                    <div className="spinDiv">
                        <button className={submitBtnClass} type="button" onClick={this.props.handleSpin}>Spin</button>
                    </div>
                </div>
                <div className="levelInfo">
                    <div className="closeSpace">
                        <label htmlFor="currpts" className="currpts">Current Points:</label>
                        <input type="text" id="currpts" value={this.props.currScore} name="currpts" readOnly />
                    </div>
                    <div className="closeSpace">
                        <label htmlFor="currlvl" className="currlvl">Current Lvl:</label>
                        <input type="text" id="currlvl" value={this.props.currLvl} name="currlvl" readOnly />
                    </div>
                    <div className="closeSpace">
                        <label htmlFor="rqpts" className="rqpts">Rq. Points:</label>
                        <input type="text" id="rqpts" value={this.props.rqScore} name="rqpts" readOnly />
                    </div>
                </div>
            </div>)
    }
}

export default Controller