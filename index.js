const counterElem = document.getElementById('counterElem');
const incrementElem = document.getElementById('increment');
const decrementElem = document.getElementById('decrement');

// defining initial state
const initialState = {
    value: 0
}
// action Identifiers
const INCREMENT = 'increment';
const DECREMENT = 'decrement';

// action creators
const increment = (value) => {
    return {
        type: INCREMENT,
        payLoad: value
    }
}
const decrement = (value) => {
    return {
        type: DECREMENT,
        payLoad: value
    }
}

// creating reducer function
function counterReducer(state = initialState, action) {
    if (action.type == INCREMENT) {
        return { ...state, value: state.value + action.payLoad };
    } else if (action.type == DECREMENT) {
        return { ...state, value: state.value - action.payLoad };
    } else {
        return state;
    }
}
// creating redux store
const store = Redux.createStore(counterReducer);

const render = () => {
    const state = store.getState();
    counterElem.innerText = state.value.toString();
}
// rendering UI with initalvalue
render();

// on despatching action, updating UI by calling the render function
store.subscribe(render);

//  adding 
incrementElem.addEventListener("click", () => {
    store.dispatch(increment(2));
})

decrementElem.addEventListener("click", () => {
    store.dispatch(decrement(1));
})

