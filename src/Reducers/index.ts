import { combineReducers } from 'redux';
import { counterReducer } from './counter.reducer';

const reducer = combineReducers({
  counter: counterReducer,
});

export type RootState = ReturnType<typeof reducer>;

export default reducer;
