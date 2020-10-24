const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
app.get("/", (req, res) => res.send("Hello World"));
app.listen(port, () => console.log(`Server is running on port ${port}`));

// X7PpAKx9AOq7xE1v
// mongodb+srv://admin:<password>@cluster0.03ctr.mongodb.net/<dbname>?retryWrites=true&w=majority