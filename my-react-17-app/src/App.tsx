import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUser from './AddUser';
import UserList from './UserList';

const App = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AddUser />} />
        <Route path="/users" element={<UserList />} />
      </Routes>
    </Router>
  );
};

export default App;
