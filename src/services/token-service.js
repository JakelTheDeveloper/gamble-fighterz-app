const TokenService = {
  saveData(data) {
      window.localStorage.setItem('highScore', data.highScore)
      window.localStorage.setItem('credits', data.credits)
      window.localStorage.setItem('score', data.currScore)
      window.localStorage.setItem('level', data.currLevel)
      window.localStorage.setItem('rqScore', data.rqScore)
      window.localStorage.setItem('player', data.currPlayer)
      window.localStorage.setItem('enemy', data.currEnemy)
  },
  getData() {
    return window.localStorage.getItem('highScore')
    
  },
  clearData() {
    window.localStorage.removeItem('highScore')
      window.localStorage.removeItem('credits')
      window.localStorage.removeItem('score')
      window.localStorage.removeItem('level')
      window.localStorage.removeItem('rqScore')
      window.localStorage.removeItem('player')
      window.localStorage.removeItem('enemy')
  },
  hasData() {
    return !!TokenService.getData()

  },
}

export default TokenService
