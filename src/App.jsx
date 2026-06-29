import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import AppShell from './components/AppShell';

import Login from './pages/Login';
import Signup from './pages/Signup';
import RoomList from './pages/RoomList';
import CreateRoom from './pages/CreateRoom';
import HostReady from './pages/HostReady';
import WatchRoom from './pages/WatchRoom';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route
            element={
              <ProtectedRoute>
                <AppShell />
              </ProtectedRoute>
            }
          >
            <Route path="/rooms" element={<RoomList />} />
            <Route path="/host/new" element={<CreateRoom />} />
            <Route path="/host/:roomId" element={<HostReady />} />
            <Route path="/room/:roomId" element={<WatchRoom />} />
          </Route>

          <Route path="/" element={<Navigate to="/rooms" replace />} />
          <Route path="*" element={<Navigate to="/rooms" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}