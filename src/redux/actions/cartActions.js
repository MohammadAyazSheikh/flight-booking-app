import * as ActionTypes from '../actionsType';



export const ADD_CART_SUCCESS = (product) => (
    {
        type: ActionTypes.ADD_CART_SUCCES,
        payload: product
    }
);

export const ADD_CART_FAILD = () => (
    {
        type: ActionTypes.ADD_CART_FAILED,
    }
);
export const ADD_CART_LOADING = () => (
    {
        type: ActionTypes.ADD_CART_LOADING
    }
);


export const REMOVE_CART_SUCCESS = (id) => (
    {
        type: ActionTypes.REMOVE_CART_SUCCES,
        payload: id
    }
);



export const ADD_CART = (product) => (dispatch) => {


    dispatch(ADD_CART_LOADING());

    dispatch(ADD_CART_SUCCESS(product));

    console.log(product)

}


export const REMOVE_CART = (id) => (dispatch) => {


    // dispatch(ADD_CART_LOADING());

    dispatch(REMOVE_CART_SUCCESS(id));

    console.log(id);

}