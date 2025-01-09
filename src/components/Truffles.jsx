import React from 'react'
import { ImageList, ImageListItem, ImageListItemBar, List, ListItem, ListItemText, Stack, Typography, ListSubheader } from '@mui/material'

import bananaTruffle from '../assets/truffles-images/truffle-banana.png'
import blackberryTruffle from '../assets/truffles-images/truffle-blackberry.png'
import blueberryTruffle from '../assets/truffles-images/truffle-blueberry.png'
import butterscotchTruffle from '../assets/truffles-images/truffle-butterscotch.png'
import cappuccinoTruffle from '../assets/truffles-images/truffle-cappuccino.png'
import caramelTruffle from '../assets/truffles-images/truffle-caramel.png'
import grandMarnierTruffle from '../assets/truffles-images/truffle-grand-marnier.png'
import grasshopperTruffle from '../assets/truffles-images/truffle-grasshopper.png'
import hazelnutTruffle from '../assets/truffles-images/truffle-hazelnut.png'
import irishCreamTruffle from '../assets/truffles-images/truffle-irish-cream.png'
import kahluaTruffle from '../assets/truffles-images/truffle-kahlua.png'
import mapleTruffle from '../assets/truffles-images/truffle-maple.png'
import pralinesAndCreamTruffle from '../assets/truffles-images/truffle-pralines-n-cream.png'
import raspberryTruffle from '../assets/truffles-images/truffle-raspberry.png'
import strawberryTruffle from '../assets/truffles-images/truffle-strawberry.png'
import swissTruffle from '../assets/truffles-images/truffle-swiss.png'
import whiteChocolateTruffle from '../assets/truffles-images/truffle-white-chocolate.png'

const truffleImages = [
    {
        title: 'Banana',
        src: bananaTruffle,
        alt: 'banana truffle'
    },
    {
        title: 'Blackberry',
        src: blackberryTruffle,
        alt: 'blackberry truffle'
    },
    {
        title: 'Blueberry',
        src: blueberryTruffle,
        alt: 'blueberry truffle'
    },
    {
        title: 'Butterscotch',
        src: butterscotchTruffle,
        alt: 'butterscotch truffle'
    },
    {
        title: 'Cappuccino',
        src: cappuccinoTruffle,
        alt: 'cappuccino truffle'
    },
    {
        title: 'Caramel',
        src: caramelTruffle,
        alt: 'caramel truffle'
    },
    {
        title: 'Grand Marnier',
        src: grandMarnierTruffle,
        alt: 'grand marnier truffle'
    },
    {
        title: 'Grasshopper',
        src: grasshopperTruffle,
        alt: 'grasshopper truffle'
    },
    {
        title: 'Hazelnut',
        src: hazelnutTruffle,
        alt: 'hazelnut'
    },
    {
        title: 'Irish Cream',
        src: irishCreamTruffle,
        alt: 'irish cream truffle'
    },
    {
        title: 'Kahlua',
        src: kahluaTruffle,
        alt: 'kahlua truffle'
    },
    {
        title: 'Maple',
        src: mapleTruffle,
        alt: 'maple truffle'
    },
    {
        title: 'Pralines & Cream',
        src: pralinesAndCreamTruffle,
        alt: 'pralines and cream truffle'
    },
    {
        title: 'Raspberry',
        src: raspberryTruffle,
        alt: 'raspberry truffle'
    },
    {
        title: 'Strawberry',
        src: strawberryTruffle,
        alt: 'strawberry truffle'
    },
    {
        title: 'Swiss',
        src: swissTruffle,
        alt: 'swiss truffle'
    },
    {
        title: 'White Chocolate',
        src: whiteChocolateTruffle,
        alt: 'white chocolate truffle'
    }
]

const additionalFlavors = [
    'Amaretto',
    'Apple',
    'Butter Rum',
    'Champagne',
    'Coconut',
    'Drambuie',
    'Pina Colada',
    'Cran-Raspberry',
    'Key Lime',
    'Watermelon',
    'Apple Pie',
    'Pumpkin',
    'Cranberry',
    'Eggnog'
]

export const Truffles = () => {
    return (
        <Stack
            spacing={2}
            p={2}
            sx={{
                alignItems: 'center',
                minHeight: '100vh',
                bgcolor: 'primary.light'
            }}
        >
            <Typography variant='h3'>
                Our Truffles
            </Typography>
            <Typography>
                Most truffles are made with dark chocolate. Milk chocolate and several white chocolate options are also available.
            </Typography>

            <ImageList cols={2} sx={{ display: { xs: 'grid', sm: 'none', md: 'none' }, bgcolor: 'primary.light' }}>
                <ImageListItem key="Subheader" cols={2}>
                    <ListSubheader component="div">Decorations on truffles may vary</ListSubheader>
                </ImageListItem>
                {
                    truffleImages.map((image) => (
                        <ImageListItem key={image.src}>
                            <img src={image.src} alt={image.alt} loading='lazy' />
                            <ImageListItemBar title={image.title} />
                        </ImageListItem>
                    ))
                }
            </ImageList>
            <ImageList cols={3} sx={{ display: { xs: 'none', sm: 'grid', md: 'none' } }}>
                <ImageListItem key="Subheader" cols={3}>
                    <ListSubheader component="div">Decorations on truffles may vary</ListSubheader>
                </ImageListItem>
                {
                    truffleImages.map((image) => (
                        <ImageListItem key={image.src}>
                            <img src={image.src} alt={image.alt} loading='lazy' />
                            <ImageListItemBar title={image.title} />
                        </ImageListItem>
                    ))
                }
            </ImageList>
            <ImageList cols={4} sx={{ display: { xs: 'none', sm: 'none', md: 'grid' } }}>
                <ImageListItem key="Subheader" cols={4}>
                    <ListSubheader component="div">Decorations on truffles may vary</ListSubheader>
                </ImageListItem>
                {
                    truffleImages.map((image) => (
                        <ImageListItem key={image.src}>
                            <img src={image.src} alt={image.alt} loading='lazy' />
                            <ImageListItemBar title={image.title} />
                        </ImageListItem>
                    ))
                }
            </ImageList>

            <Typography variant='h4'>
                Additional flavors not pictured:
            </Typography>
            <List component={Stack} direction={'row'} sx={{ flexWrap: 'wrap', justifyContent: 'center', maxWidth: '80%' }}>
                {
                    additionalFlavors.map((flavor) => (
                        <ListItem key={flavor} sx={{ width: 'auto' }}>
                            <ListItemText primary={flavor} />
                        </ListItem>
                    ))
                }
            </List>
        </Stack>
    )
}
