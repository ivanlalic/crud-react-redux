import { 
    ADD_PRODUCT,
    ADD_PRODUCT_OK,
    ADD_PRODUCT_ERROR,
    START_LOADING_PRODUCTS,
    LOADING_PRODUCTS_OK,
    LOADING_PRODUCTS_ERROR,
    GET_PRODUCT_DELETE,
    PRODUCT_DELETE_OK,
    PRODUCT_DELETE_ERROR,
    GET_PRODUCT_EDIT,
    START_PRODUCT_EDIT,
    PRODUCT_EDIT_OK,
    PRODUCT_EDIT_ERROR

 } from '../types';

import clientAxios from '../config/axios';
import Swal from 'sweetalert2';

 //create new products
 export function createNewProductAction(product) {
     return async (dispatch) => {
        dispatch( addProduct() );

        try {
            //Insert to API
            await clientAxios.post('/products', product);
            //if the insert (post) works fine, you pass it to the state
            dispatch( addProductOK(product) );
            //Alert
            Swal.fire(
                'Correct',
                'Product added succesully',
                'success'
            );
        } catch (error) { 
            //If there is an error
            dispatch( addProductError(true) );
            //Alert→Error
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Try again'
            })
        }

    }
 }

const addProduct = () => ({
     type: ADD_PRODUCT,
     payload: true
 });

 //If product is succesully stored in DB
const addProductOK = product => ({ //whats beetween () is the action→so...action.payload is the product
    type: ADD_PRODUCT_OK,
    payload: product
}) 

 //If there was an error
const addProductError = (state) => ({
    type: ADD_PRODUCT_ERROR,
    payload: state
});


// Function to download products from DB
export default function getProductsAction() {
    return async (dispatch) => {
        dispatch( loadProducts() );

        //Call API
        try {
            const response = await clientAxios.get('/products');
            dispatch( loadProductsOK(response.data) );    
        } catch (error) {
            dispatch( loadProductsError() );
        }

    }
};

const loadProducts = () => ({
    type: START_LOADING_PRODUCTS,
    payload: true
})

const loadProductsOK = products => ({
    type: LOADING_PRODUCTS_OK,
    payload: products
})

const loadProductsError = () => ({
    type: LOADING_PRODUCTS_ERROR,
    payload: true
})

//Select and delete product
export function deleteProductAccion(id) {
    return async (dispatch) => {
        dispatch( getProductDelete(id) );
        
        try {
            await clientAxios.delete(`/products/${id}`);
            
            dispatch( deleteProductOK() );

            //If you delete it→show alert
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )

        } catch (error) {
            console.log(error);
            dispatch( deleteProductError() );
        }



    }
} 

const getProductDelete = id => ({
    type: GET_PRODUCT_DELETE,
    payload: id
});

const deleteProductOK = () => ({
    type: PRODUCT_DELETE_OK
    
})

const deleteProductError = () => ({
    type: PRODUCT_DELETE_ERROR,
    payload: true
})


//Select and set product to edit
export function getEditProductAction (product) {
    return (dispatch) => {
        dispatch( getEditProduct(product) );
    }
};

const getEditProduct = product => ({
    type: GET_PRODUCT_EDIT,
    payload: product
});

//Edit product in API and state
export function editProductAction(product) { //this "product" is the new one , the changed product
    return async (dispatch) => {
        dispatch( editProduct(product) );

        try {
            await clientAxios.put(`/products/${product.id}`, product);
            dispatch( editProductOK(product) );

        } catch (error) {
            console.log(error);
            dispatch( editProductError() );
        }

    }
}

const editProduct = () => ({ //is the new product
    type: START_PRODUCT_EDIT
})

const editProductOK = product => ({ //is the new product
    type: PRODUCT_EDIT_OK,
    payload: product
})

const editProductError = () => ({ 
    type: PRODUCT_EDIT_ERROR,
    payload: true
})

