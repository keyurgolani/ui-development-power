import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import { join } from 'path';

/**
 * Unit tests for configuration validation
 * Tests MCP server configuration parsing and structure
 */
describe('Configuration Tests', () => {
  const rootDir = process.cwd().endsWith('ui-development-power') 
    ? process.cwd() 
    : join(process.cwd(), 'ui-development-power');

  describe('MCP Server Configuration', () => {
    it('should have valid structure for all servers', () => {
      const mcpPath = join(rootDir, 'mcp.json');
      const config = JSON.parse(readFileSync(mcpPath, 'utf-8'));
      
      const servers = config.mcpServers;
      
      Object.entries(servers).forEach(([name, serverConfig]) => {
        expect(serverConfig).toHaveProperty('command');
        expect(serverConfig).toHaveProperty('args');
        expect(Array.isArray(serverConfig.args)).toBe(true);
      });
    });

    it('should configure Figma MCP server', () => {
      const mcpPath = join(rootDir, 'mcp.json');
      const config = JSON.parse(readFileSync(mcpPath, 'utf-8'));
      
      expect(config.mcpServers).toHaveProperty('figma');
    });

    it('should configure Playwright MCP server', () => {
      const mcpPath = join(rootDir, 'mcp.json');
      const config = JSON.parse(readFileSync(mcpPath, 'utf-8'));
      
      expect(config.mcpServers).toHaveProperty('playwright');
    });

    it('should configure Lighthouse MCP server', () => {
      const mcpPath = join(rootDir, 'mcp.json');
      const config = JSON.parse(readFileSync(mcpPath, 'utf-8'));
      
      expect(config.mcpServers).toHaveProperty('lighthouse');
    });
  });
});
