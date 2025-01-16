import { lazy, Suspense, FunctionComponent } from "react";
import { Box, Typography, CircularProgress } from "@mui/material";
import "../assets/styles.css";

const ToDoAppLazy = lazy(() => import("toDoApp/app"));

export const ToDoAppPage: FunctionComponent = (): JSX.Element => {
  return (
    <Box
      sx={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 3,
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          boxShadow: 3,
          borderRadius: 2,
          width: "80%",
          maxWidth: 600,
          marginTop: 5,
          marginBottom: 5,
          padding: 2,
        }}
      >
        <Suspense
          fallback={
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 200,
              }}
            >
              <CircularProgress />
              <Typography variant="body1" sx={{ marginLeft: 2 }}>
                Loading...
              </Typography>
            </Box>
          }
        >
          <ToDoAppLazy />
        </Suspense>
      </Box>
    </Box>
  );
};
