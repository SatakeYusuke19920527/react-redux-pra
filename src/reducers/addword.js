import { ADDWORD } from '../actions'

const initialState = { word: 'test' }

export default (state = initialState, action) => {
    switch (action.type) {
        case ADDWORD:
            return {word : state.word + 'aaa'}
        default:
            return state
    }
}