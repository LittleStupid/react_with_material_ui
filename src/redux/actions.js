export const LOGOUT = 'LOGOUT';
export const TOGGLEDRAWER = 'TOGGLEDRAWER'

export function logout() {
  return { type: LOGOUT }
}

export function toggleDrawer() {
  return { type: TOGGLEDRAWER }
}
