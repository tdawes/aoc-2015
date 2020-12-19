const fs = require("fs");
const { promisify } = require("util");
const path = require("path");
const _ = require("lodash");
const { MD5 } = require("crypto-js");

const readFile = promisify(fs.readFile);

const readInput = async () => readFile(path.join(__dirname, "input"), "utf-8");

const part1 = async () => {
  const input = await readInput();
  let c = 0;
  while (true) {
    const i = `${input}${c}`;
    const h = MD5(i);
    if (/^00000/.test(h)) {
      return c;
    }
    c++;
  }
};

const part2 = async () => {
  const input = await readInput();
  let c = 0;
  while (true) {
    const i = `${input}${c}`;
    const h = MD5(i);
    if (/^000000/.test(h)) {
      return c;
    }
    c++;
  }
};

part1().then(console.log).then(part2).then(console.log);
