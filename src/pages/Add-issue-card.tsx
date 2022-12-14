import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Dayjs } from 'dayjs';
import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const AddIssueCard: React.FC = () => {
    const [issueId, setIssueId] = useState(null);
    const navigate = useNavigate();
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [issueType, setIssueType] = useState('');
    const [priority, setPriority] = useState('');
    const [description, setDescription] = useState('');
    const [createdDate, setCreatedDate] = useState<Dayjs | null>(null);
    const [completedDate, setCompletedDate] = useState<Dayjs | null>(null);

    useEffect(() => {
        setId(id);
        setTitle(title);
        setIssueType(issueType);
        setPriority(priority);
        setDescription(description);
        setCreatedDate(createdDate);
        setCompletedDate(completedDate);
    });

    const addIssueHandler = () => {
        const addIssue = async () => {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({id: 0, title: title, issueType: issueType, priority: priority, description: description, created: createdDate, completed: completedDate })
            };
            const response = await fetch('https://localhost:7121/api/Issue/' + id, requestOptions);
            const data = await response.json();
            setIssueId(data);
        }
        addIssue();
        navigate('/');
    }

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Stack direction="row" justifyContent="space-between" alignItems="flex-end" spacing={2}>
                    <TextField 
                        label="Title" 
                        style={{ width: "100%" }}
                        value={title}
                        variant="outlined"
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                    <FormControl fullWidth>
                        <InputLabel>IssueType</InputLabel>
                        <Select
                            style={{ width: "100%" }}
                            label="IssueType"
                            value={issueType}
                            onChange={(e) => { setIssueType(e.target.value)}}
                           
                        >
                            <MenuItem value={1}>Bug</MenuItem>
                            <MenuItem value={2}>Feature</MenuItem>
                            <MenuItem value={3}>Documentation</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel>Priority</InputLabel>
                        <Select
                            style={{ width: "100%" }}
                            label="Priority"
                            value={priority}
                            onChange={(e) => { setPriority(e.target.value)}} 
                        >
                            <MenuItem value={1}>Low</MenuItem>
                            <MenuItem value={2}>Medium</MenuItem>
                            <MenuItem value={3}>High</MenuItem>
                        </Select>
                    </FormControl>
                </Stack>
                <br />
                <Box>
                    <TextField 
                        style={{ width: "100%" }}
                        label="Description"
                        multiline
                        value={description}
                        onChange={(e) => { setDescription(e.target.value)}}
                    />
                </Box>
                <br />
                <Stack direction="row" justifyContent="space-between" alignItems="flex-end" spacing={2}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker 
                            label="Created"
                            inputFormat="YYYY-MM-DD"
                            value={createdDate}
                            onChange={(newValue) => { setCreatedDate(newValue);}}
                            renderInput={(params) => <TextField style={{ width: "100%" }} {...params} />}
                        />
                    </LocalizationProvider>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker 
                            label="Completed"
                            inputFormat="YYYY-MM-DD"
                            value={completedDate}
                            onChange={(newValue) => { setCompletedDate(newValue);}}
                            renderInput={(params) => <TextField style={{ width: "100%" }} {...params} />}
                        />
                    </LocalizationProvider>
                    <Button 
                        variant="contained"
                        style={{ width: "100%" }}
                        onClick={() => {
                            navigate(-1)
                        }}
                    >
                        Abort
                    </Button>
                    <Button 
                        variant="outlined"
                        style={{ width: "100%" }}
                        onClick={addIssueHandler}
                    >
                       Add Issue
                    </Button>
                </Stack> 
            </CardContent>
        </Card>
    )
}

export default AddIssueCard
