'use client';

import React, { useState, type FormEvent } from 'react';
import { createTodoAction } from '../actions/todo.js';

export default function TodoForm() {
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    setLoading(true);
    try {
      await createTodoAction(title);
      setTitle('');
      alert('Todo created successfully!');
    } catch (error) {
      console.error('Failed to create todo:', error);
      alert('Failed to create todo');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter todo title"
        className="border p-2 mr-2"
        disabled={loading}
      />
      <button 
        type="submit" 
        className="bg-blue-500 text-white p-2 rounded"
        disabled={loading}
      >
        {loading ? 'Adding...' : 'Add Todo'}
      </button>
    </form>
  );
}
