import React from "react";
import { Outlet, Link as RouterLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

export default function App() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Stack direction="row" spacing={2}>
            <Button color="inherit" component={RouterLink} to="/">
              Todos
            </Button>
           
          </Stack>
        </Toolbar>
      </AppBar>

      <Box sx={{ minHeight: "100vh", p: 3 }}>
        <Outlet />
      </Box>
    </>
  );
}
