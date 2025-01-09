import React from 'react'
import { Hero } from './Hero'
import { Informational } from './Informational'
import { Promotional } from './Promotional'

export const HomePage = () => {
    return (
        <>
            <Hero />
            <Promotional />
            <Informational />
        </>
    )
}
