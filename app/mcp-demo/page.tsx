'use client';

import { useState, useEffect } from 'react';

export default function MCPDemoPage() {
  const [result, setResult] = useState('No operation performed yet');
  const [loading, setLoading] = useState(false);

  const testOperation = async (operation: string) => {
    setLoading(true);
    try {
      let response;
      switch (operation) {
        case 'create':
          response = await fetch('/api/mcp', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              name: 'Test Person',
              email: 'test@example.com'
            })
          });
          break;
        case 'read':
          response = await fetch('/api/mcp');
          break;
        case 'update':
          response = await fetch('/api/mcp', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id: 'test-id',
              name: 'Updated Person'
            })
          });
          break;
        case 'delete':
          response = await fetch('/api/mcp', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id: 'test-id'
            })
          });
          break;
      }
      
      const data = await response.json();
      setResult(JSON.stringify(data, null, 2));
    } catch (error) {
      setResult(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ color: '#0077b6', marginBottom: '30px' }}>MCP Server Demo</h1>
      
      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ color: '#333', marginBottom: '20px' }}>Test CRUD Operations</h2>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          <button
            onClick={() => testOperation('create')}
            style={{
              padding: '10px 20px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Create Person
          </button>
          <button
            onClick={() => testOperation('read')}
            style={{
              padding: '10px 20px',
              backgroundColor: '#2196F3',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            List Persons
          </button>
          <button
            onClick={() => testOperation('update')}
            style={{
              padding: '10px 20px',
              backgroundColor: '#FFC107',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Update Person
          </button>
          <button
            onClick={() => testOperation('delete')}
            style={{
              padding: '10px 20px',
              backgroundColor: '#f44336',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Delete Person
          </button>
        </div>
      </div>

      <div>
        <h2 style={{ color: '#333', marginBottom: '20px' }}>Result</h2>
        <pre style={{
          background: '#f5f5f5',
          padding: '20px',
          borderRadius: '4px',
          overflowX: 'auto',
          maxHeight: '400px',
          opacity: loading ? 0.5 : 1
        }}>
          {loading ? 'Loading...' : result}
        </pre>
      </div>
    </div>
  );
}