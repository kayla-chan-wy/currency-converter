import { createTheme } from "@mui/material";

const palette = {
    primary: {
        main: "#884ffb",
    },
    secondary: {
        main: "#F4F9FF",
    },
    font: {
        primary: "#9b9aba",
        title: "#474d58",
        error: "#FFF1EE",
        warning: "#FEF5C5",
        sky: "#F2F5F6",
        info: "#ECF5FD",
        success: "#E6F9E7",
    },
};

const typography = {
    color: palette.font.primary,
    fontFamily: "Mulish",
    fontWeightRegular: 500,
    fontWeight: "regular",
    h1: {
        fontSize: "22px",
        fontWeight: 600,
        color: palette.font.title,
    },
    h3: {
        fontSize: "16px",
        fontWeight: 500,
        color: palette.font.primary,
        letterSpacing: "0.5px"
    },
};

const components = {
    MuiCard: {
        styleOverrides: {
            root: {
                boxShadow: "none",
                borderRadius: "16px",
            }
        }
    },
    MuiSelect: {
        styleOverrides: {
            root: {
                color: palette.font.title,
                ":hover:not(.Mui-disabled, .Mui-error):before": {
                    borderBottom: 0,
                },
                ":before, :after": {
                    borderBottom: 0,
                },
            },
            select: {
                minHeight: 0,
                ":focus": {
                    backgroundColor: "transparent",
                },
            },
        }
    },
    MuiInputBase: {
        styleOverrides: {
            input: {
                fontSize: "30px",
                width: "150px",
            },
        },
    },
    MuiInput: {
        styleOverrides: {
            root: {
                color: palette.font.title,
                ":hover:not(.Mui-disabled, .Mui-error):before": {
                    borderBottom: "2px dashed rgba(136, 79, 251, 0.7)",
                },
                ":before": {
                    borderBottom: `2px dashed ${palette.font.primary}`,
                },
                ":after": {
                    borderBottom: "2px dashed rgba(136, 79, 251, 0.7)",
                    transition: "none",
                },
                ":focus, :focus-within, :active, :target": {
                    color: palette.primary.main,
                },
            },
        },
    }
}

export const mdTheme = createTheme({
    palette,
    typography,
    components,
});
