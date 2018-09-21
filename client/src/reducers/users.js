import {REGISTER_REQUEST} from '../actions/users'

export default function (state = [], action) {
  switch (action.type) {
    case REGISTER_REQUEST:
      return action.users

    default:
      return state
  }
}
