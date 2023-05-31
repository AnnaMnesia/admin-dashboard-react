import { Box, Typography, useTheme } from "@mui/material";
import {DataGrid} from '@mui/x-data-grid';
import { tokens } from "../../theme";
import {mockDataTeam} from '../../data/mockData'
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import Header from "../../components/Header";


const Team = () => {
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
            field: 'access',
            headerName: 'Access Level',
            flex: 1,
            // destructuring 
            renderCell:({row: {access}})=>{
                return(
                    <Box
                        width='60%'
                        m='0 auto'
                        p='5px'
                        display='flex'
                        justifyContent='center'
                        backgroundColor={
                            access === 'admin'
                            ? colors.greenAccent[600]
                            : colors.greenAccent[700]
                        }
                        borderRadius='4px'
                    >
                        {access === 'admin' && <AdminPanelSettingsOutlinedIcon/>}
                        {access === 'manager' && <SecurityOutlinedIcon/>}
                        {access === 'user' && <LockOpenOutlinedIcon/>}
                        <Typography color={colors.grey[100]} sx={{ml:'5px'}}>
                            {access}
                        </Typography>
                    </Box>
                )
            }
        },
    ]

    return (
        <Box m='20px'>
            <Header title='TEAM' subtitle='Managing the Team Members'/>
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

                }}
            >
                <DataGrid
                    rows={mockDataTeam}
                    columns={columns}
                />
            </Box>
        </Box>
    )
}

export default Team;