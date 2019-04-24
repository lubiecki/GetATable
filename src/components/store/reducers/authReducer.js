import { testAction } from '../actions/reservationActions'

const initialState = {
  authError: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_RESERVATION":
      console.log(action)
    case "LOGIN_SUCCESS":
      console.log('login success')
      return {
        ...state,
        authError: null
      }
    case "LOGIN_ERROR":
      console.log('login error')
      return {
        ...state,
        authError: 'Login failed'
      }
    case "SIGNOUT_SUCCESS":
      console.log('signout success')
      return {
        ...state
      }
    case "SIGNUP_SUCCESS":
      console.log('signup success')
      return {
        ...state,
        authError: null
      }
    case "SIGNUP_ERROR":
      console.log('signup error')
      return {
        ...state,
        authError: action.err.message
      }
    default:
        return state
  }
}

export default authReducer;