import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';

function Subtotal() {
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ( 0 items):
                            <strong>0</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input className="checkbox"/>This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                // value={getBasketTotal(basket)}
                value={0}
                displayType={"text"}
                thousandSeperator={true}
                prefix={"$"}
            />
        </div>
    )
}

export default Subtotal;
