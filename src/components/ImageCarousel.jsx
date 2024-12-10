import React from 'react'
import Carousel from 'react-material-ui-carousel'

import giftPackageCake from '../assets/cake-aqua-brown-gift-package.png'
import babyBumCake from '../assets/cake-baby-bum.png'
import ivoryRoseCake from '../assets/cake-cream-and-ivory-rose.png'
import pearlsFlowerCake from '../assets/cake-pearls-and-flowers.png'
import confirmationCake from '../assets/cake-purple-confirmation.png'
import sweekSixteenCake from '../assets/cake-sweet-16.png'
import rosetteCake from '../assets/cake-tiered-white-rosette.png'
import { Box } from '@mui/material'

const carouselImages = [
    {
        src: giftPackageCake,
        alt: 'aqua, brown, and white colored, two-tiered cake shaped like gifts'
    },
    {
        src: babyBumCake,
        alt: 'light blue and white colored cake decorated with a bow and a fondant sculpture of a baby bum'
    },
    {
        src: ivoryRoseCake,
        alt: 'white and cream colored three-tiered cake decorated with cream colored roses and pearls'
    },
    {
        src: pearlsFlowerCake,
        alt: 'blue and pink colored, two-tiered cake decorated with multi-colored flowers, multi-colored rose blossoms, and white pearl necklace'
    },
    {
        src: confirmationCake,
        alt: 'white colored, two-tiered cake decorated with purple flowers'
    },
    {
        src: sweekSixteenCake,
        alt: 'white and pink colored, three uneven-tiered cake decorated with swirls'
    },
    {
        src: rosetteCake,
        alt: 'white colored, three-tiered cake fully covered with rosettes'
    },
]

export const ImageCarousel = () => {
    return (
        <Carousel
            navButtonsAlwaysInvisible
            interval={6000}
            animation='slide'
            duration={4000}
            indicators={false}
            sx={{
                width: '100%',
                maxWidth: '500px',
                aspectRatio: 1 / 1,
                borderRadius: '10px'
            }}
        >
            {
                carouselImages.map((image) => (
                    <Box
                        component={'img'}
                        key={image.src}
                        src={image.src}
                        alt={image.alt}
                        sx={{
                            width: '100%',
                            maxWidth: '500px',
                        }}
                    />
                ))
            }
        </Carousel>
    )
}
