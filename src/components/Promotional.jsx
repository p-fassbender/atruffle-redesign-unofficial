import React from 'react'
import { Stack, Typography, Box, Button } from '@mui/material'

export const Promotional = () => {
    return (
        <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={2}
            p={2}
            sx={{
                alignItems: 'center',
                justifyContent: { xs: 'center', md: 'normal' },
                bgcolor: 'primary.lighter'
            }}
        >
            <Stack
                direction={'column'}
                spacing={2}
                sx={{
                    flexGrow: 1,
                    alignItems: 'center'
                }}
            >
                <Typography
                    sx={{
                        fontSize: '2rem'
                    }}
                >
                    We take an enormous pride in creating our products, and hope that you'll find something in our selection that you like.
                </Typography>
                <Button
                    variant='contained'
                    size='large'
                    color='secondary'
                >
                    Check out all we offer!
                </Button>
            </Stack>
            <Box
                sx={{
                    alignItems: 'center',
                    width: '100%',
                    maxWidth: '500px',
                    aspectRatio: 1 / 1
                }}
            >
                <Typography>img list here</Typography>
            </Box>
        </Stack>
    )
}
