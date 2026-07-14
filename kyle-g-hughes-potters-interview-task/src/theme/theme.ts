import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#017BFF",
          border: "1px solid #fff",
          borderRadius: "4px",
          color: "#fff",
          fontSize: "16px",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#0169d9",
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        size: "small",
        fullWidth: true,
      },
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
          borderRadius: "4px",
        },
      },
    },
  },
});

export default theme;
