import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import IssueTable from './pages/Issue-table';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IssueTable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
