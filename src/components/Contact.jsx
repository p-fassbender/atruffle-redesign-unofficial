import { Stack, Typography } from '@mui/material'
import React from 'react'
import { EmailForm } from './EmailForm'

export const Contact = () => {

    return (
        <Stack
            spacing={2}
            p={2}
            sx={{
                alignItems: 'center',
                minHeight: '100vh',
                bgcolor: 'primary.light',
            }}
        >
            <Typography>
                Contact
            </Typography>
            <EmailForm />
        </Stack>
    )
}
