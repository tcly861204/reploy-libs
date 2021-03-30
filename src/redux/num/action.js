export const add = () => ({ type: "add" })
export const minus = () => ({ type: "minus" })
export const asyncAdd = () => dispatch => {
  setTimeout(() => {
    dispatch({ type: "add" })
  }, 1500)
}
