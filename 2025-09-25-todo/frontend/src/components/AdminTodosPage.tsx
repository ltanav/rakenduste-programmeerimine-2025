import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

type Todo = {
  id: string;
  text: string;
  createdAt: number;
  deleted: boolean;
};

export default function AdminTodosPage() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const load = async () => {
    const res = await fetch("http://localhost:3001/admin/todos");
    const data = await res.json();
    setTodos(data);
  };

  const toggle = async (id: string) => {
    await fetch(`http://localhost:3001/admin/todos/${id}/toggle`, {
      method: "PATCH",
    });
    load();
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <Container sx={{ mt: 4 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom align="center">
          Admin TODO Panel
        </Typography>

        <List>
          {todos.map((t) => (
            <ListItem
              key={t.id}
              secondaryAction={
                <Button variant="contained" onClick={() => toggle(t.id)}>
                  Toggle Deleted
                </Button>
              }
            >
              <ListItemText
                primary={t.text}
                secondary={`Deleted: ${t.deleted}`}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
}
