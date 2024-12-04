import './App.css'

import { createTheme, colors, ThemeProvider } from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: "#d3245c"
        },
        secondary: {
            main: "#9900ff"
        }
    }
})

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
            </ThemeProvider>
        </>
    )
}

export default App
