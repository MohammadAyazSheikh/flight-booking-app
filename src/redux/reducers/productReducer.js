import * as ActionTypes from '../actionsType';

export const GET_PRODUCTS_REDUCER = (state = { isLoading: true, products: null, errMess: null }, action) => {

    switch (action.type) {
        case ActionTypes.GET_PRODUCT_SUCCES:
            return {
                ...state,
                isLoading: false,
                products: action.payload,
                errMess: null,
            };
        case ActionTypes.GET_PRODUCT_FAILED:
            return {
                ...state,
                isLoading: false,
                products: null,
                errMess: action.payload,
            };
        case ActionTypes.GET_PRODUCT_LOADING:
            return {
                ...state,
                isLoading: true,
                products: null,
                errMess: null,
            };
        default:
            return state;
    }
}