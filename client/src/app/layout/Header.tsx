import React from 'react';
import { AppBar, Switch } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

interface Props {
    isDarkMode: boolean,
    handleChange: () => void;
}


export default function Header({ isDarkMode, handleChange }: Props) {

    return (
        <AppBar sx={{ mb: 4 }} position='static'>
            <Toolbar>
                <Typography variant='h6'>
                    Ecommerce store
                </Typography>
                <Switch
                    checked={isDarkMode}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                />
            </Toolbar>

        </AppBar>
    )
}