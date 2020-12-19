const fs = require("fs");
const { promisify } = require("util");
const path = require("path");
const _ = require("lodash");

const readFile = promisify(fs.readFile);

const readInput = async () => readFile(path.join(__dirname, "input"), "utf-8");

const parseInput = (input) => {
  return input.split("\n");
};

const part1 = async () => {
  const input = await readInput();
  const lines = parseInput(input);
  return lines.filter((line) => {
    const vowels = line.split("").filter((c) => /[aeiou]/.test(c)).length >= 3;
    const double = /(\w)\1/.test(line);
    const blacklist = /(ab)|(cd)|(pq)|(xy)/.test(line);
    return vowels && double && !blacklist;
  }).length;
};

const part2 = async () => {
  const input = await readInput();
  const lines = parseInput(input);
  return lines.filter((line) => {
    const double = /(\w)(\w).*\1\2/.test(line);
    const triple = /(\w)\w\1/.test(line);
    return double && triple;
  }).length;
};

part1().then(console.log).then(part2).then(console.log);
