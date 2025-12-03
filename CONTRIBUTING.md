# Contributing to UI Development Kiro Power

Thank you for your interest in contributing! This document provides guidelines for contributing to the UI Development Power.

## Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inclusive environment for all contributors, regardless of experience level, gender identity, sexual orientation, disability, personal appearance, race, ethnicity, age, religion, or nationality.

### Our Standards

**Positive behaviors include:**

- Using welcoming and inclusive language
- Being respectful of differing viewpoints and experiences
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

**Unacceptable behaviors include:**

- Harassment, trolling, or discriminatory comments
- Personal or political attacks
- Publishing others' private information without permission
- Other conduct which could reasonably be considered inappropriate

## How to Contribute

### Reporting Bugs

Before creating a bug report:

1. Check existing issues to avoid duplicates
2. Verify the bug exists in the latest version
3. Collect relevant information (OS, Node.js version, Kiro version)

**Bug reports should include:**

- Clear, descriptive title
- Steps to reproduce the issue
- Expected vs actual behavior
- Screenshots or error messages (if applicable)
- Environment details

### Suggesting Enhancements

Enhancement suggestions are welcome! Please:

1. Check if the enhancement has already been suggested
2. Provide a clear use case and rationale
3. Describe the expected behavior
4. Consider implementation complexity

### Pull Request Process

1. **Fork the repository** and create a branch from `main`
2. **Make your changes** following our coding standards
3. **Test your changes** thoroughly
4. **Update documentation** if needed
5. **Submit a pull request** with a clear description

## Contributing Guidelines

### Adding New Steering Files

Steering files provide context-aware guidance on specific UI/UX topics.

**Structure requirements:**

- Clear title and overview section
- Core concepts with explanations
- Practical code examples (good and bad patterns)
- Best practices section
- Testing guidance
- Resources and external links

**File naming:**

- Use kebab-case: `my-new-topic.md`
- Be descriptive and specific
- Place in `steering/` directory

**Content guidelines:**

- Focus on actionable guidance
- Include runnable code examples
- Provide both good and bad examples
- Link to authoritative sources
- Keep language clear and concise

**After creating a steering file:**

1. Add routing keywords to `POWER.md`
2. Update "When to Load Steering Files" section
3. Add to Property 1 test in test suite
4. Update README.md if it's a major addition

### Adding Examples

Examples demonstrate complete, working implementations.

**Requirements:**

- Place in `examples/` directory
- Include a README.md explaining the example
- Provide runnable code (not just snippets)
- Follow accessibility best practices
- Include comments explaining key concepts

**Example structure:**

```
examples/
  my-example/
    README.md
    index.html
    styles.css
    script.js
```

### Improving Existing Content

Improvements to existing steering files and documentation are highly valued:

- Fix typos or grammatical errors
- Clarify confusing explanations
- Add missing code examples
- Update outdated information
- Improve code quality in examples

### Adding MCP Server Integrations

To propose a new MCP server integration:

1. **Justify the addition**: Explain the use case and benefits
2. **Verify availability**: Ensure the MCP server is publicly available
3. **Document integration**: Provide setup instructions
4. **Update configuration**: Add to `mcp.json` template
5. **Add examples**: Show how to use the integration
6. **Update tests**: Add to Property 3 test

### Testing Requirements

All contributions should maintain or improve test coverage:

**For new features:**

- Add unit tests for new functions
- Add property-based tests for universal properties
- Update integration tests if needed
- Ensure all tests pass

**For bug fixes:**

- Add a test that reproduces the bug
- Verify the fix resolves the issue
- Ensure no regressions

**Running tests:**

```bash
npm test                 # Run all tests
npm run test:unit       # Run unit tests only
npm run test:property   # Run property-based tests
npm run test:coverage   # Generate coverage report
```

## Coding Standards

### Markdown Style

- Use ATX-style headers (`#` not underlines)
- One sentence per line for easier diffs
- Use fenced code blocks with language identifiers
- Keep line length reasonable (80-100 characters)
- Use relative links for internal references

### Code Examples

- Follow language-specific best practices
- Include comments for complex logic
- Use meaningful variable names
- Demonstrate accessibility best practices
- Keep examples focused and minimal

### Documentation

- Write in clear, concise language
- Use active voice
- Avoid jargon when possible
- Define technical terms when necessary
- Provide context for recommendations

## Review Process

### What to Expect

1. **Initial review**: Maintainers will review within 1 week
2. **Feedback**: You may receive requests for changes
3. **Iteration**: Make requested changes and push updates
4. **Approval**: Once approved, your PR will be merged
5. **Recognition**: Contributors are acknowledged in releases

### Review Criteria

- **Correctness**: Code works as intended
- **Quality**: Follows coding standards
- **Testing**: Adequate test coverage
- **Documentation**: Clear and complete
- **Accessibility**: Follows WCAG guidelines
- **Performance**: No unnecessary performance impact

## Development Setup

### Prerequisites

- Node.js 18 or higher
- npm, yarn, or pnpm
- Git

### Setup Steps

1. **Clone your fork**:

   ```bash
   git clone https://github.com/YOUR-USERNAME/ui-development-power.git
   cd ui-development-power
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Create a branch**:

   ```bash
   git checkout -b feature/my-new-feature
   ```

4. **Make changes and test**:

   ```bash
   npm test
   ```

5. **Commit changes**:

   ```bash
   git add .
   git commit -m "Add: brief description of changes"
   ```

6. **Push to your fork**:

   ```bash
   git push origin feature/my-new-feature
   ```

7. **Create pull request** on GitHub

### Commit Message Guidelines

Use clear, descriptive commit messages:

- `Add: new feature or file`
- `Fix: bug fix`
- `Update: changes to existing functionality`
- `Docs: documentation changes`
- `Test: test additions or changes`
- `Refactor: code restructuring`

## Questions?

- **GitHub Issues**: For bug reports and feature requests
- **GitHub Discussions**: For questions and general discussion
- **Pull Requests**: For code contributions

Thank you for contributing to the UI Development Power! 🎉
