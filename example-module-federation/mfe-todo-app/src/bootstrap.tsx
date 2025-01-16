// This is only used for independent development of the microfrontend.

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import PlaygroundContainer from "./components/Playground";

// Membuat tema Material-UI
const theme = createTheme({
  palette: {
    mode: "light", // Bisa diubah menjadi "dark" jika dibutuhkan
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
      <PlaygroundContainer />
    </ThemeProvider>
  </StrictMode>
);
