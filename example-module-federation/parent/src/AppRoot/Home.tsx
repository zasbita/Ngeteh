import React, { FunctionComponent, ReactElement } from "react";
import {
  Box,
  Button,
  Typography,
  Tooltip,
  Link,
  Modal,
  Fade,
  Backdrop,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";

export const Home: FunctionComponent = (): ReactElement => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ padding: 8 }}>
      <Typography variant="h6">
        Welcome to the Webpack Module Federation demo!
      </Typography>
      <Typography variant="body1" sx={{ marginY: 2 }}>
        Edit <Box component="span" sx={{ fontFamily: "monospace" }}>src/pages/Home.tsx</Box> and save to reload.{" "}
        <Link
          href="https://mui.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "teal" }}
        >
          Learn Material-UI
        </Link>
      </Typography>

      <Tooltip title="This will open a modal" arrow>
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Click this button
        </Button>
      </Tooltip>

      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Card
            sx={{
              width: 400,
              margin: "auto",
              marginTop: "15%",
              outline: "none",
            }}
          >
            <CardContent>
              <Typography variant="h6" component="h2" gutterBottom>
                Example Modal
              </Typography>
              <Typography>
                Here&apos;s a Material-UI modal. You can close it by clicking
                "Close".
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                color="primary"
                onClick={handleClose}
                sx={{ marginRight: 2 }}
              >
                Close
              </Button>
              <Button variant="outlined" color="secondary">
                Secondary Action
              </Button>
            </CardActions>
          </Card>
        </Fade>
      </Modal>
    </Box>
  );
};
