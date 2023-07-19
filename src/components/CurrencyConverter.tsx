import { Box, Card, CardContent, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import CurrencyDropdown from "./CurrencyDropdown";
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

export default function CurrencyConverter() {
    const [buyAmount, setBuyAmount] = React.useState<number>(1000);
    const [sellAmount, setSellAmount] = React.useState<number>(0);
    const [buyCurrency, setBuyCurrency] = React.useState<string>("GBP");
    const [sellCurrency, setSellCurrency] = React.useState<string>("USD");
    const currencyDataLibrary = React.useRef<{[key: string]: {[key: string]: number}}>({});

    React.useEffect(() => {
        getAndSetNewSellAmount(buyCurrency, sellCurrency, buyAmount);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchCurrency = async (currency: string) => {
        currency = currency.toLowerCase();

        if (currencyDataLibrary.current[currency]) {
            return currencyDataLibrary.current[currency];
        }

        const response = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`);
        const data = await response.json();

        currencyDataLibrary.current[currency] = data[currency];
        return data[currency];
    };

    const getAndSetNewBuyAmount = async(buyCurrency: string, sellCurrency: string, sellAmount: number) => {
        const response = await fetchCurrency(buyCurrency);
        const buyToSellRatio = response?.[sellCurrency.toLowerCase()];
        const newBuyAmount = buyToSellRatio ? sellAmount / buyToSellRatio : 0;
        setBuyAmount(newBuyAmount);
    };

    const getAndSetNewSellAmount = async(buyCurrency: string, sellCurrency: string, buyAmount: number) => {
        const response = await fetchCurrency(buyCurrency);
        const buyToSellRatio = response?.[sellCurrency.toLowerCase()];
        const newSellAmount = buyToSellRatio ? buyAmount * buyToSellRatio : 0;
        setSellAmount(newSellAmount);
    };

    const handleBuyAmountChange = async(event: React.ChangeEvent<HTMLInputElement>) => {
        const newBuyAmount = event.target.valueAsNumber;
        setBuyAmount(newBuyAmount);
        getAndSetNewSellAmount(buyCurrency, sellCurrency, newBuyAmount);
    };

    const handleSellAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newSellAmount = event.target.valueAsNumber;
        setSellAmount(newSellAmount);
        getAndSetNewBuyAmount(buyCurrency, sellCurrency, newSellAmount);
    };

    const handleBuyCurrencyChange = async(currency: string) => {
        setBuyCurrency(currency);
        getAndSetNewSellAmount(currency, sellCurrency, buyAmount);
    };

    const handleSellCurrencyChange = async(currency: string) => {
        setSellCurrency(currency);
        getAndSetNewBuyAmount(buyCurrency, currency, sellAmount);
    };

    const switchCurrency = () => {
        const currentBuyCurrency = buyCurrency;
        const currentSellCurrency = sellCurrency;
        setBuyCurrency(currentSellCurrency);
        setSellCurrency(currentBuyCurrency);
        getAndSetNewSellAmount(currentSellCurrency, currentBuyCurrency, buyAmount);
    };

    return (
        <Box>
            <Typography variant="h1">Currency Converter</Typography>
            <Card sx={{ width: "550px", padding: "30px 0" }}>
                <CardContent>
                    <Stack direction="row" spacing={4} justifyContent="center" alignItems="center">
                        <Stack spacing={3} justifyContent="center" alignItems="center">
                            <Typography variant="h3">Buy</Typography>
                            <TextField 
                                variant="standard" 
                                type="number"
                                value={Number(buyAmount.toFixed(2))} 
                                inputProps={{min: 0, style: { textAlign: 'center' }}}
                                onChange={handleBuyAmountChange} 
                            />
                            <CurrencyDropdown defaultCurrency={buyCurrency} selectedCurrency={handleBuyCurrencyChange} />
                        </Stack>
                        <CurrencyExchangeIcon 
                            sx={{ 
                                cursor: "pointer",
                                color: "#9b9aba", 
                                fontSize: "28px", 
                                ":hover": {
                                    color: "#884ffb",
                                } 
                            }}
                            onClick={switchCurrency} 
                        />
                        <Stack spacing={3} justifyContent="center" alignItems="center">
                            <Typography variant="h3">Sell</Typography>
                            <TextField 
                                variant="standard" 
                                type="number"
                                value={Number(sellAmount.toFixed(2))} 
                                inputProps={{min: 0, style: { textAlign: 'center' }}}
                                onChange={handleSellAmountChange} 
                            />
                            <CurrencyDropdown defaultCurrency={sellCurrency} selectedCurrency={handleSellCurrencyChange} />
                        </Stack>
                    </Stack>
                </CardContent>
            </Card>
        </Box>
    );
}