const counterElem = document.getElementById('counterElem');
const incrementElem = document.getElementById('increment');
const decrementElem = document.getElementById('decrement');

// defining initial state
const initialState = {
    value: 0
}
// creating reducer function
function counterReducer(state = initialState, action) {
    if (action.type == 'increment') {
        return { ...state, value: state.value + 1 };
    } else if (action.type == 'decrement') {
        return { ...state, value: state.value - 1 };
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
    store.dispatch({
        type: 'increment'
    });
})

decrementElem.addEventListener("click", () => {
    store.dispatch({
        type: 'decrement'
    });
})

