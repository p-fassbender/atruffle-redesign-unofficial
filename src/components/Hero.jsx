import React from 'react'
import { ImageCarousel } from './ImageCarousel'
import { Stack, Typography, Button } from '@mui/material'

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
                direction={'column'}
                spacing={2}
                sx={{
                    flexGrow: 1,
                    alignItems: 'center'
                }}
            >
                <Typography variant='h2'>Welcome!</Typography>
                <Button
                    variant='contained'
                    href='#'
                    size='large'
                    color='secondary'
                >
                    Order Now!
                </Button>
            </Stack>
        </Stack>
    )
}
