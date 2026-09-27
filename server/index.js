const app = require("./app");

const port = 8484;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});