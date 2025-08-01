const express = require('express');
const app = express();

app.use((req, res) => {
    res.status(200).send("Hello!")
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});