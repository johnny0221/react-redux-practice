import React, { ReactElement } from 'react';
import { counterActionCreators } from '../../Actions/couter.actions';
import { IinitialState } from '../../Reducers/counter.reducer';

interface Props {
  counter: IinitialState;
  increment: () => counterActionCreators;
  decrement: () => counterActionCreators;
}

export default function Counter({
  counter,
  increment,
  decrement,
}: Props): ReactElement {
  console.log(counter);
  return (
    <>
      <button onClick={increment}>plus</button>
      <div>{counter.count}</div>
    </>
  );
}
