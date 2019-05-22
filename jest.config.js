module.exports = {
	verbose: true,
	"rootDir": "./src",
	"globals": {
		"NODE_ENV": "test"
	},
	"collectCoverage": true,
	"collectCoverageFrom": [
		"**/*.{js,jsx}",
		"!**/vendor/**",
		"!**/j/**"
	],
	"coverageDirectory": "../coverage-report",
	"coverageReporters": [
		"html",
		"cobertura"
	],
	testPathIgnorePatterns: [
		"node_modules/",
		"<rootDir>/build/",
		"<rootDir>/node_modules/",
		"src/node_modules/",
		// "<rootDir>/i",
		// "<rootDir>/resources",
		// "<rootDir>/sass"
	],
	"transform": {
		"^.+\\.jsx$": "babel-jest",
		"^.+\\.js$": "babel-jest"
	},
	"moduleFileExtensions": [
		"js",
		"jsx"
	],
	"moduleDirectories": [
		"node_modules"
	],
	"transformIgnorePatterns": [
		"node_modules/(?!124_rms_common)/"
	],
	// "moduleNameMapper": {
	// 	"\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__tests__/__mocks__/fileMock.js",
	// 	"\\.(css|sass|scss)$": "<rootDir>/__tests__/__mocks__/cssMock.js"
	// }
}