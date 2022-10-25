#!/usr/bin/env node

let data = "";

process.stdin
  .on("data", function (chunk) {
    data += chunk;
  })
  .on("end", function () {
    const [path] = process.argv.slice(2);
    if (!path) process.exit(1);
    if (path.startsWith(".")) {
      console.log(eval(`(${data})${path}`));
    } else {
      console.log(eval(path.replace("$", data)));
    }
  });
