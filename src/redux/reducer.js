import { add, addCount } from "./actions";

let initialState = {
    items: []
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case add: 
            return {...state, items: state.items.concat({name: action.payload.name, counter: action.payload.counter})};
        default:
            return {...state}
    }
}
export default reducer;