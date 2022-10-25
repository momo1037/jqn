#!/usr/bin/env node

let data = "";

const stdin = process.openStdin();

stdin.on("data", function (chunk) {
  data += chunk;
});

stdin.on("end", function () {
  const [path] = process.argv.slice(2);
  console.log(eval(`(${data})${path}`));
});
