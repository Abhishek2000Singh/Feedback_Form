import React from 'react';
import { Typography, Container } from '@mui/material';

function About() {
    return (
        <Container>
            <Typography variant="h2" gutterBottom>
                About Us
            </Typography>
            <Typography variant="body1">
                Learn more about the Feedback Form Builder and our mission to simplify feedback collection and analysis.
            </Typography>
        </Container>
    );
}

export default About;