/** @type {import('jest').Config} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    
    // Test file patterns
    testMatch: [
        '<rootDir>/src/**/__tests__/**/*.{ts,tsx}',
        '<rootDir>/src/**/*.{test,spec}.{ts,tsx}'
    ],
    
    // Ignore setup files from being treated as test suites
    testPathIgnorePatterns: [
        '/node_modules/',
        '<rootDir>/src/__tests__/setup.ts',
        '<rootDir>/src/__tests__/helpers/',
        '<rootDir>/out/',
        '<rootDir>/coverage/'
    ],
    
    // Module resolution
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
    },
    
    // Transform configuration
    transform: {
        '^.+\\.tsx?$': ['ts-jest', {
            tsconfig: 'tsconfig.json',
            useESM: false
        }]
    },
    
    // Coverage configuration - only when explicitly requested
    collectCoverage: false,
    collectCoverageFrom: [
        'src/**/*.{ts,tsx}',
        '!src/**/*.d.ts',
        '!src/**/__tests__/**',
        '!src/**/*.test.{ts,tsx}',
        '!src/**/*.spec.{ts,tsx}',
        // Exclude Roblox entry points from coverage requirements
        '!src/client/main.client.ts',
        '!src/server/main.server.ts'
    ],
    coverageDirectory: 'coverage',
    coverageReporters: [
        'text',
        'text-summary',
        'lcov',
        'html',
        'json-summary'
    ],
    
    // Adjusted coverage thresholds for Roblox project structure
    coverageThreshold: {
        global: {
            branches: 50,
            functions: 60,
            lines: 60,
            statements: 60
        }
    },
    
    // Setup files
    setupFilesAfterEnv: ['<rootDir>/src/__tests__/setup.ts'],
    
    // Clear mocks between tests
    clearMocks: true,
    restoreMocks: true,
    
    // Verbose output for better debugging
    verbose: true,
    
    // Error handling
    errorOnDeprecated: true,
    
    // Performance
    maxWorkers: '50%',
    
    // Test timeout
    testTimeout: 10000
};