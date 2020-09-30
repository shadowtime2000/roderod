#!/usr/bin/env node
const fs = require("fs");

const data = fs.readFileSync(process.argv[2]).toString();

require("../src/interpret")(require("../src/parser")(data));
