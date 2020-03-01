import React from 'react'
import {connect} from 'react-redux'
 
import { increment, decrement, addword, addtodo } from '../actions'

class App extends React.Component {
  render() {
    const props = this.props
    console.log(props.todo)
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
        <h1>word : {this.props.word}</h1>
        <button
          onClick={() => { props.addword() }}
        >
          plus
        </button>
        <h1>todo :
        </h1>
        <button
          onClick={() => {props.addtodo()}}
        >
          addtodo
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    value: state.count.value,
    word: state.addword.word,
    todo:state.addtodo.todo
  }
)
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  addword: () => dispatch(addword()),
  addtodo: () => dispatch(addtodo())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

