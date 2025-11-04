import React from 'react';
import OrderDetails from './OrderDetails';
import Box from '@mui/material/Box';
import { NavLink } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function Orders({orders}) {
    const searchFieldRef = React.useRef(); 
    const navigate = useNavigate();

    return (
      <Box sx={{ width: '80%', margin: 'auto', marginTop: 5 }}>
        <h1>Orders</h1>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid grey', padding: 2, marginBottom: 4 }}>
                <form style={{display: "flex", flexDirection: "row", alignItems: "center"}} onSubmit={(e) => {
                    e.preventDefault();
                    const orderId = searchFieldRef.current.value;
                    const order = orders.find(order => order.id === parseInt(orderId));
                    if (order) {
                        navigate(`/orders/${orderId}`);
                    }
                }}>
                    <TextField
                        // {...props}
                        label="Search Order"
                        variant="outlined"
                        inputRef={searchFieldRef}
                    />
                    <Button type="submit">Search</Button>
                </form>
            </Box>

            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>

                {orders.map(order => (
                <li key={order.id} style={{ listStyle: 'none'}}>
                    <NavLink style={{ textDecoration: 'none' }} to={`/orders/${order.id}`}>
                       <OrderDetails order={order} allOrders={orders} showBig={false} />
                    </NavLink>
                </li>
            ))}
        </ul>
        </Box>
    );
  }

  export default Orders;