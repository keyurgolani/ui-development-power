import { describe, it, expect } from 'vitest';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

/**
 * Unit tests for content validation
 * Verifies that files contain required sections and valid structure
 */
describe('Content Validation', () => {
  const rootDir = process.cwd().endsWith('ui-development-power') 
    ? process.cwd() 
    : join(process.cwd(), 'ui-development-power');

  describe('POWER.md validation', () => {
    it('should contain YAML frontmatter', () => {
      const powerPath = join(rootDir, 'POWER.md');
      const content = readFileSync(powerPath, 'utf-8');
      expect(content).toMatch(/^---\n[\s\S]+?\n---/);
    });

    it('should contain required sections', () => {
      const powerPath = join(rootDir, 'POWER.md');
      const content = readFileSync(powerPath, 'utf-8');
      
      expect(content).toContain('# Overview');
      expect(content).toContain('# Onboarding');
      expect(content).toContain('# Core Principles');
    });
  });

  describe('mcp.json validation', () => {
    it('should be valid JSON', () => {
      const mcpPath = join(rootDir, 'mcp.json');
      const content = readFileSync(mcpPath, 'utf-8');
      
      expect(() => JSON.parse(content)).not.toThrow();
    });

    it('should contain mcpServers configuration', () => {
      const mcpPath = join(rootDir, 'mcp.json');
      const content = JSON.parse(readFileSync(mcpPath, 'utf-8'));
      
      expect(content).toHaveProperty('mcpServers');
      expect(typeof content.mcpServers).toBe('object');
    });
  });

  describe('Steering files validation', () => {
    const requiredSteeringFiles = [
      'ui-design-principles.md',
      'accessibility-standards.md',
      'design-systems-guide.md',
      'component-libraries.md',
      'figma-to-code-workflow.md',
      'responsive-design-patterns.md',
      'color-typography-spacing.md',
      'accessibility-testing.md',
      'browser-testing-workflow.md',
      'micro-interactions.md',
      'form-design-patterns.md',
      'performance-optimization.md',
    ];

    requiredSteeringFiles.forEach((filename) => {
      it(`should have ${filename} in steering directory`, () => {
        const filePath = join(rootDir, 'steering', filename);
        expect(existsSync(filePath)).toBe(true);
      });
    });
  });
});
