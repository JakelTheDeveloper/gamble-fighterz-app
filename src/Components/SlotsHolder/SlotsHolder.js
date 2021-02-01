import React, { Component } from 'react'
import './SlotsHolderM.css'
import './SlotsHolderC.css'
import SoundOBJ from '../../Helpers/AudioHelper'
import iconHelper from '../../Helpers/IconHelper'
class SlotsHolder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            i: 0,
            j: 0,
            mainStart: 0,
            icon1: 0,
            icon2: 0,
            icon3: 0,
            slot1Set: false,
            slot2Set: false,
            slot3Set: false
        }
    }
    handleParams(params) {
        return
    }
    handleReset = () => {
        let { slot1Set, slot2Set, slot3Set } = this.state
        this.setState({ slot1Set: slot1Set = false, slot2Set: slot2Set = false, slot3Set: slot3Set = false })
        this.handleParams(slot1Set, slot2Set, slot3Set)
    }
    componentDidUpdate() {
        if (!this.props.spin && this.state.slot1Set === true) {
            this.handleReset()
        }
    }
    componentDidMount() {
        this.intervalId = setInterval(() => {
            let { icon1, icon2, icon3, slot1Set, slot2Set, slot3Set, i, j, mainStart } = this.state
            if (this.props.spin) {
                this.setState({ i: i += 1 })
                if (mainStart >= 0 && mainStart < 20) {
                    this.setState({ mainStart: mainStart += 1 })
                }
                if (mainStart >= 20) {
                    this.setState({ mainStart: mainStart = -1 })
                }
                if (i >= 10) {
                    this.setState({ i: i = 0, j: j += 1 })
                }
                if (!slot1Set && mainStart === -1 && j === 5) {
                    this.setState({ slot1Set: slot1Set = true })
                    this.convertIconToPoints("gen1")
                } else
                    if (slot1Set && !slot2Set && mainStart === -1 && j === 10) {
                        this.setState({ slot2Set: slot2Set = true })
                        this.convertIconToPoints("gen2")
                    } else
                        if (slot2Set && !slot3Set && mainStart === -1 && j === 15) {
                            this.setState({ slot3Set: slot3Set = true, j: j = 0, mainStart: mainStart = 0 })
                            this.convertIconToPoints("gen3")
                            this.props.handleReactivate()
                        }
                if (!slot1Set) {
                    this.setState({ icon1: icon1 = i })
                    if (!this.props.mute) {
                        SoundOBJ.iconSpinSFX.play()
                    }
                } else {
                    this.setState({ icon1: icon1 = this.props.gen1 })
                }
                if (!slot2Set) {
                    this.setState({ icon2: icon2 = i })
                    if (!this.props.mute) {
                        SoundOBJ.iconSpinSFX.play()
                    }
                } else {
                    this.setState({ icon2: icon2 = this.props.gen2 })
                }
                if (!slot3Set) {
                    this.setState({ icon3: icon3 = i })
                    if (!this.props.mute) {
                        SoundOBJ.iconSpinSFX.play()
                    }
                } else {
                    this.setState({ icon3: icon3 = this.props.gen3 })
                }
                this.handleParams(icon1, icon2, icon3)
            }
        }, 30)
    }
    componentWillUnmount() {
        clearInterval(this.intervalId)
    }
    convertIconToPoints(currGen) {
        let thisGen
        if (currGen === "gen1") {
            thisGen = this.props.gen1
        } else if (currGen === "gen2") {
            thisGen = this.props.gen2
        } else if (currGen === "gen3") {
            thisGen = this.props.gen3
        }
        if (thisGen === 0) {
            if (!this.props.mute) {
                SoundOBJ.punch01SFX.play()
            }
            this.props.setPtsToAdd(5)
        } else if (thisGen === 1) {
            if (!this.props.mute) {
                SoundOBJ.punch02SFX.play()
            }
            this.props.setPtsToAdd(10)
        } else if (thisGen === 2) {
            if (!this.props.mute) {
                SoundOBJ.kick01SFX.play()
            }
            this.props.setPtsToAdd(20)
        } else if (thisGen === 3) {
            if (!this.props.mute) {
                SoundOBJ.kick02SFX.play()
            }
            this.props.setPtsToAdd(40)
        } else if (thisGen === 4) {
            if (!this.props.mute) {
                SoundOBJ.specialSFX.play()
            }
            this.props.setPtsToAdd(300)
        } else if (thisGen === 5) {
            if (!this.props.mute) {
                SoundOBJ.specialSFX.play()
            }
            this.props.setPtsToAdd(400)
        } else if (thisGen === 6) {
            if (!this.props.mute) {
                SoundOBJ.ultimateSFX.play()
            }
            this.props.setPtsToAdd(4000)
        } else if (thisGen === 7) {
            if (!this.props.mute) {
                SoundOBJ.missSFX.play()
            }
            this.props.setPtsToAdd(1)
        } else if (thisGen === 8) {
            if (!this.props.mute) {
                SoundOBJ.combo01SFX.play()
            }
            this.props.setPtsToAdd(50)
        } else if (thisGen === 9) {
            if (!this.props.mute) {
                SoundOBJ.combo02SFX.play()
            }
            this.props.setPtsToAdd(100)
        } else if (thisGen === 10) {
            if (!this.props.mute) {
                SoundOBJ.combo03SFX.play()
            }
            this.props.setPtsToAdd(200)
        }
    }
    render() {
        let slots = [
            iconHelper.LP,
            iconHelper.HP,
            iconHelper.LK,
            iconHelper.HK,
            iconHelper.Special1,
            iconHelper.Special2,
            iconHelper.Special3,
            iconHelper.Miss,
            iconHelper.Combo1,
            iconHelper.Combo2,
            iconHelper.Combo3,
        ]
        return (
            <div>
                <div className="slotsContainer">
                    <div className="slotBox">
                        <img src={slots[this.state.icon1]} alt='slot1Icon' />
                    </div>
                    <div className="slotBox">
                        <img src={slots[this.state.icon2]} alt='slot2Icon' />
                    </div>
                    <div className="slotBox">
                        <img src={slots[this.state.icon3]} alt='slot3Icon' />
                    </div>
                </div>
                <div className="info">
                    <div className="closeSpace">
                        <label htmlFor="highscore" className="highscore">High Score:</label>
                        <input type="text" id="highscore" value={this.props.highScore} name="highscore" readOnly />
                    </div>
                    <div className="closeSpace">
                        <label htmlFor="credits" className="credits">Credits:</label>
                        <input type="text" id="credits" value={this.props.credits} name="credits" readOnly />
                    </div>
                    <div className="closeSpace">
                        <label htmlFor="bet" className="bet">Bet:</label>
                        <input type="text" id="bet" value={this.props.bet} name="bet" readOnly />
                    </div>
                </div>
            </div>)
    }
}

export default SlotsHolder