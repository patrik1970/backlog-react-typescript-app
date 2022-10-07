import { Typography } from '@mui/material';
import React from 'react';
import AddIcon from '@mui/icons-material/Add'
import { Link } from 'react-router-dom';

const Header: React.FC = () => {

    return (
        <>
        <div style={{ width: "50%" }}>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <div>
                    <Link to={'/'} style={{ textDecoration: "none", color: "black" }}>
                        <Typography variant='h3' gutterBottom>Backlog V1.0</Typography>
                    </Link>
                </div>
                <div style={{ textAlign: "center" }}>
                    <Link to={'add-issue-card'} style={{ textDecoration: "none", color: "black" }}>
                        <AddIcon style={{ fontSize: "xx-large" }}></AddIcon>
                        <Typography variant='h6'> Add Issue</Typography>
                    </Link>
                </div>
            </div>
        </div>
        <hr />
        </>
    )
}

export default Header
