import { createReducer, on } from '@ngrx/store';
import { decrement, decrementbyten, increment, incrementbyten, reset } from './counter.actions';

export const initialState = 0;

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0),
  on(incrementbyten, (state)=> state + 10),
  on(decrementbyten, state => state-10 )
);

export function counterReducer(state, action){
return _counterReducer(state, action)

}
