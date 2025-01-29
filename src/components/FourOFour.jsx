import React from 'react'

import CakeIcon from '@mui/icons-material/Cake';
import { Button, Stack, Typography } from '@mui/material';
import { Link } from 'react-router'

export const FourOFour = () => {
    return (
        <Stack
            spacing={2}
            p={2}
            sx={{
                alignItems: 'center',
                minHeight: '100vh',
                bgcolor: 'primary.lighter',
            }}
        >
            <CakeIcon sx={{ fontSize: '15rem' }} />
            <Typography variant='h1'>404</Typography>
            <Typography variant='h3'>Oops! You won't find any tasty treats here!</Typography>
            <Typography variant='body1'>The page you are looking for does not exist. </Typography>
            <Button
                component={Link}
                to={`/`}
                sx={{ my: 2, color: 'white' }}
                variant='contained'
                size='large'
                color='secondary'
            >
                Home
            </Button>
        </Stack>
    )
}
