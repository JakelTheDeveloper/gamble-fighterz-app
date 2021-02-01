import React, { Component } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
class Header extends Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }

  render() {
    return (
      <div>
        <header>
          <h1>
            <Link to='/' className="title_header">Gamble Fighterz</Link>
          </h1>
        </header>
        <nav className="nav_header">
          <ul className="ul_header">
            <li><Link to='/' className="li_header">Home</Link></li>
            <li><Link to='/game' className="li_header">Game</Link></li>
            <li><Link to='/highscores' className="li_header">High Scores</Link></li>
          </ul>
        </nav>
      </div>


    )
  }
}
export default Header