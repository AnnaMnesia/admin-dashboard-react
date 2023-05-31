import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { tokens } from "../../theme";
import { mockDataContacts } from '../../data/mockData';

import Header from "../../components/Header";


const Contacts = () => {
    const theme=useTheme();
    const colors= tokens(theme.palette.mode);


    const columns=[
        {
            field: 'id', // it takes the id of the object in the mockData file 
            headerName: 'ID', // the headerName will represent the column title name of the table
            flex: 0.5,
        },
        {
            field: 'registrarId', 
            headerName: 'Registrar ID', 
        },
        {
            field: 'name',
            headerName: 'Name',
            flex: 1, // the material UI provides the ability to customize the column itself -> it will grow one fraction of the size for in terms of flex.
            cellClassName: 'name-column--cell',
        },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            headerAlign: 'left',
            align:'left',
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
            field: 'address',
            headerName: 'Address',
            flex: 1,
        },
        {
            field: 'city',
            headerName: 'City',
            flex: 1,
        },
        {
            field: 'zipCode',
            headerName: 'ZipCode',
            flex: 1,
        },
    ];

    return (
        <Box m='20px'>
            <Header title='CONTACTS' subtitle='List of Contacts for Future Reference'/>
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
                    '& .MuiDataGrid-toolbarContainer .MuiButton-text':{
                        color: `${colors.grey[100]} !important`,
                    },

                }}
            >
                <DataGrid
                    rows={mockDataContacts}
                    columns={columns}
                    components={{Toolbar: GridToolbar}}
                />
            </Box>
        </Box>
    )
}

export default Contacts;