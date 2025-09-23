import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useLocalStorage } from "../hooks/useLocalStorage";

export default function Home() {
  const [visitCount, setVisitCount] = useLocalStorage<number>("home-visits", 0);

  React.useEffect(() => {
    setVisitCount((prev) => prev + 1); 
  }, []);

  return (
    <Box sx={{ textAlign: "center", mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to the Home page
      </Typography>

      <Typography variant="body1" paragraph>
        You have visited this page {visitCount} {visitCount === 1 ? "time" : "times"}.
      </Typography>

      <Stack direction="row" spacing={2} justifyContent="center">
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
