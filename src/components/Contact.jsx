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
            <Stack spacing={2}>
                <Typography variant='h3'>
                    Contact
                </Typography>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    sx={{
                        justifyContent: 'space-around',
                        alignItems: 'center'
                    }}
                >
                    <Stack>
                        <Typography>Truffles</Typography>
                        <Typography>N112W15352 Mequon Rd</Typography>
                        <Typography>Germantown, WI 53022</Typography>
                    </Stack>
                    <Stack>
                        <Typography>Email: user983176@atruffle.com</Typography>
                        <Typography>Phone: (262) 251-4464</Typography>
                    </Stack>
                </Stack>
                <Typography>
                    Please place your order at least 4 business days in advance. Some orders may take less time, while others may take longer.
                    Be advised that the earlier you place your order, the better. To best serve you, we have deadlines throughout the year by which orders must be placed. All larger orders should be placed at least 2 weeks in advance.
                </Typography>
                <Typography>
                    All desserts are pick up only. <Typography component={'span'} sx={{ fontWeight: 'bold' }}>WE DO NOT DELIVER!</Typography>
                </Typography>
            </Stack>

            <EmailForm />
            <Typography>* Certain decorations may require more notice.</Typography>
            <Typography>** If we don't reach out back to you, please contact us to make sure we have confirmed your order.</Typography>
        </Stack>
    )
}
