import {CountActionTypes, countState} from "./types";

const initState: countState = {
  count: 0
};

export function reducer(state = initState, action: CountActionTypes): countState {
  switch (action.type) {
    case "DECREMENT":
      return {
        ...state, count: action.count
      }
    case "INCREMENT":
      return {
        ...state, count: action.count
      }
    default:
      return {
        ...state
      }
  }
}
