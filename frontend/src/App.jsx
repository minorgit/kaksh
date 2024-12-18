
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import './App.css';
import UserPage from './Pages/UserPage';
import OwnerPage from './Pages/OwnerPage';
import FeedbackPage from './Pages/FeedbackPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/user" element={<UserPage />} /> 
        <Route path="/owner" element={<OwnerPage />} />  
        <Route path="/FeedbackPage" element={<FeedbackPage />} /> 

      </Routes>
    </Router>
  );
}

export default App;
