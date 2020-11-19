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


//Every reducer has its state
const initialState = {
    products: [],
    error: null,
    loading: false,
    deleteproduct: null,
    editproduct: null
}

export default function productsReducer(state = initialState, action ) {
    switch(action.type) {
        case START_LOADING_PRODUCTS:
        case ADD_PRODUCT:
            return {
                ...state,
                loading: action.payload
            }
        case ADD_PRODUCT_OK:
            return {
                ...state,
                loading: false,
                products: [...state.products, action.payload] 
            }
        case ADD_PRODUCT_ERROR:
        case LOADING_PRODUCTS_ERROR:
        case PRODUCT_DELETE_ERROR:
        case PRODUCT_EDIT_ERROR:
        return {
            ...state,
            loading: false,
            error: action.payload
            }
        case LOADING_PRODUCTS_OK:
            return {
                ...state,
                products: action.payload,
                loading: false,
                error: null
            }
        case GET_PRODUCT_DELETE:
            return {
                ...state,
                deleteproduct: action.payload
            }
        case PRODUCT_DELETE_OK:
            return {
                ...state,
                products: state.products.filter( product => product.id !== state.deleteproduct ),
                deleteproduct: null
            }
        case GET_PRODUCT_EDIT:
            return {
                ...state,
                editproduct: action.payload
            }
        case PRODUCT_EDIT_OK:
            return {
                ...state,
                editproduct: null,
                products: state.products.map(product => 
                    product.id === action.payload.id ? product = action.payload 
                    : product
                ) //iterate over every product, and if a product(id) is the same that the one that it is being passed (action.payload), then set product to the new one (action.payload)
            }


        default:
            return state;
    }
};