import React, { useState } from 'react'
import { AppBar, Toolbar, IconButton, Typography, Box, Button, Menu, MenuItem, Container } from '@mui/material'

import CakeIcon from '@mui/icons-material/Cake';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';

const pages = ['Products', 'Pricing', 'About', 'Testimonials', 'Contact']
const products = ['Truffles', 'Cakes', 'Cupcakes', 'Pies', 'Brownies', 'Coffeecake Bars', 'Cheescake Bars', 'Shortbread Bars', 'Cookies']

export const Navbar = () => {

    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElProducts, setAnchorElProducts] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElProducts(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElProducts(null);
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
                        }}
                    >
                        TRUFFLES bakery
                    </Typography>

                    {/* xs display only*/}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
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

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    )
}
