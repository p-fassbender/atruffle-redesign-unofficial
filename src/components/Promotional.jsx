import React from 'react'
import { Stack, Typography, Box, Button, ImageList, ImageListItem } from '@mui/material'

import gumballMachineCake from '../assets/promo-images/cake-gumball-machine.png'
import llamaCake from '../assets/promo-images/cake-llama.png'
import spiltWineCake from '../assets/promo-images/cake-spilt-wine.png'
import sportyCupcakes from '../assets/promo-images/cupcakes-sporty.png'
import dessertTray from '../assets/promo-images/dessert-tray.png'
import freshFruitTart from '../assets/promo-images/tart-fresh-fruit.png'
import cherryTruffle from '../assets/promo-images/truffle-cherry.png'

const promoImages = [
    {
        src: gumballMachineCake,
        alt: 'red and white gumball machine shaped cake with multicolored gumballs'
    },
    {
        src: llamaCake,
        alt: 'pink cake decorated with frosting to look like a fuzzy llama with cute llama face'
    },
    {
        src: spiltWineCake,
        alt: 'white and dark red cake decorated with grapes and tipped over wine glass. the frosting represents spilt wine'
    },
    {
        src: sportyCupcakes,
        alt: 'tray of multiple green frosted cupcakes decorated with different sports balls and equipment'
    },
    {
        src: dessertTray,
        alt: 'circle assortment of various bars and truffles'
    },
    {
        src: freshFruitTart,
        alt: 'tart loaded with strawberries, kiwi, and raspberries on top'
    },
    {
        src: cherryTruffle,
        alt: 'truffle ball with bright red drizzle and white sprinkles'
    }
]

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
                    width: '100%',
                    maxWidth: '500px',
                    aspectRatio: 1 / 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <ImageList variant="masonry" cols={3} gap={8}>
                    {
                        promoImages.map((image) => (
                            <ImageListItem key={image.src}>
                                <img
                                    src={image.src}
                                    alt={image.title}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))
                    }
                </ImageList>
            </Box>
        </Stack>
    )
}
