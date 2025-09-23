import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function About() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        About
      </Typography>

      <Typography variant="body1" paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel
        massa nec velit pharetra dictum. Praesent vel sapien vitae urna
        tincidunt lacinia.
      </Typography>

      <Box component="form" noValidate autoComplete="off" sx={{ mt: 2 }}>
        <Stack spacing={2}>
          <TextField label="Your name" variant="outlined" fullWidth />
          <TextField label="Email (optional)" variant="outlined" fullWidth />
          <TextField
            label="Short message"
            variant="outlined"
            multiline
            rows={3}
            fullWidth
          />
          <Stack direction="row" spacing={2}>
            <Button variant="contained">Submit</Button>
            <Button variant="outlined">Reset</Button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
