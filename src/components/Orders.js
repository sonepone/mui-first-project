import React from 'react';
import OrderDetails from './OrderDetails';
import Box from '@mui/material/Box';

function Orders() {
    const orders = Array.from({length: 25}, (v, k) => ({
        id: k+1,
        customerName: `Customer ${k+1}`,
        orderDate: `2022-01-${k+1 < 10 ? '0' : ''}${k+1}`,
        description: `Order ${k+1} description`
    }));

    return (
      <Box sx={{ width: '80%', margin: 'auto', marginTop: 5 }}>
        <h1>Orders</h1>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>

                {orders.map(order => (
                <li key={order.id} style={{ listStyle: 'none' }}>
                    <OrderDetails order={order} />
                </li>
            ))}
        </ul>
        </Box>
    );
  }

  export default Orders;