import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navigation = () => {
  const { user } = useAuth();
  return (
    <nav>
      <Link to="/">Home</Link> | 
      <Link to="/profile">Profile</Link> | 
      <Link to="/blog/1">Blog 1</Link> | 
      <Link to="/blog/2">Blog 2</Link> | 
      <Link to="/login">Login</Link>
      {user && <span> (Logged in as {user.name})</span>}
    </nav>
  );
};

export default Navigation;