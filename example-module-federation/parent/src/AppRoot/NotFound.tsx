import { FunctionComponent, ReactElement } from "react";
import { Box, Typography } from "@mui/material";

export const NotFound: FunctionComponent = (): ReactElement => {
  return (
    <Box
      sx={{
        textAlign: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 3,
      }}
    >
      <Typography variant="h1" color="error" gutterBottom>
        404
      </Typography>
      <Typography variant="h6" color="textSecondary">
        Page not found.
      </Typography>
    </Box>
  );
};
