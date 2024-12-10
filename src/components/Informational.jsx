import React from 'react'
import { Stack, Typography, Box } from '@mui/material'

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
                <Typography variant='h4'>Welcome!</Typography>
                <Typography variant='body1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat laborum unde praesentium a tempore. Atque animi repellat veniam, perferendis repellendus adipisci. Alias eius aut quam impedit perspiciatis est repellendus molestiae!</Typography>
            </Stack>
        </Stack>
    )
}
