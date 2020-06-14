module.exports = {
  roots: ["<rootDir>/src/tests"],
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  moduleFileExtensions: ["ts", "js"],
  coveragePathIgnorePatterns: ["/node_modules/"],
};
