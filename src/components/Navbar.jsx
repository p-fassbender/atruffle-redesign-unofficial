import React, { useState } from 'react'
import { AppBar, Toolbar, IconButton, Typography, Box, Button, Menu, MenuItem, Container } from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu';

const pages = ['Truffles', 'Cakes & More', 'About', 'Testimonials', 'Contact']

export const Navbar = () => {

    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position='static'>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant='logo'
                        component={'a'}
                        href='#'
                        sx={{
                            mr: 2,
                            display: 'flex',
                            color: 'inherit',
                            textDecoration: 'none',
                            flexGrow: { xs: 1, md: 0 }
                        }}
                    >
                        TRUFFLES bakery
                    </Typography>

                    {/* xs display only*/}
                    <Box sx={{ flexGrow: { xs: 0, md: 1 }, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="navigation menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>

                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/* md or larger display only */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button key={page} sx={{ my: 2, color: 'white' }}>{page}</Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
