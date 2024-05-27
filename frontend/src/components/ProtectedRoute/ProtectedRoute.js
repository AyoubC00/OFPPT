/* eslint-disable react/prop-types */
import React from 'react';
import { useAuthContext } from '../../contexts/authContext';


function ProtectedRoute({ children, ...roles }) {
  const { user: { user } } = useAuthContext();
  const navigate = React.useNavigate();

  React.useEffect(() => {
    if (!user || !roles.includes(user.role)) {
      navigate('/', { replace: true });
    }

  }, [navigate, user, roles])

  return <div>
    {children}
  </div>;
}

export default ProtectedRoute;
