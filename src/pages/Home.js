import React from 'react';
import { Typography, Container } from '@mui/material';

function Home() {
    return (
        <Container>
            <Typography variant="h2" gutterBottom>
                Welcome to the Feedback Form Builder
            </Typography>
            <Typography variant="body1">
                Create, manage, and analyze feedback forms with ease.
            </Typography>
        </Container>
    );
}

export default Home;