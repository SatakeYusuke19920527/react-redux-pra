export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const ADDWORD = 'ADDWORD'
export const ADDTODO = 'ADDTODO'

export const increment = () => {
    return (
        { type: INCREMENT }
    );
}

export const decrement = () => {
    return (
        { type: DECREMENT }
    );
}

export const addword = () => {
    return (
        {type:ADDWORD}
    )
}

export const addtodo = () => {
    return (
        {type:ADDTODO}
    )
}