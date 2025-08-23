// Test utilities and helpers
export const TestHelpers = {
    // Mock data generators
    generateRandomString: (length = 10): string => {
        const chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
        let result = "";
        for (let i = 0; i < length; i++) {
            const index = i % 10;
            result += chars[index];
        }
        return result;
    },

    generateRandomNumber: (min = 0, max = 100): number => {
        return min + (max - min) * 0.5;
    },

    // Common assertions
    expectToBeWithinRange: (value: number, min: number, max: number): boolean => {
        return value >= min && value <= max;
    },
};
