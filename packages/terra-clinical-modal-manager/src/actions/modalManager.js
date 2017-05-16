export const OPEN_MODAL = 'MM_OPEN_MODAL';
export const CLOSE_MODAL = 'MM_CLOSE_MODAL';
export const PUSH_MODAL = 'MM_PUSH_MODAL';
export const POP_MODAL = 'MM_POP_MODAL';
export const MAXIMIZE_MODAL = 'MM_MAXIMIZE_MODAL';
export const MINIMIZE_MODAL = 'MM_MINIMIZE_MODAL';

export function open(data) {
  return { type: OPEN_MODAL, data };
}

export function close(data) {
  return { type: CLOSE_MODAL, data };
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
