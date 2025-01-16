import { FunctionComponent, ReactElement, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField, Typography, Stack } from "@mui/material";

import { useSessionStore } from "../../stores/sessionStore";

export const LoginForm: FunctionComponent = (): ReactElement => {
  const navigate = useNavigate();
  const sessionStore = useSessionStore();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    sessionStore.setToken("super-secret-token");
    navigate("/");
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        minWidth: 350,
        margin: "auto",
        padding: 4,
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: "#f9f9f9",
      }}
    >
      <Typography variant="h5" gutterBottom textAlign="center">
        Login
      </Typography>
      <Stack spacing={2}>
        <TextField
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleLogin}
          fullWidth
          sx={{
            padding: 1.5,
            fontWeight: "bold",
            textTransform: "none",
          }}
        >
          Login
        </Button>
      </Stack>
    </Box>
  );
};
