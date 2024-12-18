import { Paper, Stack, Typography } from '@mui/material'
import React from 'react'

const reviews = [
    {
        message: `We custom ordered this sub sandwich cake for a 25 year work anniversary for a sales manager. We like to tease the manager that he always has the same thing for lunch everyday: a sub sandwich! When I reached out to truffles, they were more than happy to create this beautiful cake. They made the process super easy, and it looked as great as it tasted. Thank you for making this cake happen for our manager! Satisfaction cake, what can we say but... Yum, yum, yum!`,
        sender: '',
        date: ''
    },
    {
        message: `Just wanted to thank you again for the delicious & beautiful cakes you created for our wedding. Our photographer was able to take pictures before our guests dove in!`,
        sender: '',
        date: ''
    },
    {
        message: `Thank you so much for the suggestion of the wonderful cake for our party. It was fantastic! It was the best chocolate cake we've ever had. It was a joy to look at, a joy to serve, and we will definitely order it again for any party!`,
        sender: '',
        date: ''
    },
    {
        message: `Thank you for the wonderful cake. My daughter loved the decorations and the taste. She was thrilled with the birthday cake. Thanks for making her birthday extra special!`,
        sender: '',
        date: ''
    },
]

export const Testimonials = () => {
    return (
        <>
            <Stack
                spacing={2}
                p={2}
                sx={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                {
                    reviews.map((review) => (
                        <Paper
                            sx={{
                                p: '16px',
                                maxWidth: '500px',
                            }}
                        >
                            <Typography
                                variant='body1'
                                sx={{
                                    fontStyle: 'italic',
                                    fontWeight: 'bold'
                                }}
                            >
                                "{review.message}"
                            </Typography>
                            <Typography variant='caption'>
                                {review.sender ? review.sender : 'Anonymous'} {review.date ? review.date : ''}
                            </Typography>
                        </Paper>
                    ))
                }
            </Stack>
        </>
    )
}
