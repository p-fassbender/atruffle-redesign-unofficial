import './App.css'

import { createTheme, ThemeProvider } from '@mui/material';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';

const theme = createTheme({
    palette: {
        primary: {
            main: "#d3245c"
        },
        secondary: {
            main: "#9900ff"
        }
    },
    typography: {
        logo: {
            fontFamily: 'JungleFever',
            fontSize: '2.3rem',
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
            </ThemeProvider>
        </>
    )
}

export default App
