import React from "react";
import { Outlet, Link as RouterLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

export default function App() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Stack direction="row" spacing={2}>
            <Button color="inherit" component={RouterLink} to="/">
              Home
            </Button>
            <Button color="inherit" component={RouterLink} to="/about">
              About
            </Button>
            <Button color="inherit" component={RouterLink} to="/cats">
              Cats
            </Button>
            <Button color="inherit" component={RouterLink} to="/something">
              Something
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>

      <Box sx={{ p: 3 }}>
        <Typography variant="h3" align="center" gutterBottom>
          My MUI Cats App
        </Typography>

        <Outlet />
      </Box>
    </>
  );
}
