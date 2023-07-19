import { Box, MenuItem, Select, SelectChangeEvent, Stack, Typography } from "@mui/material";
import React from "react";
import { AU, CA, CH, EU, GB, HK, JP, KR, NZ, US } from 'country-flag-icons/react/3x2'

interface CurrencyDropdownProps {
    defaultCurrency: string;
    selectedCurrency: (currency: string) => void;
}

export default function CurrencyDropdown({
    defaultCurrency,
    selectedCurrency,
}: CurrencyDropdownProps) {
    const currencies = [
        {
            code: "AUD",
            icon: <AU />,
        },
        {
            code: "CAD",
            icon: <CA />,
        },
        {
            code: "CHF",
            icon: <CH />,
        },
        {
            code: "EUR",
            icon: <EU />,
        },
        {
            code: "GBP",
            icon: <GB />,
        },
        {
            code: "HKD",
            icon: <HK />,
        },
        {
            code: "JPY",
            icon: <JP />,
        },
        {
            code: "KRW",
            icon: <KR />,
        },
        {
            code: "NZD",
            icon: <NZ />,
        },
        {
            code: "USD",
            icon: <US />,
        },
    ]

    return (
        <Select
            variant="standard"
            value={defaultCurrency}
            sx={{ width: "100px" }}
            onChange={(event: SelectChangeEvent) => {
                selectedCurrency(event.target.value);
            }}
        >
            {currencies.map(({ code, icon }) => (
                <MenuItem value={code}>
                    <Stack direction="row" spacing={1} justifyContent="center" alignItems="center">
                        <Box sx={{ display: "flex", width: "20px" }}>
                            {icon}
                        </Box>
                        <Typography fontSize="16px" fontWeight="600">{code}</Typography>
                    </Stack>
                </MenuItem>
            ))}
        </Select>
    );
}