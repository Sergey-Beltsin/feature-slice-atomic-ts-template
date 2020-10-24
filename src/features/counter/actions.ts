import { INCREMENT, DECREMENT, CountActionTypes, count } from "./types";

export function increment(count: count): CountActionTypes {
  return {
    type: INCREMENT,
    count
  }
}

export function decrement(count: count): CountActionTypes {
  return {
    type: DECREMENT,
    count
  }
}