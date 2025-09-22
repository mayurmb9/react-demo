import { useEffect, useState } from 'react';
import { Navigate } from 'react-router';


export default function Login() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('auth') === 'true') {
      setIsAuthenticated(true);
      if (localStorage.getItem('auth') === true) {
        <Navigate to="/hoc/dashboard" />
      }
    }
  }, []);

  const handleLogin = () => {
    localStorage.setItem('auth', 'true');
    setIsAuthenticated(true);
    localStorage.setItem('auth', true);
    <Navigate to="/hoc/dashboard" />
  };

  if (isAuthenticated) {
    return <Navigate to="/hoc/dashboard" />;
  }

  return (
    <div>
      <h3>Login Page</h3>
      <h4>User is not authenticated. </h4>
      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  )
}


