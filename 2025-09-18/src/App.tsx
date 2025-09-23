import React from "react";
import { Outlet, Link as RouterLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

export default function App() {
  return (
    <>
      {/* AppBar navigeerimiseks */}
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={RouterLink} to="/">
            Home
          </Button>
          <Button color="inherit" component={RouterLink} to="/about">
            About
          </Button>
          <Button color="inherit" component={RouterLink} to="/something">
            Something
          </Button>
        </Toolbar>
      </AppBar>

      {/* Sisu ja logo */}
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <div>
          <a href="https://vite.dev" target="_blank" rel="noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>

        <Typography variant="h3" gutterBottom>
          Vite + React
        </Typography>

        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 4 }}>
          <Button variant="contained">MUI Nupp</Button>
        </Stack>

        {/* Alamkomponendid React Routeris renderdatakse siia */}
        <Outlet />
      </Box>
    </>
  );
}
