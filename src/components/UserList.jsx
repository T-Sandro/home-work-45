import React from 'react';
import { useSelector } from 'react-redux';
import UserProfile from './UserProfile';

const UserList = React.memo(() => {
  const users = useSelector((state) => state.users.items);

  if (!users || users.length === 0) return <p>No users yet</p>;

  return (
    <div>
      <h4>Users</h4>
      <div>
        {users.map((user) => (
          <UserProfile key={user.id} userId={user.id} />
        ))}
      </div>
    </div>
  );
});

export default UserList;
