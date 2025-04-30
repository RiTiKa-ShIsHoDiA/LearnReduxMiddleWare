import { createStore } from "redux";

//store
const store = createStore(reducer);

const intialState = {
  accountHolder: "ritika",
  amount: 300,
};

//history array
const history = [];
//reducer
function reducer(
  state = {
    accountHolder: "ritika",
    amount: 300,
  },
  action
) {
  //deposit and withdrwa fucntion logic = reducers
  if (action.type === "increment") {
    // state.amount += 1;  //wrong practice 
    // return state;
    return { accountHolder: "ritika", amount: ++state.amount }; //immutability
  }
  return state;
}

// console.log(store.getState());

// console.log(store.getState());
// console.log("history array", history);

store.subscribe(() => {
  //run whenever state will update
  history.push(store.getState());
  // console.log(store.getState());
  console.log(history);
});

setInterval(() => {
  store.dispatch({ type: `increment` });
}, 2000);
