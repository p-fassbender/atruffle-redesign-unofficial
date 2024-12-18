import React from 'react'
import { Stack, Box, Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const CakesAndMore = () => {
    return (
        <Stack spacing={2} p={2} sx={{ bgcolor: 'primary.main', color: 'white' }}>
            <Typography variant='h3'>
                Our Products
            </Typography>
            <Typography>Please be aware we do not copy others' work. We can use the same colors and shape, but not the decoration. This applies to both cakes and cookies.</Typography>
            <Typography>All cakes and pies are by order only.</Typography>
            <Box>
                <Accordion defaultExpanded sx={{ color: 'white' }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        sx={{ bgcolor: 'primary.light' }}
                    >
                        <Typography variant='h4'>Cakes</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ bgcolor: 'primary.lighter' }}>
                        <Stack spacing={2}>
                            <Stack>
                                <Typography variant='h5'>Flavors</Typography>
                                <Typography variant='body1'> White, Yellow Butter, Chocolate, Marble, Banana, Spice, Carrot, Caramel, Caramel Apple, Lemon, Orange, Key Lime, Pina Colada, Coconut, Red Velvet, Rum Raisin, Peanut Butter, Chocolate Peanut Butter, Pumpkin, Gingerbread, Irish Cream, Kahlua</Typography>
                            </Stack>
                            <Stack>
                                <Typography variant='h5'>Fillings</Typography>
                                <Typography>Buttercream: Vanilla, Chocolate, White Chocolate, Peanut Butter, Banana</Typography>
                                <Typography>Cream Cheese</Typography>
                                <Typography>Chocolate Ganache</Typography>
                                <Typography>Cookies & Cream: Chocolate, Vanilla</Typography>
                                <Typography>Fruit Purees: Raspberry, Strawberry, Blackberry, Cherry, Blueberry, Lemon, Lime, Pineapple, Apple</Typography>
                                <Typography>Mousse</Typography>
                            </Stack>
                            <Stack>
                                <Typography variant='h5'>Frostings</Typography>
                                <Typography>Buttercream or Light Whipped Buttercream: Vanilla, Chocolate, White Chocolate, Peanut Butter, Banana</Typography>
                                <Typography>Cream Cheese</Typography>
                                <Typography>Chocolate Ganache</Typography>
                            </Stack>
                            <Stack>
                                <Typography variant='h5'>Sizes</Typography>
                                <Typography>Round: 5" - 16"</Typography>
                                <Typography>1/4 Sheet (~20 servings)</Typography>
                                <Typography>1/2 Sheet (~40 servings)</Typography>
                                <Typography>3/4 Sheet (~60 servings)</Typography>
                                <Typography>Full Sheet (~80 servings)</Typography>
                            </Stack>
                            <Typography>Cakes can be ordered as single-layer, double-layer, or multi-tiered. Please be aware, tiered cakes may contain dowels to stabilize the cake. Each tier is on cardboard for easy cutting.</Typography>
                        </Stack>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ color: 'white' }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                        sx={{ bgcolor: 'primary.light' }}
                    >
                        <Typography variant='h4'>Cupcakes</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ bgcolor: 'primary.lighter' }}>
                        <Stack spacing={2}>
                            <Stack>
                                <Typography variant='h5'>Flavors</Typography>
                                <Typography variant='body1'> White, Yellow Butter, Chocolate, Marble, Banana, Spice, Carrot, Caramel, Caramel Apple, Lemon, Orange, Key Lime, Pina Colada, Coconut, Red Velvet, Rum Raisin, Peanut Butter, Chocolate Peanut Butter, Pumpkin, Gingerbread, Irish Cream, Kahlua</Typography>
                            </Stack>
                            <Stack>
                                <Typography variant='h5'>Frostings</Typography>
                                <Typography>Buttercream or Light Whipped Buttercream: Vanilla, Chocolate, White Chocolate, Peanut Butter, Banana</Typography>
                                <Typography>Cream Cheese</Typography>
                                <Typography>Chocolate Ganache</Typography>
                            </Stack>
                            <Stack>
                                <Typography variant='h5'>Sizes</Typography>
                                <Typography>Small (same size as grocery store)</Typography>
                                <Typography>Regular</Typography>
                                <Typography>Jumbo</Typography>
                            </Stack>
                        </Stack>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ color: 'white' }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3-content"
                        id="panel3-header"
                        sx={{ bgcolor: 'primary.light' }}
                    >
                        <Typography variant='h4'>Brownies</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ bgcolor: 'primary.lighter' }}>
                        <Stack spacing={2}>
                            <Stack>
                                <Typography variant='h5'>Flavors</Typography>
                                <Typography variant='body1'>Buttermilk, Caramel, Butterfinger, Cookies & Cream, Kahlua & Cream, Peanut Butter Fudge, Cherry Fudge, Cappuccino, White Chocolate</Typography>
                            </Stack>
                        </Stack>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ color: 'white' }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4-content"
                        id="panel4-header"
                        sx={{ bgcolor: 'primary.light' }}
                    >
                        <Typography variant='h4'>Coffeecake Bars</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ bgcolor: 'primary.lighter' }}>
                        <Stack spacing={2}>
                            <Stack>
                                <Typography variant='h5'>Flavors</Typography>
                                <Typography variant='body1'>Apple, Cherry, Blackberry, Rhubarb, Blueberry, Banana Peanut Butter</Typography>
                            </Stack>
                        </Stack>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ color: 'white' }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel5-content"
                        id="panel5-header"
                        sx={{ bgcolor: 'primary.light' }}
                    >
                        <Typography variant='h4'>Cheesecake Bars</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ bgcolor: 'primary.lighter' }}>
                        <Stack spacing={2}>
                            <Stack>
                                <Typography variant='h5'>Flavors</Typography>
                                <Typography variant='body1'>Vanilla, Chocolate, Rum Raisin, Caramel, Caramel Apple, Apple, Pina Colada, Key Lime, Candy Bar, Peanut Butter, Pb Cup, Choco Mint, Pumpkin, English Toffee, Pear Toffee, Cranberry</Typography>
                            </Stack>
                        </Stack>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ color: 'white' }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel6-content"
                        id="panel6-header"
                        sx={{ bgcolor: 'primary.light' }}
                    >
                        <Typography variant='h4'>Shortbread Bars</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ bgcolor: 'primary.lighter' }}>
                        <Stack spacing={2}>
                            <Stack>
                                <Typography variant='h5'>Flavors</Typography>
                                <Typography variant='body1'>Lemon, Key Lime, Blueberry, Raspberry, Cherry, Pina Colada</Typography>
                            </Stack>
                        </Stack>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ color: 'white' }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel7-content"
                        id="panel7-header"
                        sx={{ bgcolor: 'primary.light' }}
                    >
                        <Typography variant='h4'>Cookies</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ bgcolor: 'primary.lighter' }}>
                        <Stack spacing={2}>
                            <Stack>
                                <Typography variant='h5'>Flavors</Typography>
                                <Typography variant='body1'>Chocolate Chip, White Chocolate, Peanut Butter, Peanut Butter Choco Chunk, Oatmeal Raisin, Sugar, Apple Spice Dream, Chocolate Mint, Irish Cream, All-in-one, Coconut Cream, Cranberry White Chocolate, Chocolate Raspberry, Toffee, Butterscotch, Cinnamon, Malted Milk</Typography>
                            </Stack>
                            <Typography>Decorated cookies vary depending on decoration - we do all sorts of shapes and sizes as well.</Typography>
                        </Stack>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ color: 'white' }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel8-content"
                        id="panel8-header"
                        sx={{ bgcolor: 'primary.light' }}
                    >
                        <Typography variant='h4'>Pies</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ bgcolor: 'primary.lighter' }}>
                        <Stack spacing={2}>
                            <Stack>
                                <Typography variant='h5'>Flavors</Typography>
                                <Typography variant='body1'>Pumpkin, Pecan (Plain, Chocolate, and/or Bourbon), Cranberry, Apple, Cherry, Raspberry, Custard, Cream</Typography>
                            </Stack>
                            <Stack>
                                <Typography variant='h5'>Toppings</Typography>
                                <Typography variant='body1'>Crumb Topped, Double Crust</Typography>
                            </Stack>
                            <Typography>We can also do Custard and Cream Pies</Typography>
                        </Stack>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Stack>
    )
}
