"use client";

import { useState } from "react";
import { TextInput, Button, Textarea, Stack, Group } from "@mantine/core";
import { DateTimePicker } from "@mantine/dates";

export default function FormPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: new Date(),
    message: "",
  });

  const handleChange = (field: string, value: string | Date) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap="md" maw={400} mx="auto" mt="xl">
        <TextInput
          label="Eesnimi"
          placeholder="Sisesta eesnimi"
          required
          value={formData.firstName}
          onChange={(e) => handleChange("firstName", e.target.value)}
        />
        <TextInput
          label="Perekonnanimi"
          placeholder="Sisesta perekonnanimi"
          required
          value={formData.lastName}
          onChange={(e) => handleChange("lastName", e.target.value)}
        />
        <TextInput
          label="E-mail"
          type="email"
          placeholder="example@email.com"
          required
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />
        <TextInput
          label="Telefon"
          type="tel"
          placeholder="+372 5555 5555"
          value={formData.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
        />
        <DateTimePicker
          label="Kuupäev ja kellaaeg"
          value={formData.date}
          onChange={(value) => handleChange("date", value || new Date())}
        />
        <Textarea
          label="Lisainfo"
          placeholder="Kirjuta siia lisainfo"
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
        />
        <Group justify="flex-end">
          <Button type="submit">Saada</Button>
        </Group>
      </Stack>
    </form>
  );
}
