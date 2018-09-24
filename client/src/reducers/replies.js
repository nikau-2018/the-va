import {RECEIVE_REPLIES} from '../actions/index'

function replies (state = [], action) {
  switch (action.type) {
    case RECEIVE_REPLIES:
      return action.replies

    default:
      return state
  }
}

export default replies
