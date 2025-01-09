import { Stack, Typography, Box } from '@mui/material'
import React from 'react'

export const About = () => {
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
            <Stack
                spacing={2}
                direction={'row'}
                sx={{
                    display: { xs: 'none', md: 'flex' },
                }}
            >
                <Stack p={2}>
                    <Typography variant='h3'>About Us</Typography>
                    <Typography>
                        At Truffles, we are proud to carry on a tradition that started as a small, mother-daughter bakery. Founded by my mother, our bakery was built on love, passion, and the joy of sharing delicious homemade treats with our community. After my mother passed away in 2009, I made the heartfelt decision to continue her legacy and keep our doors open, serving the same warm, welcoming atmosphere and high-quality baked goods.
                        <br></br>
                        <br></br>
                        We specialize in a wide variety of sweet treats, including cookies, brownies, bars, cupcakes, cakes, tortes, and cheesecakes. Whether you're craving something indulgent or looking for a lighter option, many of our baked goods can be made in low-fat versions to suit your needs. We also offer miniatures of many of our best-loved items, perfect for parties, events, and special occasions.
                        <br></br>
                        <br></br>
                        One of our proudest creations is our truffles—each one a bite-sized piece of chocolate bliss. Made with the finest bittersweet chocolate and complemented by rich cream, real butter, and pure flavorings, our truffles come in a variety of decadent varieties, including white and milk chocolate options, each crafted to perfection.
                        <br></br>
                        <br></br>
                        At Truffles, we believe in quality ingredients, timeless recipes, and creating treats that bring joy to every occasion. Thank you for supporting our family's business and allowing us to continue this sweet tradition.
                    </Typography>
                </Stack>
                <Box
                    component={'img'}
                    src={'https://placehold.co/500x700'}
                    alt={'portait photo of the owner of Truffles'}
                    loading='lazy'
                    sx={{
                        width: '500px',
                        maxWidth: '50%',
                        height: '100%'
                    }}
                />
            </Stack>

            <Stack
                spacing={2}
                sx={{
                    display: { xs: 'flex', md: 'none' },
                    alignItems: 'center'
                }}
            >
                <Box
                    component={'img'}
                    src={'https://placehold.co/500x700'}
                    alt={'portait photo of the owner of Truffles'}
                    loading='lazy'
                    sx={{
                        width: '100%',
                        maxWidth: '500px',
                    }}
                />
                <Stack p={2}>
                    <Typography variant='h3'>About Us</Typography>
                    <Typography>
                        At Truffles, we are proud to carry on a tradition that started as a small, mother-daughter bakery. Founded by my mother, our bakery was built on love, passion, and the joy of sharing delicious homemade treats with our community. After my mother passed away in 2009, I made the heartfelt decision to continue her legacy and keep our doors open, serving the same warm, welcoming atmosphere and high-quality baked goods.
                        <br></br>
                        <br></br>
                        We specialize in a wide variety of sweet treats, including cookies, brownies, bars, cupcakes, cakes, tortes, and cheesecakes. Whether you're craving something indulgent or looking for a lighter option, many of our baked goods can be made in low-fat versions to suit your needs. We also offer miniatures of many of our best-loved items, perfect for parties, events, and special occasions.
                        <br></br>
                        <br></br>
                        One of our proudest creations is our truffles—each one a bite-sized piece of chocolate bliss. Made with the finest bittersweet chocolate and complemented by rich cream, real butter, and pure flavorings, our truffles come in a variety of decadent varieties, including white and milk chocolate options, each crafted to perfection.
                        <br></br>
                        <br></br>
                        At Truffles, we believe in quality ingredients, timeless recipes, and creating treats that bring joy to every occasion. Thank you for supporting our family's business and allowing us to continue this sweet tradition.
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}
