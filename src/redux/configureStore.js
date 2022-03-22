import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { GET_PRODUCTS_REDUCER } from './reducers/productReducer';
import { CART_REDUCER } from './reducers/cartReducer';

export const configureStore = () => {
    const store = createStore(
        combineReducers(
            {
                products: GET_PRODUCTS_REDUCER,
                Cart: CART_REDUCER

            }
        ), applyMiddleware(thunk /*,logger*/)
    );

    return store;
}