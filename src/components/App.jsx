import '@picocss/pico';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../routes/Home';
import { Login } from '../routes/Login';
import { Signup } from '../routes/Signup';
import { Dashboard } from '../routes/Dashboard';
import { Account } from '../routes/Account';
import { NotFound } from '../routes/NotFound';
import { ProtectedRoute } from '../routes/ProtectedRoute';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/account"
          element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};
