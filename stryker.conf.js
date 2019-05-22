// This config was generated using a preset.
// Please see the handbook for more information: https://github.com/stryker-mutator/stryker-handbook/blob/master/stryker/guides/react.md#react
module.exports = function(config) {
  config.set({
    mutate: ["src/**/*.js",
      '!src/__tests__/**/*.js',
      "!src/__tests__/__mocks__/*.js",
      '!**/index.js',
      '!src/**/App.js',
    ],
    mutator: "javascript",
    testRunner: "jest",
    reporters: ["progress", "clear-text", "html"],
    coverageAnalysis: "off",
    jest: {
      projectType: "react",
      config: require('./jest.config.js'),
    },
    files: ['src/**/*.js',
      "!src/__tests__/__mocks__/*.js"],
    // logLevel:'trace'
  });
};
