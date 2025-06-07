export default function handler(req, res) {
    if (req.method === 'POST') {
        const { username, password } = req.body;
        // TODO: Validate user with DB
        if (username === 'admin' && password === 'admin') {
            res.status(200).json({ message: 'Login successful' });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    }
}