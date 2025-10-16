import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from '../asyncActions/fetchUsers';

const initialState = {
  items: [
    { id: 1, name: 'Alice', bio: 'Frontend dev' },
    { id: 2, name: 'Bob', bio: 'Backend dev' },
  ],
  status: 'idle',
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser(state, action) {
      state.items.push({ id: Date.now(), ...action.payload });
    },
    removeUser(state, action) {
      state.items = state.items.filter(u => u.id !== action.payload);
    },
    updateUser(state, action) {
      const { id, changes } = action.payload;
      const idx = state.items.findIndex(u => u.id === id);
      if (idx !== -1) state.items[idx] = { ...state.items[idx], ...changes };
    },
    setUsers(state, action) {
      state.items = action.payload;
    },
    clearError(state) {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
        state.error = null;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || action.error?.message || 'Fetch failed';
      });
  },
});

export const { addUser, removeUser, updateUser, setUsers, clearError } = usersSlice.actions;
export default usersSlice.reducer;
