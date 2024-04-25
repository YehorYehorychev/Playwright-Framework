const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./cucumber-test-result/report",
  reportPath: "./cucumber-test-result/report",
  metadata: {
    browser: {
      name: "chrome",
      version: "60",
    },
    device: "Local test machine",
    platform: {
      name: "windows",
      version: "11",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "PlayWright-Framework", value: "Smoke-Tests" },
      { label: "Release", value: "1.0" },
      { label: "Cycle", value: "B11221.34321" },
      { label: "Execution Start Time", value: "Apr 24th 2024, 02:31 PM EST" },
      { label: "Execution End Time", value: "Apr 24th 2024, 02:56 PM EST" },
    ],
  },
});