import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import './App.css';
import Game from '../Routes/Game/Game';
import Header from '../Header/Header';
import HighScores from '../Routes/HighScores/HighScores';
import LandingPage from '../Routes/LandingPage/LandingPage';

class App extends Component {
  renderNavRoutes() {
    return (
      <Route path="/" render={(props) => (
        <Header />
      )}
      />
    )
  }
  renderMainRoutes() {
    return (
      <>
        <Switch>
          <Route exact path="/" render={(props) => (
            <LandingPage />
          )}
          />

          <Route path="/game" render={(props) => (
            <Game />
          )}
          />

          <Route path="/highscores" render={(props) => (
            <HighScores />
          )}
          />

        </Switch>
      </>
    )
  }
  
  render() {
    return (
        <div className="App">
          <nav className='App_Nav'>{this.renderNavRoutes()}</nav>
          <main className="App_main">{this.renderMainRoutes()}</main>
        </div>
    )
  }
}

export default withRouter(App)
