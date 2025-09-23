import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";

export default function Something() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        minHeight: "100vh",
        p: 3,
        bgcolor: "#f9f9f9",
      }}
    >
      <Paper elevation={3} sx={{ p: 4, maxWidth: 600, width: "100%" }}>
        {/* Nimi */}
        <Typography variant="h4" gutterBottom align="center">
          Lisett-Marleen Foster
        </Typography>

        {/* Hobid ja huvid */}
        <Typography variant="h6" gutterBottom>
          Hobid ja huvid:
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Programmeermine" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Jalgrattasõit" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Muusika kuulamine" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Lugemine" />
          </ListItem>
        </List>

        {/* Kontaktvorm */}
        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
          Kontakt
        </Typography>
        <Box component="form" noValidate autoComplete="off">
          <Stack spacing={2}>
            <TextField
              label="E-mail"
              type="email"
              placeholder="Teie e-mail"
              fullWidth
            />
            <TextField
              label="Sõnum"
              placeholder="Kirjuta sõnum siia..."
              multiline
              rows={4}
              fullWidth
            />
            <Button variant="contained" color="primary" fullWidth>
              Saada
            </Button>
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
}
