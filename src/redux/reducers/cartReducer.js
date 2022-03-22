import * as ActionTypes from '../actionsType';

export const CART_REDUCER = (state = { isLoading: true, cart: [], errMess: null }, action) => {

    switch (action.type) {
        case ActionTypes.ADD_CART_SUCCES:
            return {
                ...state,
                isLoading: false,
                cart: [action.payload, ...state.cart],
                errMess: null,
            };
        case ActionTypes.ADD_CART_FAILED:
            return {
                ...state,
                isLoading: false,
                errMess: action.payload,
            };
        case ActionTypes.ADD_CART_LOADING:
            return {
                ...state,
                isLoading: true,
                errMess: null,
            };

        case ActionTypes.REMOVE_CART_SUCCES:
            return {
                ...state,
                isLoading: false,
                cart: state.cart.filter(item => item.id != action.payload),
                errMess: null,
            };
        default:
            return state;
    }
}