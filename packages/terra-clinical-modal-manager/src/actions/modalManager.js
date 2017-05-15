export const DISCLOSE_MODAL = 'MM_DISCLOSE_MODAL';
export const DISMISS_MODAL = 'MM_DISMISS_MODAL';
export const PUSH_MODAL = 'MM_PUSH_MODAL';
export const POP_MODAL = 'MM_POP_MODAL';
export const MAXIMIZE_MODAL = 'MM_MAXIMIZE_MODAL';
export const MINIMIZE_MODAL = 'MM_MINIMIZE_MODAL';

export function disclose(data) {
  return { type: DISCLOSE_MODAL, data };
}

export function dismiss(data) {
  return { type: DISMISS_MODAL, data };
}

export function push(data) {
  return { type: PUSH_MODAL, data };
}

export function pop(data) {
  return { type: POP_MODAL, data };
}

export function maximize(data) {
  return { type: MAXIMIZE_MODAL, data };
}

export function minimize(data) {
  return { type: MINIMIZE_MODAL, data };
}
