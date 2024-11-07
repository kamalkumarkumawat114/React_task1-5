import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'customer', headerName: 'Customer', width: 200 },
  { field: 'lastSeen', headerName: 'Last Seen', width: 150 },
  { field: 'orders', headerName: 'Orders', type: 'number', width: 90 },
  { field: 'totalSpent', headerName: 'Total Spent', width: 130 },
  { field: 'latestPurchase', headerName: 'Latest Purchase', width: 200 },
  { field: 'news', headerName: 'News', width: 80, renderCell: (params) => (params.value ? '✔️' : '❌') },
  { field: 'segment', headerName: 'Segment', width: 120 },
];

// Static JSON data
const rows = [
  { id: 1, customer: 'kamal', lastSeen: '08/08/2020', orders: 2, totalSpent: '$295.31', latestPurchase: '27/11/2019 13:12:25', news: true, segment: 'Regular' },
  { id: 2, customer: 'kishor', lastSeen: '08/08/2020', orders: 3, totalSpent: '$647.91', latestPurchase: '07/06/2020 07:48:18', news: false, segment: 'Regular' },
  { id: 3, customer: 'chandni', lastSeen: '08/08/2020', orders: 0, totalSpent: '$0.00', latestPurchase: '', news: true, segment: 'Regular' },
  { id: 4, customer: 'mukesh', lastSeen: '08/08/2020', orders: 0, totalSpent: '$0.00', latestPurchase: '', news: false, segment: 'Regular' },
  { id: 5, customer: 'rakexh', lastSeen: '08/08/2020', orders: 0, totalSpent: '$0.00', latestPurchase: '', news: true, segment: 'Regular' },
  { id: 6, customer: 'beerbal', lastSeen: '08/08/2020', orders: 0, totalSpent: '$0.00', latestPurchase: '', news: true, segment: 'Regular' },
  
];

function CustomerDataGrid() {
  return (
    <Box sx={{ height: 400, width: '70%',margin:'30px'}}>
      <h2 style={{ textAlign: 'center', margin: '20px' }}>Customer Data Grid</h2>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </Box>
  );
}

export default CustomerDataGrid;
