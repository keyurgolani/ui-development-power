import { describe, it, expect } from 'vitest';
import { existsSync, readFileSync } from 'fs';
import { join } from 'path';

/**
 * Unit tests for file structure validation
 * Validates that all required files exist in correct locations
 */
describe('File Structure Validation', () => {
  const rootDir = process.cwd().endsWith('ui-development-power') 
    ? process.cwd() 
    : join(process.cwd(), 'ui-development-power');

  it('should have POWER.md in root directory', () => {
    const powerPath = join(rootDir, 'POWER.md');
    expect(existsSync(powerPath)).toBe(true);
  });

  it('should have mcp.json in root directory', () => {
    const mcpPath = join(rootDir, 'mcp.json');
    expect(existsSync(mcpPath)).toBe(true);
  });

  it('should have README.md in root directory', () => {
    const readmePath = join(rootDir, 'README.md');
    expect(existsSync(readmePath)).toBe(true);
  });

  it('should have LICENSE in root directory', () => {
    const licensePath = join(rootDir, 'LICENSE');
    expect(existsSync(licensePath)).toBe(true);
  });

  it('should have CONTRIBUTING.md in root directory', () => {
    const contributingPath = join(rootDir, 'CONTRIBUTING.md');
    expect(existsSync(contributingPath)).toBe(true);
  });

  it('should have CHANGELOG.md in root directory', () => {
    const changelogPath = join(rootDir, 'CHANGELOG.md');
    expect(existsSync(changelogPath)).toBe(true);
  });

  it('should have steering directory', () => {
    const steeringDir = join(rootDir, 'steering');
    expect(existsSync(steeringDir)).toBe(true);
  });

  it('should have examples directory', () => {
    const examplesDir = join(rootDir, 'examples');
    expect(existsSync(examplesDir)).toBe(true);
  });
});
