'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function EditPersonPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const router = useRouter();
  const [person, setPerson] = useState({ name: '', email: '', phone: '' });

  useEffect(() => {
    // Fetch the person data when the component loads
    async function fetchPerson() {
      const response = await fetch(`/api/persons/${id}`);
      if (response.ok) {
        const data = await response.json();
        setPerson(data);
      }
    }
    fetchPerson();
  }, [id]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPerson((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch(`/api/persons/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(person),
    });
    if (response.ok) {
      router.push('/persons'); // Redirect to persons list after successful update
    }
  };

  const handleDelete = async () => {
    const response = await fetch(`/api/persons/${id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      router.push('/persons'); // Redirect to persons list after successful delete
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px', backgroundColor: '#f9f9f9', color: '#333' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#0077b6' }}>Edit Person</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Name</label>
          <input
            type="text"
            name="name"
            value={person.name}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Email</label>
          <input
            type="email"
            name="email"
            value={person.email}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={person.phone}
            onChange={handleInputChange}
            placeholder="+1 (123) 456-7890"
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <button
          type="submit"
          style={{ padding: '10px 20px', backgroundColor: '#0077b6', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Save
        </button>
        <button
          type="button"
          onClick={handleDelete}
          style={{ padding: '10px 20px', backgroundColor: '#d9534f', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', marginLeft: '10px' }}
        >
          Delete
        </button>
      </form>
    </div>
  );
}