const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/parse', (req, res) => {
    console.log(req.body); 
    res.send('JSON received and parsed!');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});