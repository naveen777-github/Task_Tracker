const fs = require("fs");
fs.writeFile("message.txt", "hello world!", (err) => {
  if (err) throw err;
  console.log("file saved");
});
