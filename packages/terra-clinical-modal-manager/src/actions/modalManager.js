export const OPEN = 'MODAL_MANAGER_OPEN';
export const CLOSE = 'MODAL_MANAGER_CLOSE';
export const PUSH = 'MODAL_MANAGER_PUSH';
export const POP = 'MODAL_MANAGER_POP';
export const MAXIMIZE = 'MODAL_MANAGER_MAXIMIZE';
export const MINIMIZE = 'MODAL_MANAGER_MINIMIZE';

export function open(data) {
  return { type: OPEN, data };
}

export function close(data) {
  return { type: CLOSE, data };
}

export function push(data) {
  return { type: PUSH, data };
}

export function pop(data) {
  return { type: POP, data };
}

export function maximize(data) {
  return { type: MAXIMIZE, data };
}

export function minimize(data) {
  return { type: MINIMIZE, data };
}
