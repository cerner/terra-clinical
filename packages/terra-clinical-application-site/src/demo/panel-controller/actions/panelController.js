export const OPEN_PANEL = 'OPEN_PANEL';
export const CLOSE_PANEL = 'CLOSE_PANEL';
export const PUSH_PANEL = 'PUSH_PANEL';
export const POP_PANEL = 'POP_PANEL';
export const MAXIMIZE_PANEL = 'MAXIMIZE_PANEL';
export const MINIMIZE_PANEL = 'MINIMIZE_PANEL';

export function open(data) {
  return { type: OPEN_PANEL, data };
}

export function close(data) {
  return { type: CLOSE_PANEL, data };
}

export function push(data) {
  return { type: PUSH_PANEL, data };
}

export function pop(data) {
  return { type: POP_PANEL, data };
}

export function maximize(data) {
  return { type: MAXIMIZE_PANEL, data };
}

export function minimize(data) {
  return { type: MINIMIZE_PANEL, data };
}
