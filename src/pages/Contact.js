import React from 'react';
import { Typography, Container, TextField, Button } from '@mui/material';

function Contact() {
    return (
        <Container>
            <Typography variant="h2" gutterBottom>
                Contact Us
            </Typography>
            <form noValidate autoComplete="off">
                <TextField label="Name" fullWidth margin="normal" />
                <TextField label="Email" type="email" fullWidth margin="normal" />
                <TextField label="Message" multiline rows={4} fullWidth margin="normal" />
                <Button variant="contained" color="primary" type="submit">
                    Send
                </Button>
            </form>
        </Container>
    );
}

export default Contact;