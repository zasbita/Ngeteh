// This is the microfrontend entry point. Must export the component as default.

import { FunctionComponent } from "react";
import { Box, Typography, ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import ToDoList from "./ToDoList";

// Membuat tema Material-UI
const theme = createTheme({
  palette: {
    mode: "light", // Anda bisa mengganti ke "dark" jika dibutuhkan
    primary: {
      main: "#1976d2", // Warna utama
    },
    secondary: {
      main: "#dc004e", // Warna sekunder
    },
  },
});

const App: FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ padding: 5 }}>
        <Typography variant="h6">To-Do List</Typography>
        <ToDoList />
      </Box>
    </ThemeProvider>
  );
};

export default App;
