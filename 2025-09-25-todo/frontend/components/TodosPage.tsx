import React, { useEffect, useState } from "react";
import { fetchTodos, createTodo, updateTodo, deleteTodo, Todo } from "../api/todos";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";

export default function TodosPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [task, setTask] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingTask, setEditingTask] = useState("");

  const load = async () => {
    const data = await fetchTodos();
    setTodos(data);
  };

  useEffect(() => {
    load();
  }, []);

  const handleCreate = async () => {
    if (!task) return;
    await createTodo(task);
    setTask("");
    load();
  };

  const startEdit = (t: Todo) => {
    setEditingId(t.id);
    setEditingTask(t.task);
  };

  const saveEdit = async () => {
    if (!editingId) return;
    await updateTodo(editingId, { task: editingTask });
    setEditingId(null);
    setEditingTask("");
    load();
  };

  const handleDelete = async (id: string) => {
    await deleteTodo(id);
    load();
  };

  return (
    <Container sx={{ mt: 4, display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Paper sx={{ p: 4, width: "100%", maxWidth: 600 }}>
        <Typography variant="h5" gutterBottom align="center">
          TODO Management
        </Typography>

        <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
          <TextField label="New task" value={task} onChange={(e) => setTask(e.target.value)} fullWidth />
          <Button variant="contained" onClick={handleCreate}>Create</Button>
        </Stack>

        <List>
          {todos.map((t) => (
            <ListItem
              key={t.id}
              secondaryAction={
                <Stack direction="row" spacing={1}>
                  {editingId === t.id ? (
                    <>
                      <Button variant="contained" onClick={saveEdit}>Save</Button>
                      <Button variant="outlined" onClick={() => setEditingId(null)}>Cancel</Button>
                    </>
                  ) : (
                    <>
                      <Button variant="outlined" onClick={() => startEdit(t)}>Edit</Button>
                      <Button variant="contained" color="error" onClick={() => handleDelete(t.id)}>Delete</Button>
                    </>
                  )}
                </Stack>
              }
            >
              {editingId === t.id ? (
                <TextField value={editingTask} onChange={(e) => setEditingTask(e.target.value)} fullWidth />
              ) : (
                <ListItemText primary={t.task} secondary={`Completed: ${t.completed ? "Yes" : "No"}`} />
              )}
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
}
