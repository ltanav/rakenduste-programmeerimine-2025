'use client';

import React, { useState } from 'react';
import {
  TextInput,
  Textarea,
  Button,
  Group,
  Box,
  Notification,
} from '@mantine/core';
import { DateTimePicker } from '@mantine/dates';
import {
  emailRegex,
  phoneRegex,
  postalCodeRegex,
  dateRegex,
} from '@/utils/regex';

type FormState = {
  eesnimi: string;
  perenimi: string;
  email: string;
  telefon: string;
  aeg: Date | null;
  tekst: string;
  postiindeks?: string;
};

export default function FormPage() {
  const [form, setForm] = useState<FormState>({
    eesnimi: '',
    perenimi: '',
    email: '',
    telefon: '',
    aeg: new Date(),
    tekst: '',
    postiindeks: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof FormState, value: any) =>
    setForm(prev => ({ ...prev, [field]: value }));

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.eesnimi) e.eesnimi = 'Eesnimi on nõutud';
    if (!form.perenimi) e.perenimi = 'Perekonnanimi on nõutud';
    if (!emailRegex.test(form.email)) e.email = 'Kehtiv e-posti aadress on nõutud';
    if (!phoneRegex.test(form.telefon)) e.telefon = 'Kehtiv telefoninumber on nõutud';
    if (!form.aeg) e.aeg = 'Kuupäev ja kellaaeg on nõutud';
    if (form.postiindeks && !postalCodeRegex.test(form.postiindeks))
      e.postiindeks = 'Postiindeks peab olema 5 numbrit (näide: 12345)';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev?: React.FormEvent) => {
    ev?.preventDefault();
    if (!validate()) return;
    
    console.log('Vormi andmed:', { ...form, aeg: form.aeg?.toISOString() });
    setSubmitted(true);

  };

  return (
    <Box maw={680} mx="auto" mt="xl" p="md">
      <form onSubmit={handleSubmit}>
        <TextInput
          label="Eesnimi"
          required
          value={form.eesnimi}
          onChange={(e) => handleChange('eesnimi', e.currentTarget.value)}
          error={errors.eesnimi}
        />
        <TextInput
          label="Perekonnanimi"
          required
          value={form.perenimi}
          onChange={(e) => handleChange('perenimi', e.currentTarget.value)}
          mt="sm"
          error={errors.perenimi}
        />
        <TextInput
          label="E-mail"
          placeholder="nimi@etsi.ee"
          required
          value={form.email}
          onChange={(e) => handleChange('email', e.currentTarget.value)}
          mt="sm"
          error={errors.email}
        />
        <TextInput
          label="Telefoni number"
          placeholder="+372 5xx xxxx"
          required
          value={form.telefon}
          onChange={(e) => handleChange('telefon', e.currentTarget.value)}
          mt="sm"
          error={errors.telefon}
        />
        <TextInput
          label="Postiindeks (valikuline)"
          placeholder="12345"
          value={form.postiindeks}
          onChange={(e) => handleChange('postiindeks', e.currentTarget.value)}
          mt="sm"
          error={errors.postiindeks}
        />
        <DateTimePicker
          label="Kuupäev ja kellaaeg"
          value={form.aeg}
          onChange={(val) => handleChange('aeg', val)}
          mt="sm"
        />
        <Textarea
          label="Tekst"
          placeholder="Lisa vaba vormi tekst..."
          value={form.tekst}
          onChange={(e) => handleChange('tekst', e.currentTarget.value)}
          mt="sm"
        />

        <Group position="center" mt="md">
          <Button type="submit">Saada</Button>
        </Group>
      </form>

      {submitted && (
        <Notification mt="md" onClose={() => setSubmitted(false)}>
          Vorm edukalt esitatud.
        </Notification>
      )}
    </Box>
  );
}
