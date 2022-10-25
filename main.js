#!/usr/bin/env node

Object.prototype.entries = function () {
  return Object.entries(this);
};

Object.prototype.keys = function () {
  return Object.keys(this);
};

Object.prototype.values = function () {
  return Object.values(this);
};

let data = "";

process.stdin
  .on("data", function (chunk) {
    data += chunk;
  })
  .on("end", function () {
    const [path] = process.argv.slice(2);
    if (!path) process.exit(1);
    console.log(eval(`(${data})${path}`));
  });
