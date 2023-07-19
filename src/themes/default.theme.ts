import { createTheme } from "@mui/material";

const palette = {
    primary: {
        main: "#2881FF",
    },
    secondary: {
        main: "#F4F9FF",
    },
    font: {
        primary: "#878B95",
        white: "#FFFFFF",
        error: "#FFF1EE",
        warning: "#FEF5C5",
        sky: "#F2F5F6",
        info: "#ECF5FD",
        success: "#E6F9E7",
    },
};

const typography = {
    color: palette.font.primary,
    fontFamily: "Arimo",
    fontWeightRegular: 500,
    fontWeight: "regular",
    h1: {
        fontSize: "2rem",
        fontWeight: 500,
        color: palette.primary.main,
    },
    h3: {
        fontSize: "20px",
        color: palette.font.primary,
    },
};

const components = {
    MuiSelect: {
        styleOverrides: {
            root: {
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
                width: "180px",
            },
        },
    },
    MuiInput: {
        styleOverrides: {
            root: {
                ":hover:not(.Mui-disabled, .Mui-error):before": {
                    borderBottom: "2px dashed rgba(40, 129, 255, 0.7)",
                },
                ":before": {
                    borderBottom: "2px dashed rgba(0, 0, 0, 0.3)",
                },
                ":after": {
                    borderBottom: "2px dashed rgba(40, 129, 255, 0.7)",
                    transition: "none",
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
