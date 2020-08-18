module.exports = {
  rootDir: "./src",
  transform: {
    "^.+\\.tsx?$": `ts-jest`,
    "^.+\\.js?$": `babel-jest`,
  },
  testRegex: `.test.(js?|jsx?|tsx?)$`,
  mouleFileExtension: [
    `ts`,
    `tsx`,
    `jx`,
    `jsx`,
    `json`,
    `node`,
  ],
};