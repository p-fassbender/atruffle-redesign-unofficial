import { FormControl, InputLabel, Stack, TextField, Typography, Button, Paper, Select, MenuItem, FormHelperText, Modal, Box } from '@mui/material'
import { MuiTelInput, matchIsValidTel } from 'mui-tel-input'
import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
/**
 * form built with react hook form
 * form for sending an email with emailjs
 * subject line is prefilled with dropbox
 * dropbox: place order, ask question, other
 * body default value set based on watching the subject line
 * body: name, phone, email, order details
 * Subject: Cake Order for [Event Name/Date]

Dear [Bakery Name] Team,

I hope this message finds you well! I would like to place an order for a cake to be prepared for a special occasion. Here are the details:

Cake Size: [Specify size, e.g., 8-inch, 10-inch, or specific number of servings]
Flavor: [Choose flavor(s), e.g., chocolate, vanilla, carrot cake, etc.]
Frosting: [Specify type of frosting, e.g., buttercream, cream cheese, fondant, etc.]
Design/Theme: [Describe any design or theme you'd like, e.g., floral, elegant, birthday, etc.]
Date of Event: [Provide the date the cake will be needed]
Pick-up or Delivery: [Specify if you will be picking up the cake or if you'd like it delivered, and the delivery address if applicable]
Additional Notes: [Any other special requests, e.g., dietary restrictions, allergies, or cake topper preferences]

I would appreciate it if you could confirm the availability of this cake and provide an estimated cost. Please let me know if you need any further information.

Thank you so much, and I look forward to hearing from you!

Best regards,
[Your Name]
[Your Contact Information]
 */

export const EmailForm = () => {
    const form = useForm({
        defaultValues: {
            emailTo: 'user983176@atruffle.com',
            subject: '',
            body: '',
            name: '',
            email: '',
            phone: "",
            currentDate: new Date().toLocaleDateString()
        },
        mode: 'onBlur'
    })
    const { register, handleSubmit, formState, control, getValues } = form
    const { errors } = formState

    const onSubmit = (data) => {
        console.log('form submitted', data)
    }

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false);

    return (
        <Paper sx={{ padding: '16px', width: '100%', maxWidth: '500px', boxSizing: 'border-box' }}>
            <Stack
                component={'form'}
                onSubmit={handleSubmit(onSubmit)}
                spacing={2}
            >
                <FormControl>
                    <InputLabel htmlFor="subject">Subject</InputLabel>
                    <Controller
                        control={control}
                        name="subject"
                        rules={{ required: 'Subject is required' }}
                        render={({ field }) => (
                            <Select
                                {...field}
                                id="subject"
                                label='Subject'
                            >
                                <MenuItem value={'Place Order'}>Place Order</MenuItem>
                                <MenuItem value={'Ask Question'}>Ask Question</MenuItem>
                                <MenuItem value={'Other'}>Other</MenuItem>
                            </Select>
                        )}
                    />
                    <FormHelperText error={true}>{errors.subject?.message}</FormHelperText>
                </FormControl>
                <TextField
                    label='Name'
                    variant='outlined'
                    {...register('name', {
                        required: 'Name is required'
                    })}
                    error={!!errors.name}
                    helperText={errors.name?.message}
                />
                <TextField
                    label='Email'
                    type='email'
                    variant='outlined'
                    {...register('email', {
                        pattern: {
                            value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                            message: 'Invalid email format'
                        },
                        required: 'Email is required'
                    })}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                />
                <Controller
                    name="phone"
                    control={control}
                    rules={{
                        validate: (value) => matchIsValidTel(value),
                    }}
                    render={({ field, fieldState }) => (
                        <MuiTelInput
                            {...field}
                            defaultCountry="US"
                            disableDropdown
                            forceCallingCode
                            label='Phone Number'
                            helperText={fieldState.invalid ? "Invalid telephone number" : ""}
                            error={fieldState.invalid}
                        />
                    )}
                />
                <TextField
                    label='Body'
                    variant='outlined'
                    multiline
                    rows={10}
                    {...register('body', {
                        required: 'A Message is required'
                    })}
                    error={!!errors.body}
                    helperText={errors.body?.message}
                />
                <Button disabled type='submit'>Submit</Button>
                <Button type='button' onClick={handleOpen}>Preview</Button>
            </Stack>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Paper
                    sx={{
                        padding: '16px',
                        width: '500px',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                    }}
                >
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Email Preview
                    </Typography>
                    <Box id="modal-modal-description" sx={{ mt: 2 }}>
                        <Typography>To: {getValues('emailTo')}</Typography>
                        <Typography>Subject: {getValues('subject')}</Typography>
                        <br />
                        <Typography>Dear Truffles Team,</Typography>
                        <Typography sx={{ whiteSpace: 'pre-line' }}>{getValues('body')}</Typography>
                        <br />
                        <Typography>Thank you,</Typography>
                        <Typography>{getValues('name')}</Typography>
                        <Typography>{getValues('email')}</Typography>
                        <Typography>{getValues('phone')}</Typography>
                    </Box>
                </Paper>
            </Modal>
        </Paper>
    )
}
