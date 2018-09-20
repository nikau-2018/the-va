import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_ERROR } from '../actions/register';

export default function (state = [], { type, payload }) {
  switch (type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      }
    case REGISTER_SUCCESS:
      return {
        loading: false,
        userId: payload.userId,
        name: payload.name,
        error: '',
      }
    case REGISTER_ERROR:
      return {
        loading: false,
        error: payload.error,
      }
    default:
      return state
  }
}
