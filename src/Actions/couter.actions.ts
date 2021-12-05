import { Action } from 'redux';

type counterActions = '[Counter]INCREMENT' | '[Counter]DECREMENT';

export type counterActionCreators = Action<counterActions> & { payload: any };

export const increment = (): counterActionCreators => {
  return {
    type: '[Counter]INCREMENT',
    payload: 'temp',
  };
};

export const decrement = (): counterActionCreators => {
  return {
    type: '[Counter]DECREMENT',
    payload: 'temp',
  };
};
