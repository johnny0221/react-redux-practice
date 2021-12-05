import { counterActionCreators } from '../Actions/couter.actions';

export interface IinitialState {
  count: number;
}

const initialState: IinitialState = {
  count: 0,
};

export const counterReducer = (
  state: IinitialState = initialState,
  action: counterActionCreators
) => {
  switch (action.type) {
    case '[Counter]INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      };
    case '[Counter]DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return {
        ...state,
      };
  }
};
