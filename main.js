#!/usr/bin/env node
const vm = require("vm");

let data = "";

process.stdin
  .on("data", function (chunk) {
    data += chunk;
  })
  .on("end", function () {
    const [path] = process.argv.slice(2);
    if (!path) process.exit(1);

    const code = path.startsWith(".") ? "$" + path : path;
    const context = { $: JSON.parse(data) };
    vm.createContext(context);
    const ret = vm.runInContext(code, context);
    console.log(ret);
  });
