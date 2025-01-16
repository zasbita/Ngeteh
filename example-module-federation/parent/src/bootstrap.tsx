import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import { BrowserRouter } from "react-router-dom";

import { AppRoot } from "./AppRoot";

// Membuat tema Material-UI
const theme = createTheme({
  palette: {
    mode: "light", // Bisa diubah ke "dark" jika diperlukan
    primary: {
      main: "#1976d2", // Warna utama
    },
    secondary: {
      main: "#dc004e", // Warna sekunder
    },
  },
});

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <AppRoot />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
