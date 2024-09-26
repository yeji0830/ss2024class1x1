import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ChatSupport from './components/ChatSupport';
import WelfareInfo from './components/WelfareInfo';
import Community from './components/Community';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chat" element={<ChatSupport />} />
        <Route path="/welfare" element={<WelfareInfo />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </Router>
  );
}

export default App;
