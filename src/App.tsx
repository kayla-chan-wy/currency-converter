import React from 'react';
import { Container, ThemeProvider } from '@mui/material';
import CurrencyConverter from './components/CurrencyConverter';
import { mdTheme } from './themes/default.theme';

function App() {
    return (
        <ThemeProvider theme={mdTheme}>
            <Container maxWidth="sm">
                <CurrencyConverter />
            </Container>
        </ThemeProvider>
    );
}

export default App;
