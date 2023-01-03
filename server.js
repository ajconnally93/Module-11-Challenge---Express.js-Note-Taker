// Main server file, will contain middleware

// tells application we are using express server with node
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const api = require('./routers/apirouter.js');
const html = require('./routers/htmlrouter.js');

// sets up express to parse data with middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// points to route files - will create actual files later and will include posts, gets, puts requests
// require("./routers/apirouter");
// require("./routers/htmlrouter");


// uses the exported 'app' on line 48 of apirouter.js and line 18 of htmlrouter.js to instinctively know which route to take
// remember this /api made the use of /api/notes in apirouter.js redundant - switched to just /notes
app.use('/api', api);
app.use('/', html);

// starts server
app.listen(PORT, function() {
  console.log(`Server is listening on PORT: ${PORT}`);
});