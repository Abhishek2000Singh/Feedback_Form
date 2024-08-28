// src/pages/FormEditor.js
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useDrag, useDrop } from 'react-dnd';

const FieldTypes = ['Star Rating', 'Smile Rating', 'Text Area', 'Radio Buttons', 'Categories', 'Numerical Rating', 'Single Line Input'];

const FormEditor = () => {
    const [fields, setFields] = useState([]);
    const [draggedField, setDraggedField] = useState(null);

    const handleAddField = (type) => {
        setFields([...fields, { type, id: Date.now() }]);
    };

    const handleDrop = (item) => {
        setFields(fields.map(field => (field.id === item.id ? { ...field, type: draggedField.type } : field)));
    };

    return (
        <div>
            <h1>Create/Edit Form</h1>
            {FieldTypes.map(type => (
                <Button key={type} onClick={() => handleAddField(type)}>{type}</Button>
            ))}
            {fields.map((field, index) => (
                <div key={field.id}>
                    {/* Drag and Drop Logic */}
                    {/* Render field based on type */}
                </div>
            ))}
            <Button onClick={() => {/* Save form logic */ }}>Save</Button>
        </div>
    );
};

export default FormEditor;
