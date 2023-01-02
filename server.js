// Main server file, will contain middleware

// tells application we are using express server with node
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// sets up express to parse data with middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// points to route files - will create actual files later and will include posts, gets, puts requests
require("./routers/apirouter")(app);
require("./routers/htmlrouter")(app);

// starts server
app.listen(PORT, function() {
  console.log(`Server is listening on PORT: ${PORT}`);
});