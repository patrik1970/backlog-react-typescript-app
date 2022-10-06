import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Navigate, useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const IssueTable: React.FC = (props) => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchIssues = async () => {
      const data = await fetch(
        "https://localhost:7121/api/Issue"
      );
      const response = await data.json();
      setData(response)
    }
    fetchIssues();
  }, [])

  return (
    <>
    <Header />
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell>Title</StyledTableCell>
            <StyledTableCell>Description</StyledTableCell>
            <StyledTableCell>Priority</StyledTableCell>
            <StyledTableCell>Issuetype</StyledTableCell>
            <StyledTableCell>Created</StyledTableCell>
            <StyledTableCell>Completed</StyledTableCell>
             <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((issue) => (
            <StyledTableRow key={issue["id"]}>
              <StyledTableCell>{issue["id"]}</StyledTableCell>
              <StyledTableCell>{issue["title"]}</StyledTableCell>
              <StyledTableCell>{issue["description"]}</StyledTableCell>
              <StyledTableCell>{issue["priority"]}</StyledTableCell>
              <StyledTableCell>{issue["issueType"]}</StyledTableCell>
              <StyledTableCell>{issue["created"]}</StyledTableCell>
              <StyledTableCell>{issue["completed"]}</StyledTableCell>
              <StyledTableCell>
                <ArrowForwardIosIcon
                  onClick={() => {
                    navigate("issue-card/?id=" + issue["id"]);
                  }}
                ></ArrowForwardIosIcon>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}

export default IssueTable;
