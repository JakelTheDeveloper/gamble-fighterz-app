import ReactDOM from 'react-dom'
import HighScoreItem from './HighScoreItem'

describe("HighScoreItem", () => {
   it("renders without crashing", () => {
      const div = document.createElement("div")
      ReactDOM.render(<HighScoreItem highScore = {1000} />, div)
   })
})
