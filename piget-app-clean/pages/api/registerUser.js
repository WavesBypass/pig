export default function handler(req, res) {
    if (req.method === 'POST') {
        const { username, password } = req.body;
        // TODO: Save user to DB
        res.status(200).json({ message: 'User registered' });
    }
}