import ReactDOM from 'react-dom'
import ScoreTable from './ScoreTable'

describe("ScoreTable", () => {
   it("renders without crashing", () => {
      const div = document.createElement("div")
      ReactDOM.render(<ScoreTable />, div)
   })
})
