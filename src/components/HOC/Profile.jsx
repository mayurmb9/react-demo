import { useNavigate } from 'react-router';

export default function Profile() {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('auth');
    navigate('/hoc/login');
  };

  return (
    <div>
      <h2>Profile</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

