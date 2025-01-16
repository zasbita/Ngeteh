// This is only used for independent development of the microfrontend.

import { FunctionComponent } from "react";
import { Box, Typography, Paper, ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import App from "./App";

// Membuat tema Material-UI
const theme = createTheme({
  palette: {
    mode: "light", // Ganti dengan "dark" jika dibutuhkan
    primary: {
      main: "#1976d2", // Warna utama
    },
    secondary: {
      main: "#dc004e", // Warna sekunder
    },
  },
});

const PlaygroundContainer: FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box textAlign="center" sx={{ backgroundColor: "grey.300", minHeight: "100vh" }}>
        <Paper
          elevation={3}
          sx={{
            marginY: 5,
            padding: 4,
            display: "inline-block",
            backgroundColor: "grey.200",
            borderRadius: 2,
          }}
        >
          <Typography variant="body1">
            This is the isolated development playground for{" "}
            <Typography component="span" sx={{ fontFamily: "monospace", fontWeight: "bold" }}>
              mfe-todo-app
            </Typography>{" "}
            acting as the host app.
          </Typography>
          <Typography variant="body1">
            The JS bundle is available for consumption at{" "}
            <Typography component="span" sx={{ fontFamily: "monospace", fontWeight: "bold" }}>
              /remoteEntry.js
            </Typography>
          </Typography>
        </Paper>

        <Paper
          elevation={3}
          sx={{ backgroundColor: "white", borderRadius: 2, marginX: "300px", marginY: 5 }}
        >
          <App />
        </Paper>
      </Box>
    </ThemeProvider>
  );
};

export default PlaygroundContainer;
