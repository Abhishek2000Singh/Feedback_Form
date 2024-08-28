// src/components/FeedbackModal.js
import React, { useState, useEffect } from 'react';
import { Modal, Button, TextField } from '@mui/material';
import { collection, addDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';

const FeedbackModal = ({ formId, open, onClose }) => {
    const [form, setForm] = useState(null);

    useEffect(() => {
        const fetchForm = async () => {
            // Fetch form details from Firestore
            // setForm with fetched data
        };
        fetchForm();
    }, [formId]);

    const handleSubmit = async () => {
        // Handle form submission
        // Save feedback to Firestore
        onClose();
    };

    return (
        <Modal open={open} onClose={onClose}>
            <div>
                {form && form.fields.map((field, index) => (
                    <div key={index}>
                        {/* Render form fields */}
                        <TextField
                            label={field.label}
                            required={field.required}
                        // Add more field-specific props
                        />
                    </div>
                ))}
                <Button onClick={handleSubmit}>Submit</Button>
            </div>
        </Modal>
    );
};

export default FeedbackModal;
