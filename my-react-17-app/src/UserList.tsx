import { useEffect, useState } from 'react';
import axios from 'axios';

interface Role {
  name: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  roles: Role[];
}

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios.get<User[]>('http://localhost:8000/api/users')
      .then(res => setUsers(res.data))
      .catch(err => console.error('Error fetching users:', err));
  }, []);

  return (
    <div>
      {users.map(user => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <p>Roles: {user.roles.map(r => r.name).join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;
