import React, { Component } from 'react'
import Controller from '../Components/Controller/Controller'
import Error from '../Components/Error/Error'
import HighScoreSubmitter from '../Components/HighScoreSubmitter/HighScoreSubmitter'
import Profiles from '../Components/Profiles/Profiles'
import KK from '../images/KK.png'
import Slotz from '../images/Slotz.png'
import PigBankz from '../images/PigBankz.png'
import BullDawg from '../images/BullDawg.png'
import GamBot from '../images/GamBot.png'
import LoanShark from '../images/LoanShark.png'
import Vector from '../images/Vector.png'
import Lucky from '../images/Lucky.png'
import SlotsHolder from '../Components/SlotsHolder/SlotsHolder'
import './Game.css'
import SoundOBJ from '../Helpers/AudioHelper'
import ScoreTable from '../Components/ScoreTable/ScoreTable'

class Game extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currLevel: 1,
            currPlayer:KK,
            currEnemy: null,
            gameStarted: false,
            ptsToAdd: 0,
            highScore: 0,
            credits: 100,
            bet: 0,
            multiplier: 0,
            currScore: 0,
            rqScore: 0,
            cycle: true,
            spin: false,
            generate1: 0,
            generate2: 0,
            generate3: 0,
            g1: 0,
            g2: 0,
            g3: 0,
            scoreTable: false,
            gameOver: false,
            mute: true,
            error: null
        }

    }
    clearError = () => {
        this.setState({
            error: null
        })
    }
    handleMute = () => {
        let {mute} = this.state
        this.setState({
            mute: mute = !mute
        })
    }
    handleParams(params) {
        return
    }
    componentDidMount() {
        let { generate1, generate2, generate3, rqScore, currEnemy } = this.state
        if (this.state.currLevel === 1) {
            this.setState({ rqScore: rqScore = 10000, currEnemy: currEnemy = Slotz })
            this.handleParams(currEnemy)
        }
        let g1
        let g2
        let g3
        this.intervalId = setInterval(() => {
            this.scoreTally()
            g1 = this.getRandomNum(1, 71)
            g2 = this.getRandomNum(1, 71)
            g3 = this.getRandomNum(1, 71)
            if (this.state.cycle) {
                this.setState({ generate1: generate1 = g1, generate2: generate2 = g2, generate3: generate3 = g3 })
                this.handleParams(generate1, generate2, generate3, rqScore)
            }
        }, 30)
    }
    componentDidUpdate() {
        let { currScore, rqScore, currLevel, currEnemy, highScore, credits, gameOver, bet, spin } = this.state
        if (this.state.currLevel === 2 && rqScore === 10000) {
            this.setState({ rqScore: rqScore = 25000, currEnemy: currEnemy = PigBankz })
        } else if (this.state.currLevel === 3 && rqScore === 25000) {
            this.setState({ rqScore: rqScore = 40000, currEnemy: currEnemy = BullDawg })
        } else if (this.state.currLevel === 4 && rqScore === 40000) {
            this.setState({ rqScore: rqScore = 55000, currEnemy: currEnemy = GamBot })
        } else if (this.state.currLevel === 5 && rqScore === 55000) {
            this.setState({ rqScore: rqScore = 75000, currEnemy: currEnemy = LoanShark })
        } else if (this.state.currLevel === 6 && rqScore === 75000) {
            this.setState({ rqScore: rqScore = 1000000, currEnemy:currEnemy = Vector })
        }
        this.handleParams(currEnemy)
        let newHighAdd = currScore
        let credBonus = this.calculateCredBonus()
        if (currScore >= rqScore && this.state.ptsToAdd === 0) {
            this.setState({ currScore: currScore = 0, currLevel: currLevel += 1, highScore: highScore += newHighAdd, credits: credits += credBonus })
            if (!this.state.mute) {
                SoundOBJ.nextLevelSFX.play()
            }
        }
        if (credits === 0 && this.state.ptsToAdd === 0 && currScore < rqScore && bet === 0 && !spin && !gameOver) {
            this.setState({ highScore: highScore += newHighAdd, gameOver: gameOver = true })
        }
    }
    componentWillUnmount() {
        clearInterval(this.intervalId)
    }
    getRandomNum(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    setPtsToAdd = (num) => {
        let { ptsToAdd, multiplier } = this.state
        let bonus = 8000
        let convert = num * multiplier

        if (convert === 12000) {
            convert = convert + bonus
        }
        this.setState({ ptsToAdd: ptsToAdd += convert })
        this.handleParams(ptsToAdd)
    }
    scoreTally = () => {
        let { ptsToAdd, currScore } = this.state
        if (this.state.ptsToAdd > 0 && this.state.ptsToAdd < 100) {
            this.setState({ ptsToAdd: ptsToAdd -= 1, currScore: currScore += 1 })
            if (!this.state.mute) {
                SoundOBJ.counterSFX.play()
            }
        } else if (this.state.ptsToAdd >= 100 && this.state.ptsToAdd < 1000) {
            this.setState({ ptsToAdd: ptsToAdd -= 10, currScore: currScore += 10 })
            if (!this.state.mute) {
                SoundOBJ.counterSFX.play()
            }
        } else if (this.state.ptsToAdd >= 1000 && this.state.ptsToAdd < 10000) {
            this.setState({ ptsToAdd: ptsToAdd -= 100, currScore: currScore += 100 })
            if (!this.state.mute) {
                SoundOBJ.counterSFX.play()
            }
        } else if (this.state.ptsToAdd >= 10000) {
            this.setState({ ptsToAdd: ptsToAdd -= 1000, currScore: currScore += 1000 })
            if (!this.state.mute) {
                SoundOBJ.counterSFX.play()
            }
        }
    }
    calculateCredBonus() {
        let { currLevel, credits } = this.state
        if (currLevel <= 3 && credits <= 50) {
            return 100
        } else if (currLevel <= 3 && credits > 50) {
            return 50
        } else if (currLevel > 3 && credits <= 50) {
            return 120
        } else if (currLevel > 3 && credits > 50) {
            return 160
        }
    }
    showTable = () => {
        let { scoreTable } = this.state
        this.setState({
            scoreTable: scoreTable = !scoreTable
        })
    }
    convertNumToIcon = (num) => {
        if (num >= 1 && num <= 2) {
            return 7
        } else if (num >= 3 && num <= 9) {
            return 0
        } else if (num >= 10 && num <= 13) {
            return 7
        } else if (num === 14) {
            return 6
        } else if (num >= 15 && num <= 18) {
            return 7
        } else if (num >= 19 && num <= 21) {
            return 1
        } else if (num >= 22 && num <= 23) {
            return 7
        } else if (num === 24) {
            return 5
        } else if (num >= 25 && num <= 26) {
            return 7
        } else if (num >= 27 && num <= 32) {
            return 8
        } else if (num >= 33 && num <= 34) {
            return 7
        } else if (num === 35) {
            return 4
        } else if (num >= 36 && num <= 37) {
            return 7
        } else if (num >= 38 && num <= 42) {
            return 2
        } else if (num >= 42 && num <= 45) {
            return 9
        } else if (num >= 46 && num <= 50) {
            return 3
        } else if (num >= 51 && num <= 53) {
            return 7
        } else if (num >= 54 && num <= 56) {
            return 10
        } else if (num >= 57 && num <= 58) {
            return 7
        } else if (num === 59) {
            return 4
        } else if (num >= 60 && num <= 62) {
            return 7
        } else if (num >= 63 && num <= 65) {
            return 0
        } else if (num >= 66 && num <= 68) {
            return 1
        } else if (num >= 69 && num <= 70) {
            return 7
        }

    }
    handleSpin = () => {
        let { cycle, spin, bet, multiplier, error, generate1, generate2, generate3, g1, g2, g3 } = this.state
        let gen1 = this.convertNumToIcon(generate1)
        let gen2 = this.convertNumToIcon(generate2)
        let gen3 = this.convertNumToIcon(generate3)
        let multi = bet
        if (bet > 0 && !spin) {
            this.setState({
                cycle: cycle = !cycle, spin: spin = !spin, bet: bet = 0, multiplier: multiplier = multi,
                g1: g1 = gen1, g2: g2 = gen2, g3: g3 = gen3
            })
            if (!this.state.mute) {
                SoundOBJ.startSpinSFX.play()
            }
        } else {
            if (!spin) {
                if (!this.state.mute) {
                    SoundOBJ.errorSFX.play()
                }
                this.setState({ error: error = "Place A Bet!" })
            }
        }
        this.handleParams(g1, g2, g3, bet, multiplier, error)
    }
    handleBet = (num) => {
        let { bet, credits, spin, error } = this.state
        let currCreds = this.state.credits + bet
        if (bet < 3 && num === 1 && credits >= num && !spin) {
            if (!this.state.mute) {
                SoundOBJ.insertCreditSFX.play()
            }
            this.setState({ bet: bet + num, credits: credits - num })
        } else if (bet < 3 && num === 3 && credits >= num && !spin) {
            if (!this.state.mute) {
                SoundOBJ.insertCreditSFX.play()
            }
            this.setState({ bet: bet = num, credits: currCreds - num })
        } else {
            if (!spin && credits <= 0) {
                if (!this.state.mute) {
                    SoundOBJ.errorSFX.play()
                }
                this.setState({ error: error = "Not Enough Credits!" })
            } else {
                if (!spin && bet === 3) {
                    if (!this.state.mute) {
                        SoundOBJ.errorSFX.play()
                    }
                    this.setState({ error: error = "Maximum Bet Placed!" })
                }
            }
            this.handleParams(error)
        }
    }
    reactivateSpin = () => {
        let { cycle, spin } = this.state
        this.setState({ cycle: cycle = !cycle, spin: spin = !spin })
    }
    numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
    handleGameReset = () => {
        let { currScore, currLevel,currEnemy, highScore, credits, gameOver} = this.state
        this.setState({
            currScore: currScore = 0, currLevel: currLevel = 1, currEnemy:currEnemy = Slotz, credits: credits = 100, highScore: highScore = 0,
            gameOver: gameOver = false
        })
        this.handleParams(currScore,currLevel,currEnemy,highScore,credits,gameOver)
    }
    handlePlayerSwitch=()=>{
        let {currPlayer} = this.state
        if(currPlayer === KK){
            this.setState({currPlayer:currPlayer = Lucky})
        }else{
            this.setState({currPlayer:currPlayer = KK})
        }
    }
    render() {
        let playerName
        let enemyName
        if(this.state.currPlayer === KK){
            playerName = "KK"
        }else if(this.state.currPlayer === Lucky){
            playerName = "Lucky"
        }
        if(this.state.currEnemy === Slotz){
            enemyName = "Slotz"
        }else if(this.state.currEnemy === PigBankz){
            enemyName = "PigBankz"
        }else if(this.state.currEnemy === BullDawg){
            enemyName = "BullDawg"
        }else if(this.state.currEnemy === GamBot){
            enemyName = "GamBot"
        }else if(this.state.currEnemy === LoanShark){
            enemyName = "LoanShark"
        }else if(this.state.currEnemy === Vector){
            enemyName = "Vector"
        }
        let newHighScore = this.numberWithCommas(this.state.highScore)
        let newCurrScore = this.numberWithCommas(this.state.currScore)
        let newCredits = this.numberWithCommas(this.state.credits)
        let newRqScore = this.numberWithCommas(this.state.rqScore)
        return (
            <div>
                <SlotsHolder
                    mute = {this.state.mute}
                    highScore={newHighScore}
                    credits={newCredits}
                    spin={this.state.spin}
                    handleReactivate={this.reactivateSpin}
                    setPtsToAdd={this.setPtsToAdd}
                    bet={this.state.bet}
                    g1={this.state.generate1}
                    g2={this.state.generate2}
                    g3={this.state.generate3}
                    gen1={this.state.g1}
                    gen2={this.state.g2}
                    gen3={this.state.g3} />

                {(this.state.error ? <Error message={this.state.error} clearError={this.clearError} /> : null)}

                <Controller
                    handleBet={this.handleBet}
                    handleSpin={this.handleSpin}
                    showTable={this.showTable}
                    credits={this.state.credits}
                    bet={this.state.bet}
                    spin={this.state.spin}
                    currScore={newCurrScore}
                    currLvl={this.state.currLevel}
                    rqScore={newRqScore} />

                <Profiles 
                playerImg={this.state.currPlayer} 
                playerName = {playerName} 
                enemyImg={this.state.currEnemy}
                enemyName = {enemyName}
                handleSwitch = {this.handlePlayerSwitch} />

                {(this.state.gameOver ? <HighScoreSubmitter mute ={this.state.mute} highScore={this.state.highScore} reset={this.handleGameReset} /> : null)}
                {(this.state.scoreTable ? <ScoreTable showTable={this.showTable} /> : null)}
                {(!this.state.mute ? <button className="muteBtn" type="button" onClick={this.handleMute}>&#128266;</button>:
                <button className="muteBtn" type="button" onClick={this.handleMute}>&#128264;</button>)}
            </div>
        )
    }
}

export default Game