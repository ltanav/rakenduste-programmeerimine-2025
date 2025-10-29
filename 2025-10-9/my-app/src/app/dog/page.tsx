'use client';

import React, { useEffect, useState } from 'react';
import { Button, Image, Loader, Center } from '@mantine/core';

export default function DogPage() {
  const [img, setImg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchDog = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/dog');
      if (!res.ok) throw new Error('Network error');
      const data = await res.json();
      setImg(data.message);
    } catch (err) {
      console.error(err);
      setImg(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDog();
  }, []);

  return (
    <Center mt="xl" style={{ flexDirection: 'column', gap: 18 }}>
      <Button onClick={fetchDog}>Lae uus pilt</Button>
      {loading && <Loader />}
      {img && <Image src={img} alt="Random dog" radius="md" width={360} />}
    </Center>
  );
}
