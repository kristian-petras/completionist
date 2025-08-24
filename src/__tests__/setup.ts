// Global test setup file
import { beforeEach, jest } from "@jest/globals";

// Setup global mocks
beforeEach(() => {
    // Reset any global state before each test
    jest.clearAllMocks();
});

// Configure test timeout
jest.setTimeout(10000);
