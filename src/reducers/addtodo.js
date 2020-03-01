import { ADDTODO } from '../actions'

const initialState = {
    todo: ['adsf','qewr']
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADDTODO:
            state.todo.push('state')
            return state
        default:
            return state
    }
}