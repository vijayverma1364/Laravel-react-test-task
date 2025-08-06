import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [roles, setRoles] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/api/users', {
        name: fullName,
        email,
        roles,
      });
      navigate('/users');
    } catch (error) {
      console.error(error);
    }
  };

  const handleRoleChange = (role) => {
    setRoles(prev => 
      prev.includes(role) ? prev.filter(r => r !== role) : [...prev, role]
    );
  };


return (
    <div className="form-container">
      <h2>Add User</h2>
      <form onSubmit={handleSubmit} className="user-form">
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" value={fullName} onChange={e => setFullName(e.target.value)} required />
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </div>

        <div className="form-group">
          <label>Select Roles</label>
          <div className="checkbox-group">
            {['Author', 'Editor', 'Subscriber', 'Administrator'].map(role => (
              <label key={role} className="checkbox-label">
                <input
                  type="checkbox"
                  value={role}
                  checked={roles.includes(role)}
                  onChange={() => handleRoleChange(role)}
                />
                {role}
              </label>
            ))}
          </div>
        </div>

        <button type="submit" className="submit-btn">Save User</button>
      </form>
    </div>
  );
};

export default AddUser;
