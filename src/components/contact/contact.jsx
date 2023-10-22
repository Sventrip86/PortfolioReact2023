import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import './contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        console.log('Form submitted:', formData);
    };

    return (
        <div className='contact-section'>
                        <h1 className="contact-title">Get in Touch</h1>      

        <Container maxWidth="sm">
            <Typography variant="h4" align="center" gutterBottom>Contact Me</Typography>
            <form onSubmit={handleSubmit}>
                <TextField 
                    name="name"
                    label="Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={formData.name}
                    onChange={handleChange}
                />
                <TextField 
                    name="email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={formData.email}
                    onChange={handleChange}
                />
                <TextField 
                    name="message"
                    label="Message"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    margin="normal"
                    value={formData.message}
                    onChange={handleChange}
                />
                <Button 
                    type="submit" 
                    variant="contained" 
                    color="primary"
                    fullWidth
                >
                    Submit
                </Button>
            </form>
        </Container>
        </div>
    );
}

export default Contact;
