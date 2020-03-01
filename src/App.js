import React from 'react'

import './App.css'

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <label>bar</label>
        <input
          type='text'
          onChange={event => console.log(event.target.value)}
        />
      </React.Fragment>
    )
  }
}

export default App
