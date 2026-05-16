import { Navigate } from 'react-router-dom';
import useAuthStore from '../../store/useAuthStore';

const ProtectedRoute = ({ children }) => {
  // const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  // return isAuthenticated ? children : <Navigate to="/login" replace />;
  
  // [개발용 임시 패스] 로그인 체크를 무시하고 항상 화면을 보여줍니다.
  return children;
};

export default ProtectedRoute;
