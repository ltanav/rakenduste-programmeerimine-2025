import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Home() {
  return (
    <Box sx={{ textAlign: "center", mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to the Cats app
      </Typography>
      <Typography variant="body1">
        Use the navigation to manage cats.
      </Typography>
    </Box>
  );
}
