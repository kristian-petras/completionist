# Testing Setup

This project uses **Jest** with TypeScript support for comprehensive testing.

## Available Scripts

```bash
npm test              # Run tests in watch mode
npm run test:watch    # Run tests in watch mode (alias)
npm run test:coverage # Run tests with coverage report
npm run test:ci       # Run tests for CI (no watch, with coverage)
```

## Test Structure

- **Tests Location**: `src/**/*.{test,spec}.{ts,tsx}` and `src/**/__tests__/**/*.{ts,tsx}`
- **Setup File**: `src/__tests__/setup.ts` - Global test configuration
- **Test Helpers**: `src/__tests__/helpers/` - Reusable test utilities

## Coverage

- **Thresholds**: 70% for functions, lines, and statements; 60% for branches
- **Excluded**: Client/server files, test files, and type definitions
- **Reports**: Text summary, HTML report (`coverage/`), and LCOV for CI

## Best Practices

1. **Naming**: Use descriptive test names with `should` statements
2. **Structure**: Group related tests with `describe` blocks
3. **Setup**: Use `beforeEach` for test isolation
4. **Mocking**: Use Jest mocks for external dependencies
5. **Coverage**: Aim for meaningful tests, not just coverage numbers

## Example Test

```typescript
import { describe, it, expect, beforeEach } from '@jest/globals';
import { MyClass } from '../MyClass';

describe('MyClass', () => {
    let instance: MyClass;

    beforeEach(() => {
        instance = new MyClass();
    });

    it('should initialize with default values', () => {
        expect(instance.getValue()).toBe(0);
    });
});
```