export const DISCLOSE_PANEL = 'DISCLOSE_PANEL';
export const DISMISS_PANEL = 'DISMISS_PANEL';
export const PUSH_PANEL = 'PUSH_PANEL';
export const POP_PANEL = 'POP_PANEL';
export const MAXIMIZE_PANEL = 'MAXIMIZE_PANEL';
export const MINIMIZE_PANEL = 'MINIMIZE_PANEL';

export function disclose(data) {
  return { type: DISCLOSE_PANEL, data };
}

export function dismiss(data) {
  return { type: DISMISS_PANEL, data };
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
