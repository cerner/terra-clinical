import { disclose, push, pop, maximize, minimize, defaultState } from './disclosureUtils';

import {
  DISCLOSE_MODAL,
  DISMISS_MODAL,
  PUSH_MODAL,
  POP_MODAL,
  MAXIMIZE_MODAL,
  MINIMIZE_MODAL,
} from '../actions/modalManager';

const supportedSizes = {
  tiny: 'tiny',
  small: 'small',
  medium: 'medium',
  large: 'large',
  huge: 'huge',
};

const defaultModalState = Object.assign({}, defaultState, {
  size: supportedSizes.small,
});
const modalManager = (state = defaultModalState, action) => {
  switch (action.type) {
    case DISCLOSE_MODAL:
      return Object.assign({}, disclose(state, action), { size: action.data.size || supportedSizes.small });
    case DISMISS_MODAL:
      return defaultModalState;
    case PUSH_MODAL:
      return push(state, action);
    case POP_MODAL:
      return pop(state, action);
    case MAXIMIZE_MODAL:
      return maximize(state, action);
    case MINIMIZE_MODAL:
      return minimize(state, action);
    default:
      return state;
  }
};

export default modalManager;
