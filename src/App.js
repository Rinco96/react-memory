import React, { Component } from 'react'
import Card from './cards/Card'
import GuessCount from './guesscount/GuessCount'

class App extends React.Component {
  render() {
    const won = new Date().getSeconds() % 2 === 0

    return (
      <div className="memory">
        <GuessCount guesses={0} />
        <Card card="😀" feedback="hidden" />
        <Card card="🎉" feedback="justMatched" />
        <Card card="💖" feedback="justMismatched" />
        <Card card="🎩" feedback="visible" />
        <Card card="🐶" feedback="hidden" />
        <Card card="🐱" feedback="justMatched" />
        {won && <p>GAGNÉ !</p>}
      </div>
    )
  }
}

export default App
