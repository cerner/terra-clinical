import { open, push, pop, maximize, minimize, defaultState } from 'terra-modal-manager/lib/shared/disclosureReducerUtils';

import {
  OPEN,
  CLOSE,
  PUSH,
  POP,
  MAXIMIZE,
  MINIMIZE,
} from './actionTypes';

const supportedSizes = {
  tiny: 'tiny',
  small: 'small',
  medium: 'medium',
  large: 'large',
  huge: 'huge',
};

const supportedBehaviors = {
  squish: 'squish',
  overlay: 'overlay',
};

const defaultPanelState = Object.assign({}, defaultState, {
  size: supportedSizes.small,
  behavior: supportedBehaviors.squish,
});
const panelManager = (state = defaultPanelState, action) => {
  switch (action.type) {
    case OPEN:
      return Object.assign({}, open(state, action), {
        size: action.data.size || supportedSizes.small,
        behavior: action.data.behavior || supportedBehaviors.squish,
      });
    case CLOSE:
      return defaultPanelState;
    case PUSH:
      return push(state, action);
    case POP:
      return pop(state, action);
    case MAXIMIZE:
      return maximize(state, action);
    case MINIMIZE:
      return minimize(state, action);
    default:
      return state;
  }
};

export default panelManager;
