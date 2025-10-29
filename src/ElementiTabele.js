import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

const columns = [
  { field: 'id', headerName: 'ID', width: 90,   type: 'number' },
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'age', headerName: 'Age', width: 110, type: 'number' },
  { field: 'email', headerName: 'Email', width: 200 },
];
const rows = [
  { id: 1, name: 'John Doe', age: 35, email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', age: 42, email: 'jane@example.com' },
  { id: 3, name: 'Michael Brown', age: 28, email: 'michael@example.com' },
  { id: 4, name: 'Emily Johnson', age: 32, email: 'emily@example.com' },
  { id: 5, name: 'Robert Davis', age: 45, email: 'robert@example.com' },
  { id: 6, name: 'Sarah Taylor', age: 39, email: 'sarah@example.com' },
];
for (let i = 7; i <= 500; i++) {
  rows.push({
    id: i,
    name: `Name ${i}`,
    age: Math.floor(Math.random() * (50 - 18 + 1)) + 18,
    email: `name${i}@example.com`,
  });
}

export default function ElementiTabele() {
  return (
    <Box sx={{ height: 400, width: '100%', margin: 'auto', marginTop: 5 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </Box>
  );
}
