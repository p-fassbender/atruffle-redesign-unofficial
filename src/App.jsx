import { Route, Routes } from 'react-router'
import { createTheme, ThemeProvider } from '@mui/material';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Testimonials } from './components/Testimonials';
import { Truffles } from './components/Truffles';
import { CakesAndMore } from './components/CakesAndMore';
import { HomePage } from './components/HomePage';
import { About } from './components/About';

import './App.css'
import { Contact } from './components/Contact';
import { FourOFour } from './components/FourOFour';

const theme = createTheme({
    palette: {
        primary: {
            main: "#d3245c",
            lighter: '#e0668d',
            faint: '#eda7be'
        },
        secondary: {
            main: "#9900ff"
        }
    },
    typography: {
        logo: {
            fontFamily: 'JungleFever',
            fontSize: '2rem',
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
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='truffles' element={<Truffles />} />
                    <Route path='cakes-and-more' element={<CakesAndMore />} />
                    <Route path='about' element={<About />} />
                    <Route path='testimonials' element={<Testimonials />} />
                    <Route path='contact' element={<Contact/>}/>
                    <Route path='*' element={<FourOFour/>}/>
                </Routes>
                <Footer />
            </ThemeProvider>
        </>
    )
}

export default App
