import React from 'react'
import { ImageCarousel } from './ImageCarousel'
import { Stack, Typography, Button } from '@mui/material'
import { Link } from 'react-router'

export const Hero = () => {
    return (
        <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={2}
            p={2}
            sx={{
                alignItems: 'center',
                justifyContent: { xs: 'center', md: 'normal' },
                bgcolor: 'primary.light'
            }}
        >
            <ImageCarousel />
            <Stack
                spacing={2}
                sx={{
                    flexGrow: 1,
                    alignItems: 'center'
                }}
            >
                <Typography
                    sx={{
                        fontSize: '4rem'
                    }}
                >
                    Welcome!
                </Typography>
                <Button
                    component={Link}
                    to={`/contact`}
                    sx={{ my: 2, color: 'white' }}
                    variant='contained'
                    size='large'
                    color='secondary'
                >
                    Order Now!
                </Button>
            </Stack>
        </Stack>
    )
}
