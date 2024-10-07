import React from 'react'
import Grid from '@mui/material/Grid2'
import { Stack ,Typography} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { Outlet } from 'react-router-dom'

export const Navbar = () => {


    return (
        <>
            <Grid container spacing={2} sx={{padding:'5px 10px',backgroundColor:'primary.main',marginBottom:'5px'}} >
                <Grid size={5} >
                    <Typography color='white' sx={{cursor:'pointer'}}>
                    BookMyRestaurent
                    </Typography>
                    </Grid>
                <Grid size='grow' >
                    <Stack sx={{ justifyContent: 'end', alignItems: 'center' }}>
                        <PersonIcon sx={{marginLeft:'auto',color:'white'}} />
                    </Stack>
                </Grid>
            </Grid>
            <Outlet />
        </>
    )
}

export default Navbar