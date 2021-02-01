import React, { Component } from 'react'
class HighScoreItem extends Component {
    numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
    render() {
        let newScore = this.numberWithCommas(this.props.highScore)
        return (
        <div className = "HSC">
            <div className = "HSI">
                <div className = "HSU">{this.props.user}</div> 
                <div className = "HS">{newScore} Pts.</div>
            </div>
        </div>

        )
    }
}
export default HighScoreItem