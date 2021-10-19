import React from 'react';
import pending from "../../images/pending.jfif";
const Cart = () => {
    return (
        <div className='my-5'>
            <h1 className='text-center'>This is cart 
            section</h1>

            <img className='w-50 img-fluid'  src={pending} alt="" />
        </div>
    );
};

export default Cart;