import { Box, Card, CardContent, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import CurrencyDropdown from "./CurrencyDropdown";
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

export default function CurrencyConverter() {
    const [buyAmount, setBuyAmount] = React.useState<number>(1);
    const [sellAmount, setSellAmount] = React.useState<number>();
    const [buyCurrency, setBuyCurrency] = React.useState<string>("GBP");
    const [sellCurrency, setSellCurrency] = React.useState<string>();

    return (
        <Box>
            <Typography variant="h1">Currenvy Converter</Typography>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Stack direction="row" spacing={4} justifyContent="center" alignItems="center">
                        <Stack spacing={2} justifyContent="center" alignItems="center">
                            <Typography>Buy</Typography>
                            <TextField 
                                variant="standard" 
                                type="number"
                                value={buyAmount} 
                                inputProps={{min: 0, style: { textAlign: 'center' }}}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => 
                                    setBuyAmount(event.target.valueAsNumber)
                                } 
                            />
                            <CurrencyDropdown defaultCurrency={buyCurrency} selectedCurrency={(currency) => {setBuyCurrency(currency)}} />
                        </Stack>
                        <CurrencyExchangeIcon />
                        <Box>Item 3</Box>
                    </Stack>
                </CardContent>
            </Card>
        </Box>
    );
}