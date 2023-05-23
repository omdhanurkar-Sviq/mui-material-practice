import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function BoxComponent() {
    return (
        <div>
            <h1>Box componenet</h1>
            <Box component="span" style={{color:'red'}} clone m={50} >
                <Button>Hello</Button>
            </Box>
        </div>
    );
}