import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UserProfile from './UserProfile';
import { fetchUsers } from '../redux/asyncActions/fetchUsers';
import { clearError } from '../redux/slices/usersSlice';

const UserList = React.memo(() => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.items);
  const status = useSelector((state) => state.users.status);
  const error = useSelector((state) => state.users.error);

  useEffect(() => {
    if ((users == null || users.length === 0) && status === 'idle') {
      dispatch(fetchUsers());
    }
  }, [dispatch]);

  const handleLoad = () => {
    dispatch(fetchUsers());
  };

  const handleClearError = () => {
    dispatch(clearError());
  };

  return (
    <div>
      <h4>Users</h4>

      {status === 'loading' && <p>Loading users...</p>}

      {status === 'failed' && (
        <div style={{ color: 'red', marginBottom: 8 }}>
          <div>Error: {error}</div>
          <button onClick={handleLoad} style={{ marginRight: 8 }}>
            Retry
          </button>
          <button onClick={handleClearError}>Clear</button>
        </div>
      )}

      <div>
        {users && users.length > 0 ? (
          users.map((user) => <UserProfile key={user.id} userId={user.id} />)
        ) : status !== 'loading' ? (
          <div>
            <p>No users yet</p>
            <button onClick={handleLoad}>Load users</button>
          </div>
        ) : null}
      </div>
    </div>
  );
});

export default UserList;
