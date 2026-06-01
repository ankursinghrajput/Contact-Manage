const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();

const app = express();

connectDb();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contacts", require("./Routes/contactRoute"));
app.use("/api/users", require("./Routes/userRoute"));
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("Server is working!");
});


app.listen(port,() => {
    console.log(`Server running on port ${port}`);
})
