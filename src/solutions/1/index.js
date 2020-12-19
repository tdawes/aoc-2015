const fs = require("fs");
const { promisify } = require("util");
const path = require("path");

const readFile = promisify(fs.readFile);

const readInput = async () => readFile(path.join(__dirname, "input"), "utf-8");

const part1 = async () => {
  const input = await readInput();
  const chars = input.split("");
  return (
    chars.filter((c) => c === "(").length -
    chars.filter((c) => c === ")").length
  );
};

const part2 = async () => {
  const input = await readInput();
  const chars = input.split("");
  let floor = 0;
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === "(") {
      floor++;
    } else if (chars[i] === ")") {
      floor--;
    }
    if (floor === -1) {
      return i + 1;
    }
  }
};

part1().then(console.log).then(part2).then(console.log);
