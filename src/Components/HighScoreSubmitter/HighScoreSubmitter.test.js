import ReactDOM from 'react-dom'
import HighScoreSubmitter from './HighScoreSubmitter'

describe("HighScoreSubmitter", () => {
   it("renders without crashing", () => {
      const div = document.createElement("div")
      ReactDOM.render(<HighScoreSubmitter />, div)
   })
})
