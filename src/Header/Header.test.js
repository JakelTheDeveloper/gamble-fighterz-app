import { BrowserRouter as Router, withRouter } from 'react-router-dom'
import ReactDOM from 'react-dom'
import Header from './Header'


describe("Header", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div")
        ReactDOM.render(
            <Router>
                <Header />
            </Router>, div)
    })
})
