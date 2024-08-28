// src/pages/FeedbackDetail.js
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const FeedbackDetail = ({ formId }) => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const fetchSubmissions = async () => {
      const submissionsCollection = collection(db, `feedbackForms/${formId}/submissions`);
      const submissionsSnapshot = await getDocs(submissionsCollection);
      const submissionsList = submissionsSnapshot.docs.map(doc => doc.data());
      setSubmissions(submissionsList);
    };
    fetchSubmissions();
  }, [formId]);

  return (
    <div>
      <h1>Feedback Form Details</h1>
      <ul>
        {submissions.map((submission, index) => (
          <li key={index}>{submission.timestamp}: {JSON.stringify(submission.data)}</li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackDetail;
