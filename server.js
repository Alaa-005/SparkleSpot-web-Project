const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hey Guys! Our Server is ALIVE!");
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running successfully on port ${PORT}`);
});