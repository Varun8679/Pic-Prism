// 4 steps procedure to make server
// Express ko bulana hoga is file me
const express = require("express");
const dotenv = require("dotenv"); 
const { readdirSync } = require("fs");
const { connectDb } = require("./connection");
const cors = require("cors");

//import route here
// const authRoutes = require("./routes/authRoutes");

//Binding this env
dotenv.config();
// Express ko call karna padega ek variable me
const app = express();
// port define karna hoga - Port hota hai darwaja
const port = process.env.PORT || 5000;
connectDb();
//Making Routes
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("<center><h1>Server Running Dudes...</h1></center>");
});

//how to use routes
//app.use("/api", authRoute);

//importing and using routes dynamically
readdirSync("./routes").map((route) =>
  app.use("/api", require(`./routes/${route}`))
);
//console.log(readdirSync("./routes"))

//types of requests
// 1. GET ->to get the data from the server
// 2. POST ->to post the data to the server
// 3. PUT ->to update the data on the server
// 4. DELETE ->to delete the data from the server

// Server ko listen karna hoga
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
