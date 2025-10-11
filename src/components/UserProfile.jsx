import React from 'react';
import { useSelector } from 'react-redux';

const UserProfile = ({ userId }) => {
  const user = useSelector((state) =>
    state.users.items.find((u) => u.id === userId)
  ) || { name: 'Unknown', bio: '', id: userId };

  const theme = useSelector((state) => state.theme.value);

  const style = {
    background: theme === 'dark' ? '#222' : '#fff',
    color: theme === 'dark' ? '#fff' : '#000',
    padding: '8px',
    margin: '8px 0',
    borderRadius: 6,
    border: '1px solid #ccc',
  };

  return (
    <div style={style}>
      <strong>{user.name}</strong>
      <div>{user.bio}</div>
      <small>ID: {user.id}</small>
    </div>
  );
};

export default UserProfile;
