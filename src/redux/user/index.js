const initState = {
  username: '',
  password: ''
}

const user = function (state = initState, action) {
  switch (action.type) {
    case 'login':
      return state
    case 'logout':
      return state
    default:
      return state
  }
}

export default user