import React from 'react'
import { Stack, Typography, Box, Button, ImageList, ImageListItem } from '@mui/material'

import flowerCrossCake from '../assets/info-images/cake-flower-bouquet-cross.png'
import holyBookCake from '../assets/info-images/cake-holy-cross-open-book.png'
import pinkBowCake from '../assets/info-images/cake-pink-gift-bow.png'
import pinkWhiteCelebrationCake from '../assets/info-images/cake-pink-white-celebration.png'
import rubiksCubeCake from '../assets/info-images/cake-rubiks-cube.png'
import silverPinkCake from '../assets/info-images/cake-silver-pink.png'
import snowmanCake from '../assets/info-images/cake-snowman.png'
import trollsCake from '../assets/info-images/cake-trolls-and-creatures.png'

const infoImages = [
    {
        src: flowerCrossCake,
        alt: 'white sheet cake shaped like a cross decorated with a blue bouquet'
    },
    {
        src: holyBookCake,
        alt: 'white sheet cake frosted to look like an open book with a cross on one page and bible verse on the other'
    },
    {
        src: pinkBowCake,
        alt: 'brown circle cake with a big pink bow on top'
    },
    {
        src: pinkWhiteCelebrationCake,
        alt: 'white and pink colored three tier cake decorated with stripes, swirls, and polka dots'
    },
    {
        src: rubiksCubeCake,
        alt: 'three layer cake colored like a rubiks cube'
    },
    {
        src: silverPinkCake,
        alt: ''
    },
    {
        src: snowmanCake,
        alt: 'cake frosted to look like a snowman'
    },
    {
        src: trollsCake,
        alt: 'brown circle cake frosted to look like a stump topped with trolls toys'
    }
]

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
                        infoImages.map((image) => (
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
                    Every day we provide customers with the best-quality products and personal service.
                </Typography>
                <Button
                    variant='contained'
                    size='large'
                    color='secondary'
                >
                    See what our customers say!
                </Button>
            </Stack>
        </Stack>
    )
}
