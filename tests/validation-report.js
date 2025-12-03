#!/usr/bin/env node

/**
 * Comprehensive validation script for UI Development Power
 * Validates all aspects of the power before release
 */

import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

const rootDir = process.cwd();
const powerDir = join(rootDir, 'power');

console.log('🔍 UI Development Power - Final Validation Report\n');
console.log('='.repeat(60));

let totalChecks = 0;
let passedChecks = 0;
let failedChecks = 0;

function check(name, condition, details = '') {
  totalChecks++;
  if (condition) {
    passedChecks++;
    console.log(`✅ ${name}`);
    if (details) console.log(`   ${details}`);
  } else {
    failedChecks++;
    console.log(`❌ ${name}`);
    if (details) console.log(`   ${details}`);
  }
}

// 1. File Structure Validation
console.log('\n📁 File Structure');
console.log('-'.repeat(60));

const requiredRootFiles = [
  'README.md',
  'LICENSE',
  'CONTRIBUTING.md',
  'CHANGELOG.md',
  'package.json',
  'vitest.config.js',
];

requiredRootFiles.forEach(file => {
  const path = join(rootDir, file);
  check(`${file} exists`, existsSync(path));
});

const requiredPowerFiles = [
  'POWER.md',
  'mcp.json',
];

requiredPowerFiles.forEach(file => {
  const path = join(powerDir, file);
  check(`power/${file} exists`, existsSync(path));
});

// 2. Steering Files Validation
console.log('\n📚 Steering Files');
console.log('-'.repeat(60));

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

requiredSteeringFiles.forEach(file => {
  const path = join(powerDir, 'steering', file);
  const exists = existsSync(path);
  check(`power/steering/${file}`, exists);
  
  if (exists) {
    const content = readFileSync(path, 'utf-8');
    check(`  ${file} has content`, content.length > 100, `${content.length} bytes`);
  }
});

// 3. POWER.md Validation
console.log('\n📄 POWER.md Validation');
console.log('-'.repeat(60));

const powerPath = join(powerDir, 'POWER.md');
if (existsSync(powerPath)) {
  const powerContent = readFileSync(powerPath, 'utf-8');
  
  // Check frontmatter
  check('Has YAML frontmatter', powerContent.startsWith('---'));
  check('Contains name field', powerContent.includes('name:'));
  check('Contains displayName field', powerContent.includes('displayName:'));
  check('Contains description field', powerContent.includes('description:'));
  check('Contains keywords field', powerContent.includes('keywords:'));
  check('Contains mcpServers field', powerContent.includes('mcpServers:'));
  
  // Check required sections
  check('Has Overview section', powerContent.includes('## Overview'));
  check('Has Onboarding section', powerContent.includes('## Onboarding'));
  check('Has Core Principles section', powerContent.includes('## Core Principles'));
  check('Has Quick Reference section', powerContent.includes('## Quick Reference'));
  
  // Check keywords
  const hasKeywords = powerContent.includes('"ui"') || powerContent.includes('- ui');
  check('Has comprehensive keywords', hasKeywords, 'Keywords present');
}

// 4. MCP Configuration Validation
console.log('\n🔌 MCP Server Configuration');
console.log('-'.repeat(60));

const mcpPath = join(powerDir, 'mcp.json');
if (existsSync(mcpPath)) {
  try {
    const mcpConfig = JSON.parse(readFileSync(mcpPath, 'utf-8'));
    
    check('Valid JSON structure', !!mcpConfig);
    check('Has mcpServers object', !!mcpConfig.mcpServers);
    check('Configures Figma server', !!mcpConfig.mcpServers.figma);
    check('Configures Chrome DevTools server', !!mcpConfig.mcpServers['chrome-devtools']);
    
    // Validate Figma config
    if (mcpConfig.mcpServers.figma) {
      const figma = mcpConfig.mcpServers.figma;
      check('  Figma has command', !!figma.command);
      check('  Figma has args', Array.isArray(figma.args));
      check('  Figma has env', !!figma.env);
    }
    
    // Validate Chrome DevTools config
    if (mcpConfig.mcpServers['chrome-devtools']) {
      const chrome = mcpConfig.mcpServers['chrome-devtools'];
      check('  Chrome DevTools has command', !!chrome.command);
      check('  Chrome DevTools has args', Array.isArray(chrome.args));
    }
  } catch (error) {
    check('MCP JSON is valid', false, error.message);
  }
}

// 5. Examples Validation
console.log('\n📝 Examples');
console.log('-'.repeat(60));

const exampleFiles = [
  'accessible-form.md',
  'figma-to-react.md',
  'responsive-layout.md',
];

exampleFiles.forEach(file => {
  const path = join(powerDir, 'examples', file);
  check(`power/examples/${file}`, existsSync(path));
});

// 6. Documentation Validation
console.log('\n📖 Documentation');
console.log('-'.repeat(60));

const readmePath = join(rootDir, 'README.md');
if (existsSync(readmePath)) {
  const readme = readFileSync(readmePath, 'utf-8');
  
  check('README has title', readme.includes('# UI Development'));
  check('README has installation', readme.includes('## Installation') || readme.includes('## 📦 Installation'));
  check('README has usage', readme.includes('## Usage') || readme.includes('## Quick Start') || readme.includes('## 🚀 Quick Start') || readme.includes('## 💡 Usage Examples'));
  check('README has features', readme.includes('## Features') || readme.includes('## ✨ Features'));
}

const contributingPath = join(rootDir, 'CONTRIBUTING.md');
if (existsSync(contributingPath)) {
  const contributing = readFileSync(contributingPath, 'utf-8');
  check('CONTRIBUTING has guidelines', contributing.length > 100);
}

const changelogPath = join(rootDir, 'CHANGELOG.md');
if (existsSync(changelogPath)) {
  const changelog = readFileSync(changelogPath, 'utf-8');
  check('CHANGELOG has version', changelog.includes('0.1.0') || changelog.includes('[0.1.0]') || changelog.includes('1.0.0') || changelog.includes('[1.0.0]'));
}

// 7. Package Configuration
console.log('\n📦 Package Configuration');
console.log('-'.repeat(60));

const packagePath = join(rootDir, 'package.json');
if (existsSync(packagePath)) {
  try {
    const pkg = JSON.parse(readFileSync(packagePath, 'utf-8'));
    
    check('Has name', !!pkg.name);
    check('Has version', !!pkg.version);
    check('Has description', !!pkg.description);
    check('Has test script', !!pkg.scripts?.test);
    check('Has fast-check dependency', !!pkg.devDependencies?.['fast-check']);
    check('Has vitest dependency', !!pkg.devDependencies?.vitest);
  } catch (error) {
    check('package.json is valid', false, error.message);
  }
}

// 8. Test Infrastructure
console.log('\n🧪 Test Infrastructure');
console.log('-'.repeat(60));

const testDirs = ['tests/unit', 'tests/property'];
testDirs.forEach(dir => {
  const path = join(rootDir, dir);
  check(`${dir} directory exists`, existsSync(path));
});

const testFiles = [
  'tests/unit/file-structure.test.js',
  'tests/unit/configuration.test.js',
  'tests/unit/content-validation.test.js',
];

testFiles.forEach(file => {
  const path = join(rootDir, file);
  check(file, existsSync(path));
});

// Summary
console.log('\n' + '='.repeat(60));
console.log('📊 Validation Summary');
console.log('='.repeat(60));
console.log(`Total Checks: ${totalChecks}`);
console.log(`✅ Passed: ${passedChecks}`);
console.log(`❌ Failed: ${failedChecks}`);
console.log(`Success Rate: ${((passedChecks / totalChecks) * 100).toFixed(1)}%`);

if (failedChecks === 0) {
  console.log('\n🎉 All validation checks passed! Power is ready for use.');
  process.exit(0);
} else {
  console.log('\n⚠️  Some validation checks failed. Please review and fix.');
  process.exit(1);
}
