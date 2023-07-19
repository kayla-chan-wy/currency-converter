import { createTheme } from "@mui/material";

const palette = {
    primary: {
        main: "#2881ff",
    },
    secondary: {
        main: "#f4f9ff",
    },
    font: {
        primary: "#c0b9cb",
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
    h2: {
        fontSize: "1.5rem",
        fontWeight: 500,
        color: palette.primary.main,
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
                // ":hover:not(.Mui-disabled, .Mui-error):before": {
                //     borderBottom: 0,
                // },
                ":before": {
                    borderBottom: "2px dashed rgba(0, 0, 0, 0.42)",
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
