#!/usr/bin/env node

let data = "";

const stdin = process.openStdin();

stdin.on("data", function (chunk) {
  data += chunk;
});

stdin.on("end", function () {
  const [path] = process.argv.slice(2);
  const object = JSON.parse(data);
  const value = path
    .replace(/\[(\d+)\]/g, ".$1")
    .split(".")
    .reduce((obj, cur) => Object(obj)[cur], object);
  const ret = String(value ?? "");
  console.log(ret);
});
