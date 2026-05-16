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

import QuestListPage from './pages/quests/QuestListPage';
import ShopPage from './pages/shop/ShopPage';

// Placeholder components for routes not yet implemented
const RoomSpacePage = () => <div className="container pixel-text">Room</div>;
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

        {/* Main App Routes with Layout */}
        <Route path="/map" element={<Layout><MainMapPage /></Layout>} />
        <Route path="/elevator" element={<Layout><ElevatorPage /></Layout>} />
        <Route path="/corridor" element={<Layout><CorridorMapPage /></Layout>} />
        <Route path="/room" element={<Layout><RoomSpacePage /></Layout>} />
        <Route path="/quests" element={<Layout><QuestListPage /></Layout>} />
        <Route path="/shop" element={<Layout><ShopPage /></Layout>} />
        <Route path="/community" element={<Layout><CommunityPage /></Layout>} />
        <Route path="/profile" element={<Layout><ProfilePage /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
