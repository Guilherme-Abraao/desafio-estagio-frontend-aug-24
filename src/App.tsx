import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChatListSearch from './components/ChatListSearch';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChatListSearch />} />
      </Routes>
    </Router>
  );
};

export default App;
