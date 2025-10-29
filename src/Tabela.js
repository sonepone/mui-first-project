/*************  ✨ Windsurf Command ⭐  *************/
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
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

export default function Tabela() {
  return (
    <Box sx={{ height: 400, width: '80%', margin: 'auto', marginTop: 5 }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} />
    </Box>
  );
}
/*******  56acc4f5-15ef-49af-a517-56a7dd097661  *******/