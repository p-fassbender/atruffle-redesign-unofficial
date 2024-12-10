import { Divider, Stack, TableContainer, Table, TableHead, TableBody, TableCell, TableRow, Typography } from '@mui/material'
import React from 'react'

export const Footer = () => {
    return (
        <Stack
            component={'footer'}
            direction={{ xs: 'column', md: 'row' }}
            spacing={2}
            p={2}
            sx={{
                justifyContent: 'space-around',
                alignItems: 'center'
            }}
        >
            <Stack
                spacing={2}
                sx={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Typography variant='logo'>
                    TRUFFLES
                </Typography>
            </Stack>

            <Divider variant='middle' orientation='vertical' flexItem sx={{ display: { xs: 'none', md: 'flex' } }} />
            <Divider variant='middle' orientation='horizontal' flexItem sx={{ display: { xs: 'flex', md: 'none' } }} />

            <TableContainer sx={{ maxWidth: '300px' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align='center' colSpan={2}>Hours</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Monday</TableCell>
                            <TableCell align='right'>Closed</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Tuesday - Friday</TableCell>
                            <TableCell align='right'>7:00AM - 5:00PM</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Saturday</TableCell>
                            <TableCell align='right'>8:00AM - 12:00PM</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Sunday</TableCell>
                            <TableCell align='right'>Closed</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

            <Divider variant='middle' orientation='vertical' flexItem sx={{ display: { xs: 'none', md: 'flex' } }} />
            <Divider variant='middle' orientation='horizontal' flexItem sx={{ display: { xs: 'flex', md: 'none' } }} />

            <Stack
                spacing={2}
                sx={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Typography>Truffles</Typography>
                <Typography>N112W15352 Mequon Rd</Typography>
                <Typography>Germantown, WI 53022</Typography>
                <Typography>Email: user983176@atruffle.com</Typography>
                <Typography>Phone: (262) 251-4464</Typography>
            </Stack>
        </Stack>
    )
}
