import { RootState } from './../../Reducers/index';
import { increment, decrement } from './../../Actions/couter.actions';
import { connect, DefaultRootState } from 'react-redux';

import Counter from './Counter';

export default connect(({ counter }: RootState) => ({ counter }), {
  increment,
  decrement,
})(Counter);
