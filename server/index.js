// 4 steps procedure to make server
// Express ko bulana hoga is file me
const express = require("express");
const dotenv = require("dotenv");

//Binding this env
dotenv.config();
// Express ko call karna padega ek variable me
const app = express();
// port define karna hoga - Port hota hai darwaja
const port = process.env.PORT || 5000;
//Making Routes
app.get("/", (req, res) => {
  res.send("<center><h1>Server Running Dudes...</h1></center>");
});

// Server ko listen karna hoga
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
