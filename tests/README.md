# UI Development Power - Test Suite

This directory contains the test suite for the UI Development Kiro Power.

## Directory Structure

```
tests/
├── unit/              # Unit tests for specific components
│   ├── file-structure.test.js
│   ├── content-validation.test.js
│   └── configuration.test.js
├── property/          # Property-based tests using fast-check
│   └── README.md
└── README.md          # This file
```

## Test Types

### Unit Tests

Unit tests validate discrete components and functions:

- **File Structure Tests**: Verify all required files exist in correct locations
- **Content Validation Tests**: Validate file contents and structure
- **Configuration Tests**: Test MCP server configuration parsing

### Property-Based Tests

Property-based tests verify universal properties hold across all inputs using fast-check.
Each property test runs a minimum of 100 iterations.

Property tests are marked as optional tasks in the implementation plan and will be added incrementally.

## Running Tests

```bash
# Run all tests once
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage report
npm run test:coverage

# Run tests with UI
npm run test:ui
```

## Test Configuration

Tests are configured using `vitest.config.js` in the root directory.

- **Test Environment**: Node.js
- **Test Timeout**: 30 seconds
- **Coverage Provider**: v8
- **Test Pattern**: `tests/**/*.test.js`

## Writing Tests

### Unit Test Example

```javascript
import { describe, it, expect } from "vitest";

describe("Feature Name", () => {
  it("should do something specific", () => {
    // Arrange
    const input = "test";

    // Act
    const result = someFunction(input);

    // Assert
    expect(result).toBe("expected");
  });
});
```

### Property-Based Test Example

```javascript
import { describe, it } from "vitest";
import fc from "fast-check";

describe("Property Name", () => {
  it("should hold for all valid inputs", () => {
    // Feature: ui-development-power, Property X: Property description
    fc.assert(
      fc.property(
        fc.string(), // Generator
        (input) => {
          // Property that should always be true
          const result = someFunction(input);
          return result.length >= 0;
        }
      ),
      { numRuns: 100 } // Minimum 100 iterations
    );
  });
});
```

## Test Requirements

- All tests must be deterministic
- Property-based tests must run at least 100 iterations
- Tests must not use mocks for core functionality validation
- Each property test must include a comment tag referencing the design document property
- Test names should clearly describe what is being tested

## Continuous Integration

Tests are run automatically on:

- Pre-commit (via git hooks)
- Pull requests (via CI/CD pipeline)
- Before releases

Target test coverage: >80%
