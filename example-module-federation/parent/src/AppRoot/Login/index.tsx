import { FunctionComponent, ReactElement } from "react";
import { Box, Container, Typography, Stack } from "@mui/material";

import { LoginForm } from "./LoginForm";

export const Login: FunctionComponent = (): ReactElement => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: 4,
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          width: "100%",
          padding: 3,
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: "#ffffff",
        }}
      >
        <Stack spacing={2}>
          <Typography variant="h4" textAlign="center" gutterBottom>
            Welcome!
          </Typography>
          <LoginForm />
        </Stack>
      </Box>
    </Container>
  );
};
