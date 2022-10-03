import React, { useState } from 'react';
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
import Typography from '@mui/material/Typography';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useNavigate } from 'react-router-dom';

const IssueCard: React.FC = () => {
    const [createdDate, setCreatedDate] = useState<Dayjs | null>(null);
    const [completedDate, setCompletedDate] = useState<Dayjs | null>(null);
    const navigate = useNavigate();

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Stack direction="row" justifyContent="space-between" alignItems="flex-end" spacing={2}>
                    <TextField 
                        id="outlined-basic" 
                        label="Title" 
                        style={{ width: "100%" }}
                        variant="outlined" 
                    />
                    <FormControl fullWidth>
                        <InputLabel>IssueType</InputLabel>
                        <Select
                            label="IssueType"
                            style={{ width: "100%" }}
                        >
                            <MenuItem value='1'>Bug</MenuItem>
                            <MenuItem value='2'>Feature</MenuItem>
                            <MenuItem value='3'>Documentation</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel>Priority</InputLabel>
                        <Select
                            label="Priority"
                            style={{ width: "100%" }}
                        >
                            <MenuItem value='1'>Low</MenuItem>
                            <MenuItem value='2'>Medium</MenuItem>
                            <MenuItem value='3'>High</MenuItem>
                        </Select>
                    </FormControl>
                </Stack>
                <br />
                <Box>
                    <TextField 
                        label="Description"
                        style={{ width: "100%" }}
                        multiline 
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
                    >
                       Save
                    </Button>
                    <Button 
                        variant="outlined"
                        style={{ width: "100%" }}
                    >
                        Delete
                    </Button>
                </Stack> 
            </CardContent>
        </Card>
    )
}

export default IssueCard
