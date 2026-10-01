const express = require("express");
const app = express();
app.use(express.json());


app.get("/", (req, res) => {
    res.send("Hello, World!");
});

const PORT = process.env.PORT || 3000; 

const server = app.listen(PORT, () => {
  const { address, port } = server.address();
  const host = address === '::' || address === '0.0.0.0' ? 'localhost' : address;
  console.log(`Server is running at http://${host}:${port}`);
});