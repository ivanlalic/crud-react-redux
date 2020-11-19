import React from 'react';
import {useHistory} from 'react-router-dom';
import Swal from 'sweetalert2'; 

//Redux
import { useDispatch } from 'react-redux';
import { deleteProductAccion, getEditProductAction } from '../actions/productActions';


const Product = ({product}) => {

    const {name, id, price} = product;

    const dispatch = useDispatch();

    //Able history to redirect
    const history = useHistory(); 

    //Confirm if u want to delete product
    const confirmDelete = id => {


        //Ask user
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                //pass to action
                dispatch( deleteProductAccion(id) )
            }
          })
    }


    //Function to redirect 
    const redirectEdition = product => {
        dispatch( getEditProductAction(product) );
        history.push(`/products/edit/${product.id}`)
    }


    return ( 
        <tr>
            <td>{name}</td>
            <td><span className="font-weight-bold">${price}</span></td>
            <td className="acciones">
                <button 
                    type="button"
                    onClick={ () => redirectEdition(product) }
                    className="btn btn-primary mr-2">
                    Edit
                </button>
                <button 
                    type="button"
                    className="btn btn-danger"
                    onClick={ () => confirmDelete(id)} 
                >Delete</button>
            </td>
        </tr>
     );
}
 
export default Product;