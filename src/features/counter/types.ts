export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export interface count {
  count: number
}

export interface countState {
  count: count
}

interface increment {
  type: typeof INCREMENT
  count
}

interface decrement {
  type: typeof DECREMENT
  count
}

export type CountActionTypes = increment | decrement;