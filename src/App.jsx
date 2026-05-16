import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SplashPage from './pages/onboarding/SplashPage';
import LoginPage from './pages/onboarding/LoginPage';
import MainMapPage from './pages/map/MainMapPage';
import ElevatorPage from './pages/map/ElevatorPage';
import CorridorMapPage from './pages/map/CorridorMapPage';

import AuthCallbackPage from './pages/onboarding/AuthCallbackPage';

import RegisterPage from './pages/onboarding/RegisterPage';

import Layout from './components/common/Layout/Layout';
import ProtectedRoute from './components/common/ProtectedRoute';

import QuestListPage from './pages/quests/QuestListPage';
import ShopPage from './pages/shop/ShopPage';
import RoomSpacePage from './pages/room/RoomSpacePage';

// Placeholder components for routes not yet implemented
const CommunityPage = () => <div className="container pixel-text">Community</div>;
const ProfilePage = () => <div className="container pixel-text">Profile</div>;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/oauth2/redirect" element={<AuthCallbackPage />} />

        {/* Main App Routes with Layout - 로그인 필요 */}
        <Route path="/map" element={<ProtectedRoute><Layout><MainMapPage /></Layout></ProtectedRoute>} />
        <Route path="/elevator" element={<ProtectedRoute><Layout><ElevatorPage /></Layout></ProtectedRoute>} />
        <Route path="/corridor" element={<ProtectedRoute><Layout><CorridorMapPage /></Layout></ProtectedRoute>} />
        <Route path="/room" element={<ProtectedRoute><Layout><RoomSpacePage /></Layout></ProtectedRoute>} />
        <Route path="/quests" element={<ProtectedRoute><Layout><QuestListPage /></Layout></ProtectedRoute>} />
        <Route path="/shop" element={<ProtectedRoute><Layout><ShopPage /></Layout></ProtectedRoute>} />
        <Route path="/community" element={<ProtectedRoute><Layout><CommunityPage /></Layout></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Layout><ProfilePage /></Layout></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
