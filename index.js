const fs = require("fs");
const path = require("path");

fs.readdir(path.join(__dirname, "data"), function (err, files) {
  if (err) {
    console.log(err);
  } else {
    console.log(files);

    // tworzymy folderu average

    fs.mkdir(path.join(__dirname, "average"), function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("Stworzono folder!");
      }
    });

    // tworzenie pliku result.txt
    fs.writeFile(
      path.join(__dirname, "average", "result.txt"),
      "test",
      function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log("Stworzono plik!");
        }
      }
    );

    // files.forEach(function (file) {
    //   fs.readFile(
    //     path.join(__dirname, "data", file),
    //     "utf-8",
    //     function (err, data) {
    //       if (err) {
    //         console.log(err);
    //       } else {
    //         console.log(JSON.parse(data));
    //       }
    //     }
    //   );
    // });
  }
});
