import ReactDOM from 'react-dom'
import Controller from './Controller'

describe("Controller", () => {
   it("renders without crashing", () => {
      const div = document.createElement("div")
      ReactDOM.render(<Controller />, div)
   })
})
