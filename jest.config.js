// jest.config.js
module.exports = {
  testEnvironment: "jsdom",
  moduleFileExtensions: ["js", "ts", "json", "vue"],
  transform: {
    "^.+\\.ts$": "ts-jest",
    "^.+\\.vue$": "@vue/vue3-jest",
  },
};
