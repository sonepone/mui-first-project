import React from 'react';
import OrderDetails from './OrderDetails';
import Box from '@mui/material/Box';
import { NavLink } from 'react-router-dom';

function Orders({orders}) {
 

    return (
      <Box sx={{ width: '80%', margin: 'auto', marginTop: 5 }}>
        <h1>Orders</h1>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>

                {orders.map(order => (
                <li key={order.id} style={{ listStyle: 'none'}}>
                    <NavLink to={`/orders/${order.id}`}>
                       <OrderDetails order={order} allOrders={orders} showBig={false} />
                    </NavLink>
                </li>
            ))}
        </ul>
        </Box>
    );
  }

  export default Orders;