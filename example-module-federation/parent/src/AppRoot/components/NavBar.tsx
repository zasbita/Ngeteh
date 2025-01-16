import { FunctionComponent, ReactElement } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Box, Stack, Link, Typography, Button } from "@mui/material";
import { useSessionStore } from "../../stores/sessionStore";

export const NavBar: FunctionComponent = (): ReactElement => {
  const navigate = useNavigate();
  const sessionStore = useSessionStore();

  const links = [
    { name: "Home", path: "/" },
    { name: "To-do app", path: "/to-do-app" },
  ];

  return (
    <Stack
      direction="column"
      justifyContent="space-between"
      sx={{
        width: 300,
        padding: 3,
        backgroundColor: "green",
        color: "white",
        borderRadius: 2,
      }}
    >
      <Box>
        <Typography
          variant="h5"
          component="div"
          align="center"
          sx={{ marginBottom: 4 }}
        >
          ✨ MF Demo ✨
        </Typography>
        {links.map((link) => (
          <Link
            key={link.path}
            component={RouterLink}
            to={link.path}
            sx={{
              display: "block",
              padding: 2,
              marginBottom: 2,
              borderRadius: 1,
              textDecoration: "none",
              color: "white",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
              },
            }}
          >
            {link.name}
          </Link>
        ))}
      </Box>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          sessionStore.clearToken();
          navigate("/");
        }}
        sx={{
          marginTop: 2,
          textTransform: "none",
          borderRadius: 1,
        }}
      >
        Log out
      </Button>
    </Stack>
  );
};
