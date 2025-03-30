// RedirectComponent.js
import { Navigate } from 'react-router-dom';

const RedirectComponent = ({ to }) => <Navigate to={to} replace />;

export default RedirectComponent;