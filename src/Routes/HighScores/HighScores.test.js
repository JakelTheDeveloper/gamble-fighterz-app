import ReactDOM from 'react-dom'
import HighScores from './HighScores'

describe("HighScores", () => {
   it("renders without crashing", () => {
      const div = document.createElement("div")
      ReactDOM.render(<HighScores />, div)
   })
})
