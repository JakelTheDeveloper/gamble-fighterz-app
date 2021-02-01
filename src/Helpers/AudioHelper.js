import InsertCredit from '../sfx/InsertCredit.mp3'
import StartSpin from '../sfx/StartSpin.mp3'
import Counter from '../sfx/Counter.mp3'
import Errors from '../sfx/Error.mp3'
import IconSpin from '../sfx/IconSpin.mp3'
import NextLevel from '../sfx/NextLevel.mp3'
import Punch01 from '../sfx/Punch01.mp3'
import Punch02 from '../sfx/Punch02.mp3'
import Kick01 from '../sfx/Kick01.mp3'
import Kick02 from '../sfx/Kick02.mp3'
import Miss from '../sfx/Miss.mp3'
import Combo01 from '../sfx/Combo01.mp3'
import Combo02 from '../sfx/Combo02.mp3'
import Combo03 from '../sfx/Combo03.mp3'
import Special from '../sfx/Special.mp3'
import Ultimate from '../sfx/Ultimate.mp3'


let insertCreditSFX = new Audio(InsertCredit)
let startSpinSFX = new Audio(StartSpin)
let counterSFX = new Audio(Counter)
let errorSFX = new Audio(Errors)
let iconSpinSFX = new Audio(IconSpin)
let nextLevelSFX = new Audio(NextLevel)
let punch01SFX = new Audio(Punch01)
let punch02SFX = new Audio(Punch02)
let kick01SFX = new Audio(Kick01)
let kick02SFX = new Audio(Kick02)
let missSFX = new Audio(Miss)
let combo01SFX = new Audio(Combo01)
let combo02SFX = new Audio(Combo02)
let combo03SFX = new Audio(Combo03)
let specialSFX = new Audio(Special)
let ultimateSFX = new Audio(Ultimate)


let SoundOBJ = {
  insertCreditSFX, startSpinSFX, counterSFX, errorSFX, iconSpinSFX, nextLevelSFX, punch01SFX, punch02SFX,
  kick01SFX, kick02SFX, missSFX, combo01SFX, combo02SFX, combo03SFX, specialSFX, ultimateSFX
}

export default SoundOBJ