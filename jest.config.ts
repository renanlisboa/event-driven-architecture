export default {
  roots: ['<rootDir>/tests'],
  clearMocks: true,
  coverageProvider: "v8",
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
};
