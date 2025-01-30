const app = require("./app.js");

var port = process.env.PORT || '3000';

/**
 * Listen on provided port, on all network interfaces.
 */

app.listen(port, () => console.log("Server listening on port: ", port));