const fs = require("fs");
const { promisify } = require("util");
const path = require("path");
const _ = require("lodash");

const readFile = promisify(fs.readFile);

const readInput = async () => readFile(path.join(__dirname, "input"), "utf-8");

const parseInput = (input) => {
  const lines = input.split("\n");
  return lines.map((line) => line.split("x").map((x) => parseInt(x, 10)));
};

const part1 = async () => {
  const input = await readInput();
  const presents = parseInput(input);
  return _.sum(
    presents.map((p) => {
      const a1 = p[0] * p[1];
      const a2 = p[0] * p[2];
      const a3 = p[1] * p[2];
      return 2 * a1 + 2 * a2 + 2 * a3 + Math.min(a1, a2, a3);
    })
  );
};

const part2 = async () => {
  const input = await readInput();
  const presents = parseInput(input);
  return _.sum(
    presents.map((p) => {
      const p1 = 2 * (p[0] + p[1]);
      const p2 = 2 * (p[0] + p[2]);
      const p3 = 2 * (p[1] + p[2]);
      return Math.min(p1, p2, p3) + p[0] * p[1] * p[2];
    })
  );
};

part1().then(console.log).then(part2).then(console.log);
