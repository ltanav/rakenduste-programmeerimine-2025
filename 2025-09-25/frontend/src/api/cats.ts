const BASE = "http://localhost:3001";

export interface Cat {
  id: string;
  name: string;
  createdAt: number;
  updatedAt: number | null;
  deleted: boolean;
}

export async function fetchCats(): Promise<Cat[]> {
  const res = await fetch(`${BASE}/cats`);
  if (!res.ok) throw new Error("Failed to fetch cats");
  return res.json();
}

export async function createCat(name: string): Promise<Cat> {
  const res = await fetch(`${BASE}/cats`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  });
  if (!res.ok) throw new Error("Failed to create cat");
  return res.json();
}

export async function updateCat(id: string, name: string): Promise<Cat> {
  const res = await fetch(`${BASE}/cats/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  });
  if (!res.ok) throw new Error("Failed to update cat");
  return res.json();
}

export async function deleteCat(id: string): Promise<any> {
  const res = await fetch(`${BASE}/cats/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete cat");
  return res.json();
}
