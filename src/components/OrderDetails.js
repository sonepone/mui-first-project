import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';    
import { NavLink, useParams } from 'react-router-dom';

function OrderDetails({ order, allOrders, showBig }) {

    const params = useParams();
    const orderId = params.id;


 
    let jsxElement;
    if (!showBig) {
        jsxElement = <Card variant="outlined">
                            <CardContent>
                            <h3>Order ID: {order.id}</h3>
                            <p>Customer Name: {order.customerName}</p>
                            <p>Order Date: {order.orderDate}</p>
                            <p>Description: {order.description}</p>
                        </CardContent>
                    </Card>
    }
    else
    {

        const order2 = allOrders.find( (oneOrder) => oneOrder.id == orderId  );

        const jsxElement2 = (
        <React.Fragment>
            <div className="modal-overlay" onClick={(e) => e.stopPropagation()} />
            <div className="modal-dialog">
                <Card variant="outlined">
                    <CardContent>
                        <h3>Order ID: {order2.id}</h3>
                        <p>Customer Name: {order2.customerName}</p>
                        <p>Order Date: {order2.orderDate}</p>
                        <p>Description: {order2.description}</p>
                        <NavLink to={'/orders'} title='Back' >Nazad</NavLink>
                    </CardContent>
                </Card>
            </div>
            <style>{`
                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    background-color: rgba(0, 0, 0, 0.5);
                    z-index: 1;
                }
                .modal-dialog {
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background-color: white;
                    border-radius: 10px;
                    padding: 20px;
                    z-index: 2;
                }
            `}</style>
        </React.Fragment>
    );
        jsxElement = jsxElement2;
    }

    return jsxElement;
}

export default OrderDetails;