const fs = require("fs");
const { promisify } = require("util");
const path = require("path");
const _ = require("lodash");

const readFile = promisify(fs.readFile);

const readInput = async () => readFile(path.join(__dirname, "input"), "utf-8");

const parseInput = (input) => {
  return input.split("");
};

const part1 = async () => {
  const input = await readInput();
  const directions = parseInput(input);
  let santa = [0, 0];
  let seen = new Set(["0,0"]);
  for (let direction of directions) {
    if (direction === "v") {
      santa[1]++;
    } else if (direction === "^") {
      santa[1]--;
    } else if (direction === ">") {
      santa[0]++;
    } else if (direction === "<") {
      santa[0]--;
    }
    seen.add(`${santa[0]},${santa[1]}`);
  }
  return seen.size;
};

const part2 = async () => {
  const input = await readInput();
  const directions = parseInput(input);
  let santa = [0, 0];
  let robot = [0, 0];
  let seen = new Set(["0,0"]);
  let santasTurn = true;
  for (let direction of directions) {
    let person = santasTurn ? santa : robot;
    if (direction === "v") {
      person[1]++;
    } else if (direction === "^") {
      person[1]--;
    } else if (direction === ">") {
      person[0]++;
    } else if (direction === "<") {
      person[0]--;
    }
    seen.add(`${person[0]},${person[1]}`);
    santasTurn = !santasTurn;
  }
  return seen.size;
};

part1().then(console.log).then(part2).then(console.log);
