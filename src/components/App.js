import React from 'react'
import {connect} from 'react-redux'
 
import {increment, decrement} from '../actions'

class App extends React.Component {
  render() {
    const props = this.props
    return (
      <div>
        <h1>count : {this.props.value}</h1>
        <button
          onClick={() => {
            props.increment()
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            props.decrement()
          }}
        >
          -
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({ value: state.count.value })
const mapDispatchToProps = ({increment,decrement})

export default connect(mapStateToProps, mapDispatchToProps)(App)

