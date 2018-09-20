export const REGISTER_REQUEST = 'REGISTER_REQUEST'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_ERROR = 'REGISTER_ERROR'

export const registerUser = (userData) => ({ // pass this function to onClick event to registration button (dont forget to import it see example in Pizza)
    type: REGISTER_REQUEST,
    payload: userData,
})
