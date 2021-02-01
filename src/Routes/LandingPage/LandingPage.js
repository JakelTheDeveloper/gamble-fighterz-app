import React, { Component } from 'react'
import instructions from '../../images/InstructionGuide.png'
import './LandingPageM.css'
import './LandingPageC.css'

class LandingPage extends Component {
    render() {
        return (
            <div>
                <div className="home">
                    <div className="mainInfo">
                        Gamble Fighterz is an app combining slot gambling with RPG. <br /> Set your bet and
                try your luck at advancing through the games 6 levels.<br /> Game instructions can be found below!
                </div>
                    <br />
                    <div className="companyInfo">
                        This game was created by Ja'Kel Jenkins (TsunamiCoding) founder of Tsunami Arcade,<br /> using
                ReactJs, HTML5 and CSS3!
                </div>
                    <br />
                    <div>
                        version 1.0.0
                <p><a href="mailto:jakelj24@gmail.com" target="_blank" rel="noopener noreferrer">Email Me</a></p>
                    </div>
                </div>
                <h1 className="HTP">How To Play</h1>
                <div className="howToPlay">

                    <div className="infoLeft">
                        <h1>Part 1</h1>
                        <ol type = "1">
                            <li value = "0">Mute - Default (Keep muted on mobile)</li>
                            <li>Slot Holder for Icon 1.</li>
                            <li>Slot Holder for Icon 2.</li>
                            <li>Slot Holder for Icon 3.</li>
                            <li>High Score is shown here,<br /> when a level is complete,<br />
                                or game is over, your highscore<br /> will be calculated.
                            </li>
                            <li>Credits are shown here.<br /> You will start the game with<br />
                                100 credits. After every level complete,<br /> you will gain
                                extra credits.
                            </li>
                            <li>Current Bet is shown here.<br /> You can set a maximum <br />of 3 credits
                                per bet. Score Points <br /> will be multiplied by this number.
                            </li>
                            <li>Score Table Button. Click this button<br /> to see how many points each
                                slot icon is worth.
                            </li>
                        </ol>
                    </div>
                    <div className="instructions">
                        <img className="instructGuide" src={instructions} alt='instructionGuide' />
                    </div>
                    <div className="infoRight">
                        <h1>Part 2</h1>
                        <ol type = "1">
                            <li value = "8">Bet 1 allots 1 credit to the bet,<br/>
                            Bet Max allots 3 credits to the bet.</li>
                            <li>Spin Button. Press this button once<br/> you've placed your bet.</li>
                            <li>Current Score is shown here. Points<br/> will tally up as each subsequent slot<br/>
                                wheel stops.
                            </li>
                            <li>Current Level is shown here.<br /> when you reach the required points(12),<br />
                                you will progress to the next level<br /> against the next Gamble Bully.
                            </li>
                            <li>Required Points are shown here.<br/> Once you reach this number, you will<br/>
                            progress to the next level.
                            </li>
                            <li>Current Character Profile Picture and name.
                            </li>
                            <li>Current Bully Profile Picture and name.
                            </li>
                            <li>Swich Button. Use this button to switch players.
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        )
    }
}

export default LandingPage