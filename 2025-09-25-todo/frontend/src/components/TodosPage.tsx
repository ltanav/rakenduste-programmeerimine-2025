import React, { useState, useEffect } from "react";
import {
  fetchTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  type Todo,
} from "../api/todos";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export default function TodosPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingText, setEditingText] = useState("");

  const load = async () => {
    const data = await fetchTodos();
    setTodos(data);
  };

  useEffect(() => {
    load();
  }, []);

  const handleCreate = async () => {
    if (!text) return;
    await createTodo(text);
    setText("");
    load();
  };

  const startEdit = (t: Todo) => {
    setEditingId(t.id);
    setEditingText(t.text);
  };

  const saveEdit = async () => {
    if (!editingId) return;
    await updateTodo(editingId, editingText);
    setEditingId(null);
    setEditingText("");
    load();
  };

  const handleDelete = async (id: string) => {
    await deleteTodo(id);
    load();
  };

  return (
    <Container
      sx={{
        mt: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Paper sx={{ p: 4, width: "100%", maxWidth: 600 }}>
        <Typography variant="h5" gutterBottom align="center">
          TODO Management
        </Typography>

        <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
          <TextField
            label="New todo"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button variant="contained" onClick={handleCreate}>
            Add
          </Button>
        </Stack>

        <List>
          {todos.map((t) => (
            <ListItem
              key={t.id}
              secondaryAction={
                <Stack direction="row" spacing={1}>
                  {editingId === t.id ? (
                    <>
                      <Button variant="contained" onClick={saveEdit}>
                        Save
                      </Button>
                      <Button variant="outlined" onClick={() => setEditingId(null)}>
                        Cancel
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button variant="outlined" onClick={() => startEdit(t)}>
                        Edit
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => handleDelete(t.id)}
                      >
                        Delete
                      </Button>
                    </>
                  )}
                </Stack>
              }
            >
              {editingId === t.id ? (
                <TextField
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                />
              ) : (
                <ListItemText
                  primary={t.text}
                  secondary={`Created: ${new Date(t.createdAt).toLocaleString()}`}
                />
              )}
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
}
