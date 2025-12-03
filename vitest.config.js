import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // Test environment
    environment: 'node',
    
    // Coverage configuration
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'tests/',
        '*.config.js',
      ],
    },
    
    // Test file patterns
    include: ['tests/**/*.test.js'],
    
    // Global test timeout (30 seconds)
    testTimeout: 30000,
    
    // Globals (optional, allows using describe/it without imports)
    globals: true,
  },
});
