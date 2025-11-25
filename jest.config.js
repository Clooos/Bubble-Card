export default {
  // Enable ES modules support
  transform: {},
  
  // Test file patterns
  testMatch: [
    "**/*.test.js"
  ],
  
  // Module resolution
  moduleFileExtensions: ['js', 'json'],
  
  // Test environment
  testEnvironment: 'node',
  
  // Enable verbose output
  verbose: true,
  
  // Files to ignore
  testPathIgnorePatterns: [
    "/node_modules/",
    "/dist/",
    "/www/"
  ]
};
