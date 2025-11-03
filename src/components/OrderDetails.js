import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';    

function OrderDetails({ order  }) {
    return (
        <Card variant="outlined">
            <CardContent>
            <h3>Order ID: {order.id}</h3>
            <p>Customer Name: {order.customerName}</p>
            <p>Total Amount: ${order.totalAmount}</p>
        </CardContent>
    </Card>
    );
}

export default OrderDetails;