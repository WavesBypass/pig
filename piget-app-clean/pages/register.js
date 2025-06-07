import { useState } from 'react';
import '../styles/auth.css';

export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/registerUser', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });
        const data = await res.json();
        alert(data.message);
    };

    return (
        <form onSubmit={handleSubmit} className="auth-form">
            <h2>Register</h2>
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} required />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Register</button>
        </form>
    );
}