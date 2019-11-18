import {ADD_SERVICE, CHANGE_SERVICE_FIELD, EDIT_SERVICE, FETCH_SERVICE, UPDATE_SERVICE} from '../actions/actionTypes'

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
        case UPDATE_SERVICE: {
            return {...initialState}
        }
        case FETCH_SERVICE: {
            if (action.type === "id") {
                return {...state, id: action.payload};
            } else {
                return state;
            }
        }
        default:
            return state;
    }
}
