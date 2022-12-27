const initialState = {
  usersList: []
};

const allUsers = [
  {
    name : "Vipin",
    email : "vipin.y@turtlemint.com",
    mobile : "9769939005"
  }
]

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state, usersList: allUsers
      }
    case 'ADD_USER':
      return {
        ...state, usersList: [...state.usersList, action.payload]
      }
    default:
      return state;
  }
};
export default usersReducer;