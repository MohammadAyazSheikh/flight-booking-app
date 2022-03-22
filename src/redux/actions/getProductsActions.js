import * as ActionTypes from '../actionsType';



export const GetProductsSuccess = (product) => (
    {
        type: ActionTypes.GET_PRODUCT_SUCCES,
        payload: product
    }
);

export const GetProductsFailed = () => (
    {
        type: ActionTypes.GET_PRODUCT_FAILED,
    }
);

export const GetProductsLoading = () => (
    {
        type: ActionTypes.GET_PRODUCT_LOADING,
    }
);



export const GetProducts = () => (dispatch) => {


    dispatch(GetProductsLoading());

    // alert();
    return fetch(`https://fakestoreapi.com/products?limit=20`,
        {
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "same-origin"
        }
    )
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText); //erro if user not found etc
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);  //error if we face problem to connect server
                throw errmess;
            })
        .then((res) => res.json())
        .then(
            data => {

                dispatch(GetProductsSuccess(data));
              
                console.log(`\n\n\n\n\n\n\n get product Response\n\n ${JSON.stringify(data)}\n\n\n\n\n\n`)

            }
        )
        .catch(
            error => {
                console.log('get producct failed error', error.message);
                alert('Your get product req could not be posted\nError: ' + error.message);
                dispatch(GetProductsFailed(error.message))
            }
        );

}