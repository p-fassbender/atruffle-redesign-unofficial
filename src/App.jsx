import './App.css'

import { createTheme, ThemeProvider } from '@mui/material';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { Promotional } from './components/Promotional';
import { Informational } from './components/Informational';
import { Testimonials } from './components/Testimonials';
import { Truffles } from './components/Truffles';

const theme = createTheme({
    palette: {
        primary: {
            main: "#d3245c",
            lighter: '#e0668d'
        },
        secondary: {
            main: "#9900ff"
        }
    },
    typography: {
        logo: {
            fontFamily: 'JungleFever',
            fontSize: '2.17rem',
            letterSpacing: '.2rem',
        }
    },
    components: {
        MuiTypography: {
            defaultProps: {
                variantMapping: {
                    logo: 'h1',
                },
            },
        },
    }
})

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Navbar />
                <Hero />
                <Promotional />
                <Informational />
                <Footer />
                <Testimonials />
                <Truffles />
            </ThemeProvider>
        </>
    )
}

export default App
