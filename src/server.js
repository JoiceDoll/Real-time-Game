require('dotenv').config()

const server = require("./index");

const PORT = process.env.PORT || 3031

server.listen(PORT, () => {
  console.log(`Running at ${PORT}`);
});
