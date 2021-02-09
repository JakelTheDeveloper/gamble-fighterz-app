import React, { Component } from 'react'
import config from '../../config'
import './HighScoreSubmitterM.css'
import './HighScoreSubmitterC.css'
import Error from '../Error/Error'
import SoundOBJ from '../../Helpers/AudioHelper'
class HighScoreSubmitter extends Component {
    constructor(props){
        super(props)
        this.state = {
            username:'',
            error:null,
        }
        this.handleChange = this.handleChange.bind(this)
    }
    clearError = () => {
        this.setState({
            error: null
        })
    }
    handleChange(event) {
        const value = event.target.value
        this.setState({ ...this.state, [event.target.name]: value })
        console.log(value)
      }
      handleSubmit = e => {
        e.preventDefault()
        if (this.state.username === undefined || this.state.username.length === 0) {
          this.setState({error:"Please enter a name!"})
          if (!this.props.mute) {
            SoundOBJ.errorSFX.play()
        }
        }else if(this.state.username.length > 10 ){
          if (!this.props.mute) {
            SoundOBJ.errorSFX.play()
        }
          this.setState({error:"Name must be 10 or less characters!"})
            } else {
              if (!this.props.mute) {
                SoundOBJ.combo01SFX.play()
            }
              const url = `${config.URL}/api/scores`
              const options = {
                method: 'POST',
                body: JSON.stringify({
                  username: this.state.username,
                  score: this.props.highScore
                }),
                headers: { 'Content-Type': 'application/json',
                  authorization: `Bearer ${config.API_KEY}`
                }
              }
              fetch(url, options)
                .then(res => {
                  if (!res.ok) {
                    throw new Error('Something went wrong, please try again later')
                  }
                  return res.json()
                })
                .then(this.props.reset())
                .catch(err => this.setState({ error: err.message }))
            }
      }
    render() {
        return (
            <div className="submitScore">
               <form onSubmit={this.handleSubmit}>
                <h1>Submit Your HighScore</h1>
                {(this.state.error ? <Error message={this.state.error} clearError={this.clearError} /> : null)}
                <div>
                    <label htmlFor="username" className="username">Enter Your Name:</label><br />
                    <input type="text" id="username" name="username" onChange={this.handleChange} /><br />
                </div>
                <div>
                    HighScore:<div style={{ color: "rgb(13, 182, 111)", marginTop: 10 }}>{this.props.highScore}</div>
                </div>
                <div className="submitBtnDiv">
                    <button className="submitBtn" type="submit">Submit</button>
                    <button className="submitBtn" type="button" onClick={this.props.reset}>Play Again</button>
                </div>
                </form>
            </div>
        )
    }
}

export default HighScoreSubmitter