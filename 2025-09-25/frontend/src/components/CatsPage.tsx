import React, { useEffect, useState } from "react";
import {
  fetchCats,
  createCat,
  updateCat,
  deleteCat,
  Cat,
} from "../api/cats";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";

export default function CatsPage() {
  const [cats, setCats] = useState<Cat[]>([]);
  const [name, setName] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingName, setEditingName] = useState("");

  const load = async () => {
    try {
      const data = await fetchCats();
      setCats(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const handleCreate = async () => {
    if (!name) return;
    await createCat(name);
    setName("");
    load();
  };

  const startEdit = (c: Cat) => {
    setEditingId(c.id);
    setEditingName(c.name);
  };

  const saveEdit = async () => {
    if (!editingId) return;
    await updateCat(editingId, editingName);
    setEditingId(null);
    setEditingName("");
    load();
  };

  const handleDelete = async (id: string) => {
    await deleteCat(id);
    load();
  };

  return (
    <Container sx={{ mt: 2 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Cats management
        </Typography>

        <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
          <TextField
            label="New cat name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button variant="contained" onClick={handleCreate}>
            Create
          </Button>
        </Stack>

        <List>
          {cats.map((c) => (
            <ListItem
              key={c.id}
              secondaryAction={
                <Stack direction="row" spacing={1}>
                  {editingId === c.id ? (
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
                      <Button variant="outlined" onClick={() => startEdit(c)}>
                        Edit
                      </Button>
                      <Button variant="contained" color="error" onClick={() => handleDelete(c.id)}>
                        Delete
                      </Button>
                    </>
                  )}
                </Stack>
              }
            >
              {editingId === c.id ? (
                <TextField value={editingName} onChange={(e) => setEditingName(e.target.value)} />
              ) : (
                <ListItemText primary={c.name} secondary={`Created: ${new Date(c.createdAt).toLocaleString()}`} />
              )}
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
}
