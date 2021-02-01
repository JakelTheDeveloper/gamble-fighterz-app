import React, { Component } from 'react'
import scoreTable from '../../images/ScoreTable.png'
import './ScoreTableM.css'
import './ScoreTableC.css'
class ScoreTable extends Component {
    render() {
        return (
            <div className="scoreTable">
               <div>
                <img src={scoreTable} alt = 'scoreTable'/>
                <button className="scoreTableCloseBtn" type="button" onClick={this.props.showTable}>Close</button>
                </div>
               
            </div>
        )
    }
}

export default ScoreTable