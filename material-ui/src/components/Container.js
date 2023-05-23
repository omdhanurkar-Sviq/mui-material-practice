import * as React from 'react';
import Container from '@mui/material/Container';

export default function SimpleContainer() {
    return (

        <div>
            <h1> container</h1>
            <Container maxWidth="xs" sx={{ bgcolor: 'skyblue' }}>
                <h1>this is the container</h1>
            </Container>
            <Container maxWidth="sm" sx={{ bgcolor: 'skyblue' }}>
                <h1>this is the container</h1>
            </Container>
            <Container maxWidth="md" sx={{ bgcolor: 'skyblue' }}>
                <h1>this is the container</h1>
            </Container>
            <Container maxWidth="lg" sx={{ bgcolor: 'skyblue' }}>
                <h1>this is the container</h1>
            </Container>
            <Container fixed  sx={{ bgcolor: 'skyblue' }}>
                <h1>this is the container</h1>
            </Container>

        </div>
    );
} 