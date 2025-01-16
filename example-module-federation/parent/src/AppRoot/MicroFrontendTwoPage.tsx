import { lazy, Suspense, FunctionComponent } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import "../assets/styles.css";

const MicroFrontendTwoLazy = lazy(() => import("subRoutingExample/app"));

export const MicroFrontendTwoPage: FunctionComponent = (): JSX.Element => {
  return (
    <Box
      sx={{
        textAlign: "center",
        padding: 2,
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          boxShadow: 3,
          borderRadius: 2,
          maxWidth: 800,
          width: "100%",
          margin: "16px",
          padding: 3,
        }}
      >
        <Suspense
          fallback={
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100px",
              }}
            >
              <CircularProgress />
              <Typography variant="body1" sx={{ marginTop: 2 }}>
                Loading...
              </Typography>
            </Box>
          }
        >
          <MicroFrontendTwoLazy />
        </Suspense>
      </Box>
    </Box>
  );
};
