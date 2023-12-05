
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './UserContext';

const Private = ({ children }) => {

    const location = useLocation();

    const { user, loading } = useContext(AuthContext);

    console.log(user)
    if (loading) {
        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    if (user && user?.uid) {
        return children;
    }


    else {
        return <Navigate to='/login' state={{ from: location }} replace>  </Navigate>
    }

};

export default Private;