/* eslint-disable react/prop-types */
import React from 'react';
import { useAuthContext } from '../../contexts/authContext';
import { useNavigate } from 'react-router-dom';


function ProtectedRoute({ children, ...roles }) {
  const auth = useAuthContext();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!auth?.user?.user || !roles.includes(auth.user.user.role)) {
      navigate('/', { replace: true });
    }

  }, [navigate, auth, roles])

  return auth ? <div>
    {children}
  </div> : null;
}

export default ProtectedRoute;
