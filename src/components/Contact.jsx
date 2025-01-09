import { Stack, Typography } from '@mui/material'
import React from 'react'

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
                form built with react hook form
                form for sending an email with emailjs
                subject line is prefilled with dropbox
                    dropbox: place order, ask question, other
                body default value set based on watching the subject line
                    body: name, phone, email, order details
            </Typography>
        </Stack>
    )
}
