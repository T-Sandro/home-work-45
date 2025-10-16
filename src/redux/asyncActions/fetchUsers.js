import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!res.ok) {
        const text = await res.text();
        return rejectWithValue(`Server error: ${res.status} ${text}`);
      }
      const data = await res.json();
      return data.map(u => ({
        id: u.id,
        name: u.name,
        bio: u.company?.catchPhrase || u.email || 'No bio',
      }));
    } catch (err) {
      return rejectWithValue(err.message || 'Network error');
    }
  }
);
