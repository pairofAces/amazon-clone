import React from 'react';
import './Payment.css';
import { useStateValue } from '../Util/StateProvider';
import CheckoutProduct from '../Checkout/CheckoutProduct';
import { Link } from 'react-router-dom';

function Payment() {

    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className='payment'>
            <div className="payment_container">
                <h1>
                    Checkout (
                        <Link to="/checkout">
                            {basket?.length} items
                        </Link>
                    )
                </h1>
                {/* Delivery address container */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment_address">
                        <p>{user?.email}</p>
                        <p>123 JavaScript Lane</p>
                        <p>New York, NY</p>
                    </div>

                </div>
                {/* Review Items container */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Review Your Items and Delivery</h3>
                    </div>
                    <div className="payment_items">
                        {/* show the items in the checkout component here -> 
                        using the basket from above */}
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            /> 
                        ))}
                    </div>
                </div>
                {/* Payment Method container */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment_details">
                        {/* Stripe payment system will be included here*/}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
