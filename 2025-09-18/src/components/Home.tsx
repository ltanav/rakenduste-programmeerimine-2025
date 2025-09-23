import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function Home() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Welcome to the Home page
      </Typography>

      <Typography variant="body1" paragraph>
        This is a sample homepage built with MUI components. Use the navigation to open other pages.
      </Typography>

      <Stack direction="row" spacing={2}>
        <Button variant="contained" component={RouterLink} to="/about">
          Go to About
        </Button>
        <Button variant="outlined" component={RouterLink} to="/something">
          View Something
        </Button>
      </Stack>
    </Box>
  );
}
