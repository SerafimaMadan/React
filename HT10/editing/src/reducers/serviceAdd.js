import {
    ADD_SERVICE,
    CANCEL_SERVICE,
    CHANGE_SERVICE_FIELD,
    EDIT_SERVICE,
    REMOVE_SERVICE}
    from '../actions/actionTypes'

export const initialState = {
    id: '',
    name: '',
    price: '',
};

export default function serviceAddReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_SERVICE_FIELD:
            const {name, value} = action.payload;
            return {...state, [name]: value};
        case ADD_SERVICE: {
            return {...initialState};
        }
        case EDIT_SERVICE: {
            return {...action.payload.item}
        }
        case CANCEL_SERVICE: {
            return {...initialState}
        }
        case REMOVE_SERVICE: {
            const {id} = action.payload;
            return state.id === id ? {...initialState} : state;
        }

        default:
            return state;
    }
}