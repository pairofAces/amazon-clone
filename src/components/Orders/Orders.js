import React, { useEffect, useState } from 'react';
import { db } from '../Firebase/firebase';
import './Orders.css';
import { useStateValue } from '../Util/StateProvider';
import Order from '../Order/Order';

export default function Orders() {
    const [{ basket, user }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if(user){
            db.collection('users').doc(user?.uid).collection('orders').orderBy('created', 'desc')
            .onSnapshot(snapshot => (
                setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            ))
        } else {
            setOrders([])
        }
    }, [user])

    return(
        <div className='orders'>
            <h1>Your Orders</h1>

            <div className='orders_order'>
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </div>
    )
}
