import React from 'react'
import { Stack, Typography, Box, Button } from '@mui/material'

export const Informational = () => {
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
            <Box
                sx={{
                    alignItems: 'center',
                    width: '100%',
                    maxWidth: '500px',
                    aspectRatio: 1/1
                }}
            >
                <Typography>img list here</Typography>
            </Box>
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
                    Every day we provide customers with the best-quality products and personal service.
                </Typography>
                <Button
                    variant='contained'
                    size='large'
                    color='secondary'
                >
                    See what our customers say!
                </Button>
            </Stack>
        </Stack>
    )
}
