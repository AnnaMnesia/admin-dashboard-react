import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from "../../theme";
import { mockDataInvoices } from '../../data/mockData';

import Header from "../../components/Header";


const Invoices = () => {
    const theme=useTheme();
    const colors= tokens(theme.palette.mode);

 
    const columns=[
        {
            field: 'id', // it takes the id of the object in the mockData file 
            headerName: 'ID', // the headerName will represent the column title name of the table
        },
        {
            field: 'name',
            headerName: 'Name',
            flex: 1, // the material UI provides the ability to customize the column itself -> it will grow one fraction of the size for in terms of flex.
            cellClassName: 'name-column--cell',
        },
        {
            field: 'phone',
            headerName: 'Phone Number',
            flex: 1,
        },
        {
            field: 'email',
            headerName: 'Email',
            flex: 1,
        },
        {
            field: 'cost',
            headerName: 'Cost',
            flex: 1,
            //this grabs the value in the row in the data
            // grab the row and the cost
            renderCell: (params) => (
                <Typography color={colors.greenAccent[500]}>
                    €{params.row.cost}
                </Typography>
            )
        },
        {
            field: 'date',
            headerName: 'Date',
            flex: 1,
        },
    ];

    return (
        <Box m='20px'>
            <Header title='INVOICES' subtitle='List of Invoice Balances'/>
            <Box 
                m='40px 0 0 0' 
                height='75vh'
                sx={{
                    '& .MuiDataGrid-root':{
                        border: `1px solid rgba( 255, 255, 255, 0.18 )`,
                        boxShadow: `8px 8px 32px 2px rgba(30, 30, 30, 0.359)`,
                    },
                    '& .MuiDataGrid-cell':{
                        borderBottom: 'none',
                    },
                    '& .name-column--cell':{
                        color: colors.greenAccent[300],
                    },
                    '& .MuiDataGrid-columnHeaders':{
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: 'none',
                    },
                    '& .MuiDataGrid-virtualScroller':{
                        backgroundColor: colors.primary[400],
                        borderBottom: 'none',
                    },
                    '& .MuiDataGrid-footerContainer':{
                        backgroundColor: colors.blueAccent[700],
                        borderTop: 'none',
                    },
                    '& .MuiCheckbox-root':{
                        color: `${colors.greenAccent[200]} !important`,
                        borderTop: 'none',
                    },

                }}
            >
                <DataGrid
                    checkboxSelection
                    rows={mockDataInvoices}
                    columns={columns}
                />
            </Box>
        </Box>
    )
}

export default Invoices;