import ReactDOM from 'react-dom'
import SlotsHolder from './SlotsHolder'

describe("SlotsHolder", () => {
   it("renders without crashing", () => {
      const div = document.createElement("div")
      ReactDOM.render(<SlotsHolder />, div)
   })
})
