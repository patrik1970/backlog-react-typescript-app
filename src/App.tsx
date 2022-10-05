import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddIssueCard from './pages/Add-issue-card';
import IssueCard from './pages/Issue-card';
import IssueTable from './pages/Issue-table';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IssueTable />} />
        <Route path='add-issue-card' element={<AddIssueCard />} />
        <Route path="issue-card">
          <Route index element={<IssueCard />} />
          <Route path='issue-card/:id' element={<IssueCard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
