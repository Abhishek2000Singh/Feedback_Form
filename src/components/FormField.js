// src/components/FormField.js
import React from 'react';
import { TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

function FormField({ field, onFieldChange }) {
    return (
        <div>
            <TextField
                label="Label"
                value={field.label}
                onChange={(e) => onFieldChange(field.id, 'label', e.target.value)}
                fullWidth
                margin="normal"
            />
            <FormControl fullWidth margin="normal">
                <InputLabel>Required</InputLabel>
                <Select
                    value={field.required}
                    onChange={(e) => onFieldChange(field.id, 'required', e.target.value)}
                >
                    <MenuItem value={false}>No</MenuItem>
                    <MenuItem value={true}>Yes</MenuItem>
                </Select>
            </FormControl>
            {field.required && (
                <TextField
                    label="Error Message"
                    value={field.error}
                    onChange={(e) => onFieldChange(field.id, 'error', e.target.value)}
                    fullWidth
                    margin="normal"
                />
            )}
        </div>
    );
}

export default FormField;
