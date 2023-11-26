import action from "../actions/actionType"

const initialState = {
    email: '',
    name: '',
    avatar: '',
    address: '',
    phoneNumber: '',
    isAuth: false,
}

const actionForReducer = (state = initialState, payload) => {
    switch (payload.type) {

        case action.USER_LOGIN_SUCCESS:
            let data = payload.data.account
            return {
                ...state,
                email: data.email,
                name: data.name,
                avatar: data.avatar,
                address: data.address,
                phoneNumber: data.phoneNumber,
                isAuth: true,
            }

        default:
            return state
    }
}

export default actionForReducer;
