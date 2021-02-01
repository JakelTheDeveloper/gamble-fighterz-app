import React, { Component } from 'react'
import HighScoreItem from './HighScoreItem'
import config from '../../config'
import './HighScoresM.css'
import './HighScoresC.css'

class HighScores extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            data: [],
            loading: false,
        }
    }
    async componentDidMount() {
        let options = {
            headers: {
                'authorization': `Bearer ${config.API_KEY}`,
            }
        }
        this.setState({ loading: true })
        try {
            const response = await fetch(`${config.URL}/api/scores`, options)
            if (!response.ok) {
                throw Error(response.statusText)
            }
            const data = await response.json()
            this.setState({ data: data, loading: false })
        } catch (error) {
            this.setState({ error: error.message })
        }
    }
    render() {
        let data = this.state.data
        let newData = data.sort((a, b) => b.score - a.score);
        return (
            <div>
                <h1 className="HTP">High Scores</h1>
                <div className="scoreSpace">
                    <div className="highScoreTable">
                        {(this.state.loading ? <div>LOADING...</div> : null)}
                        {(this.state.error ? <div>{this.state.error}</div> : null)}
                        {newData.map(data =>
                            <HighScoreItem key={data.id} user={data.username} highScore={data.score} />)}
                    </div>
                </div>
            </div>
        )
    }
}

export default HighScores