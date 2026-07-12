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
          backgroundColor: "#017bff",
          border: "1px solid #fff",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#0169d9",
          },
        },
      },
    },
  },
});

export default theme;
