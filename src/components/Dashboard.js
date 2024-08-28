// src/pages/Dashboard.js
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const Dashboard = () => {
    const [forms, setForms] = useState([]);

    useEffect(() => {
        const fetchForms = async () => {
            const formsCollection = collection(db, 'feedbackForms');
            const formsSnapshot = await getDocs(formsCollection);
            const formsList = formsSnapshot.docs.map(doc => doc.data());
            setForms(formsList);
        };
        fetchForms();
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={() => {/* navigate to form creation page */ }}>Add New Form</button>
            <ul>
                {forms.map((form, index) => (
                    <li key={index}>{form.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
