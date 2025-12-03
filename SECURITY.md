# Security Policy

## Supported Versions

We release patches for security vulnerabilities in the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 0.1.x   | :white_check_mark: |

## Reporting a Vulnerability

We take the security of the UI Development Power seriously. If you discover a security vulnerability, please follow these steps:

### 1. Do Not Open a Public Issue

Please **do not** open a public GitHub issue for security vulnerabilities. This helps prevent malicious actors from exploiting the vulnerability before a fix is available.

### 2. Report Privately

Send a detailed report to **security@kiro.ai** with the following information:

- **Description**: A clear description of the vulnerability
- **Impact**: What could an attacker do with this vulnerability?
- **Steps to Reproduce**: Detailed steps to reproduce the issue
- **Affected Versions**: Which versions are affected?
- **Suggested Fix**: If you have ideas for how to fix it (optional)
- **Your Contact Information**: So we can follow up with questions

### 3. Response Timeline

- **Initial Response**: Within 48 hours of receiving your report
- **Status Update**: Within 7 days with our assessment and planned fix timeline
- **Fix Release**: Typically within 30 days, depending on complexity
- **Public Disclosure**: After the fix is released and users have had time to update

### 4. Coordinated Disclosure

We follow a coordinated disclosure process:

1. We'll work with you to understand and validate the vulnerability
2. We'll develop and test a fix
3. We'll release the fix in a new version
4. We'll publish a security advisory with credit to you (if desired)
5. We'll notify users to update to the patched version

## Security Best Practices for Users

### API Key Management

**Figma API Keys:**

- Never commit API keys to version control
- Use environment variables: `export FIGMA_API_KEY="your_key"`
- Rotate keys regularly
- Revoke unused keys immediately
- Use separate keys for development and production

**Example - Secure Key Storage:**

```bash
# Add to your shell profile (e.g., ~/.zshrc or ~/.bashrc)
export FIGMA_API_KEY="your_key_here"

# Or use a .env file (ensure it's in .gitignore)
echo "FIGMA_API_KEY=your_key_here" >> .env
```

### MCP Server Security

**Server Execution:**

- MCP servers run in isolated processes
- Review server code before installation
- Only install servers from trusted sources
- Keep servers updated to latest versions

**Network Security:**

- Playwright and Lighthouse connect to local browsers only
- Figma MCP communicates over HTTPS
- No data is sent to third parties except Figma API

### Dependency Security

**Regular Updates:**

```bash
# Check for outdated dependencies
npm outdated

# Update dependencies
npm update

# Audit for vulnerabilities
npm audit

# Fix vulnerabilities automatically
npm audit fix
```

### File Permissions

**Steering Files:**

- Steering files are read-only markdown documents
- No executable code in steering files
- Safe to review and modify

**Configuration Files:**

- Ensure `mcp.json` has appropriate permissions
- Don't expose configuration files publicly
- Review changes to configuration carefully

## Known Security Considerations

### 1. MCP Server Execution

**Risk**: MCP servers execute external commands via `npx`

**Mitigation**:

- Servers are from trusted sources (Figma, Playwright, Lighthouse)
- User approval required for MCP server installation
- Servers run in isolated processes
- No direct file system access from steering files

### 2. Figma API Access

**Risk**: API key grants access to Figma files

**Mitigation**:

- Keys stored in environment variables (not in code)
- Kiro handles secure storage
- Users control which files are accessed
- Keys can be revoked at any time

### 3. Browser Automation

**Risk**: Playwright can control browser instances

**Mitigation**:

- Only connects to local browser instances
- User initiates all browser actions
- No remote browser control
- Browsers run in isolated contexts

### 4. Code Generation

**Risk**: Generated code could contain vulnerabilities

**Mitigation**:

- All generated code follows WCAG 2.2 Level AA standards
- Accessibility-first approach prevents common XSS vectors
- Semantic HTML reduces attack surface
- Users should review generated code before deployment

## Security Updates

We monitor dependencies and MCP servers for security vulnerabilities:

- **Automated Scanning**: GitHub Dependabot alerts
- **Manual Review**: Monthly security audit of dependencies
- **Rapid Response**: Critical vulnerabilities patched within 7 days
- **Communication**: Security advisories published for all vulnerabilities

## Security Checklist for Contributors

If you're contributing code, please ensure:

- [ ] No hardcoded credentials or API keys
- [ ] No execution of arbitrary user input
- [ ] Dependencies are from trusted sources
- [ ] New dependencies are security-audited
- [ ] Code examples follow security best practices
- [ ] Documentation includes security considerations
- [ ] Tests cover security-relevant scenarios

## Vulnerability Disclosure Policy

### Our Commitment

- We will respond to security reports promptly
- We will keep you informed throughout the process
- We will credit you in security advisories (if desired)
- We will not take legal action against security researchers acting in good faith

### Your Commitment

- Give us reasonable time to fix the vulnerability before public disclosure
- Do not exploit the vulnerability beyond what's necessary to demonstrate it
- Do not access, modify, or delete user data
- Do not perform denial-of-service attacks

## Security Hall of Fame

We recognize security researchers who help keep our users safe:

_No vulnerabilities reported yet. Be the first to help secure the UI Development Power!_

## Additional Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Node.js Security Best Practices](https://nodejs.org/en/docs/guides/security/)
- [GitHub Security Advisories](https://docs.github.com/en/code-security/security-advisories)
- [npm Security Best Practices](https://docs.npmjs.com/security-best-practices)

## Questions?

If you have questions about security that don't involve reporting a vulnerability, please:

- Open a [GitHub Discussion](https://github.com/your-org/ui-development-power/discussions)
- Email us at security@kiro.ai
- Check our [documentation](./POWER.md)

---

**Last Updated**: December 2024

Thank you for helping keep the UI Development Power and our users secure!
