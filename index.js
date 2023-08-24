const fs = require("fs");
const path = require("path");

fs.readdir(path.join(__dirname, "data"), function (err, files) {
  if (err) {
    console.log(err);
  } else {
    console.log(files);

    files.forEach(function (file) {
      fs.readFile(path.join(__dirname, "data", file), function (err, data) {
        if (err) {
          console.log(err);
        } else {
          console.log(data.toString());
        }
      });
    });
  }
});
