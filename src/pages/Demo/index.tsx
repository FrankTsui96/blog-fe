import { useState } from 'react';
import { getUsers } from '../../utils/api-usage-example';

const Demo = () => {
  const [users, setUsers] = useState<any[]>([]);

  const fetchUsers = async () => {
    const response = await getUsers();
    setUsers(response);
  };

  return (
    <div>
      <h1>Demo</h1>
      <p>Users: {users.length}</p>
      <button onClick={fetchUsers}>Fetch Users</button>
    </div>
  );
};

export default Demo;
