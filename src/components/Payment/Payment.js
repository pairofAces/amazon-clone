import React, { useEffect, useState } from 'react';
import './Payment.css';
import { useStateValue } from '../Util/StateProvider';
import CheckoutProduct from '../Checkout/CheckoutProduct';
import { Link, useHistory } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../Util/reducer';
import axios from '../Axios';

function Payment() {

    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useStateValue(true);

    useEffect(() => {
        //this function will generate the stripe secret
        //which allows to charge a customer
       
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        } 

        getClientSecret();
    }, [basket])

    const submitHandler = async (e) => {
        //stripe configuration code will go here
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // this is the payment confirmation
            // if everything is good then:

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            history.replace('/orders')
        })
    }

    const changeHandler = (e) => {
        //This will listen for changes in the CardElement
        //and display any errors as the user types their card details

        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    }

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
                        <form onSubmit={submitHandler}>
                            <CardElement onChange={changeHandler}/>

                            <div className="payment_priceContainer">
                                <CurrencyFormat 
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeperator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>

                            {/* To display the Errors */}
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
