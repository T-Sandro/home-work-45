import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: 1, name: 'Alice', bio: 'Frontend dev' },
    { id: 2, name: 'Bob', bio: 'Backend dev' },
  ],
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
  },
});

export const { addUser, removeUser, updateUser, setUsers } = usersSlice.actions;
export default usersSlice.reducer;
