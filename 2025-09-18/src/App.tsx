import React from "react";
import { Outlet, Link as RouterLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function App() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (val: boolean) => () => setOpen(val);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/something", label: "Something" },
  ];

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}>
      {/* AppBar */}
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My MUI App
          </Typography>

          {/* Top navigation buttons */}
          <Stack direction="row" spacing={1}>
            {navItems.map((item) => (
              <Button
                key={item.to}
                color="inherit"
                component={RouterLink}
                to={item.to}
              >
                {item.label}
              </Button>
            ))}
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile navigation */}
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 240 }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <List>
            {navItems.map((item) => (
              <ListItem
                button
                key={item.to}
                component={RouterLink}
                to={item.to}
              >
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Page content */}
      <Container maxWidth="md" sx={{ mt: 4, mb: 4, flexGrow: 1 }}>
        <Outlet />
      </Container>

      {/* Footer */}
      <Box
        component="footer"
        sx={{ py: 2, textAlign: "center", bgcolor: "background.paper" }}
      >
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Lisett-Marleen Foster
        </Typography>
      </Box>
    </Box>
  );
}
