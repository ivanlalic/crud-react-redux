import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//Actions of Redux
import {createNewProductAction} from '../actions/productActions';
import { showAlertAction, hideAlertAction } from '../actions/alertActions';

const NewProduct = ({history}) => {

    //Define state of component - local
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);


    //Use useDispatch and it creates a function
    const dispatch = useDispatch();


    //Access to the store state
    const loading = useSelector( state => state.products.loading);
    const error = useSelector( state => state.products.error );
    const alert = useSelector(state => state.alert.alert); //this is the 2ndo state (alertReducer.js) and index from reducers folder

    //Call action of productActions
    const addProduct = (product) => dispatch( createNewProductAction(product) ); //Im passing the product


    //When user press submit
    const submitNewProduct = e =>{
        e.preventDefault();

        //Validate form
        if(name.trim() === '' || price <= 0) {

            const alert = {
                msg: 'All fields are required',
                classes: 'alert alert-danger text-center text-uppercase p3'
            }

            dispatch( showAlertAction(alert) );

            return;
        }


        //if there are no errors

        dispatch( hideAlertAction() );

        //create new product
        addProduct({
            name,
            price
        });

        //Redirect after add a product
        history.push('/');

    }



    return ( 
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">Add New Product</h2>

                        { alert ? <p className={alert.classes}>{alert.msg}</p> : null}

                        <form
                            onSubmit={submitNewProduct}
                        >
                            <div className="form-group">
                                <label>Product name</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Product name"
                                    name="name"
                                    value={name}
                                    onChange={e=>setName(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <label>Product Price</label>
                                <input 
                                    type="number"
                                    className="form-control"
                                    placeholder="Product price"
                                    name="price"
                                    value={price}
                                    onChange={e=>setPrice(Number(e.target.value))}
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >Add</button>
                        </form>
                        { loading ? <p>Loading...</p> : null }
                        { error ? <p className="alert alert-danger p2 mt-4 text-center">Error</p> : null}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default NewProduct;