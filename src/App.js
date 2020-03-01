import React from 'react'
import './App.css'

const App = () => {
  return <Counter></Counter>
}

class Counter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  handlePlusButton = () => {
    this.setState({ count: this.state.count + 1 })
  }

  handleMinusButton = () => {
    this.setState({ count: this.state.count - 1 })
  }
  render () {
    return (
      <div>
        <h1>count : {this.state.count}</h1>
        <button
          onClick={() => {
            this.handlePlusButton()
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            this.handleMinusButton()
          }}
        >
          -
        </button>
      </div>
    )
  }
}

export default App
