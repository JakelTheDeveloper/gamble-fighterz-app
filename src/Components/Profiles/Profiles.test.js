import ReactDOM from 'react-dom'
import Profiles from './Profiles'

describe("Profiles", () => {
   it("renders without crashing", () => {
      const div = document.createElement("div")
      ReactDOM.render(<Profiles />, div)
   })
})
