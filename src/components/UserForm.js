import React, { useState } from 'react';
import axios from 'axios';

const UserForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        city: '',
        // Add other fields as per your form
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/create-resume', formData); // Update port to 5000
            alert(res.data.message);
            // Optionally, show the preview or navigate to a preview page
        } catch (error) {
            console.error('Error creating resume:', error);
            alert('Failed to create resume.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
            <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} />
            
            <button type="submit">Create Resume</button>
        </form>
    );
};

export default UserForm;
