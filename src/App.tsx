import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import IssueCard from './pages/Issue-card';
import IssueTable from './pages/Issue-table';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IssueTable />} />
        <Route path="issue-card" element={<IssueCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
