import { FunctionComponent, ReactElement, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import {
  LocalStorageSessionKeys,
  useSessionStore,
} from "../stores/sessionStore";

import { Box, CircularProgress, Typography, CssBaseline } from "@mui/material";
import { NavBar } from "./components/NavBar";
import { ProtectedRoute } from "./ProtectedRoute";
import { NotFound } from "./NotFound";

import { Home } from "./Home";
import { ToDoAppPage } from "./ToDoAppPage";
import { Login } from "./Login";

export const AppRoot: FunctionComponent = (): ReactElement => {
  const sessionStore = useSessionStore();
  const [appInitialised, setAppInitialised] = useState<boolean>(false);

  const initialiseApp = (): void => {
    if (sessionStore.token) {
      setAppInitialised(true);
      return;
    }

    const savedToken = localStorage.getItem(LocalStorageSessionKeys.userSessionToken);
    if (!savedToken) {
      setAppInitialised(true);
      return;
    }

    sessionStore.setToken(savedToken);
    setAppInitialised(true);
  };

  useEffect(() => {
    initialiseApp();
  }, []);

  return (
    <>
      <CssBaseline />
      {appInitialised ? (
        <Box
          sx={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "row",
            backgroundColor: "grey.200",
          }}
        >
          {sessionStore.token && <NavBar />}

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              padding: 2,
            }}
          >
            <Routes>
              <Route element={<ProtectedRoute />}>
                <Route index element={<Home />} />
                <Route path="to-do-app/*" element={<ToDoAppPage />} />
              </Route>
              <Route path="login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            flexDirection: "column",
          }}
        >
          <CircularProgress />
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            Loading...
          </Typography>
        </Box>
      )}
    </>
  );
};
