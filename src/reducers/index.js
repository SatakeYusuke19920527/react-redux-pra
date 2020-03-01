import { combineReducers } from 'redux'
import count from './count'
import addword from './addword'
import addtodo from './addtodo'

export default combineReducers({ count,addword,addtodo });