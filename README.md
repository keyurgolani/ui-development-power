# UI Development Expert Power for Kiro

> Transform Kiro into an expert UI/UX developer capable of building accessible, modern, and design-system-compliant user interfaces.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![Version: 0.1.0](https://img.shields.io/badge/version-0.1.0-blue.svg)](./CHANGELOG.md)
[![WCAG 2.2 Level AA](https://img.shields.io/badge/WCAG-2.2%20Level%20AA-green.svg)](https://www.w3.org/WAI/WCAG22/quickref/)
[![Node.js >= 18](https://img.shields.io/badge/node-%3E%3D18-brightgreen.svg)](https://nodejs.org/)

## ⚠️ Early Release

This is an early attempt at creating a Kiro Power (v0.1.0). It's ready to be used and provides comprehensive UI development guidance, but we're actively seeking contributions, refinements, and polishing touches from the community. If you encounter issues or have ideas for improvements, please open an issue or submit a pull request!

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [Usage Examples](#usage-examples)
- [MCP Server Integration](#mcp-server-integration)
- [Steering Files](#steering-files)
- [Examples](#examples)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

The UI Development Power provides comprehensive guidance for building production-ready user interfaces with a focus on accessibility, modern design patterns, and best practices. Whether you're building a simple form or a complex design system, this power gives Kiro the expertise to help you create beautiful, accessible, and performant UIs.

### What This Power Does

- **Accessibility-First**: Automatically ensures WCAG 2.2 Level AA compliance in all generated code
- **Component Library Expertise**: Recommends the best libraries (Chakra UI, Radix UI, MUI, etc.) for your needs
- **Design-to-Code**: Seamlessly converts Figma designs to production-ready React components
- **Responsive Design**: Implements mobile-first patterns that work across all devices
- **Automated Testing**: Integrates Playwright for visual testing and Lighthouse for accessibility audits
- **Performance Optimization**: Builds fast, efficient UIs with lazy loading and optimized animations

## ✨ Features

### Core Capabilities

- ✅ **WCAG 2.2 Level AA Compliance** - Automatic accessibility best practices
- ✅ **12 Specialized Steering Files** - Context-aware guidance for every UI challenge
- ✅ **3 MCP Server Integrations** - Figma, Playwright, and Lighthouse
- ✅ **Component Library Recommendations** - Expert guidance on choosing the right tools
- ✅ **Design System Support** - Create and maintain consistent design systems
- ✅ **Mobile-First Responsive Design** - Layouts that work on all devices
- ✅ **Form Design Patterns** - Accessible, user-friendly forms with validation
- ✅ **Performance Optimization** - Fast, efficient UI implementations
- ✅ **Visual Regression Testing** - Automated screenshot comparison
- ✅ **Accessibility Audits** - Automated WCAG compliance checking

### Supported Technologies

- **Frameworks**: React, Vue, Svelte, and more
- **Component Libraries**: Chakra UI, Radix UI, Headless UI, MUI, shadcn/ui, Ant Design, Fluent UI
- **Styling**: Tailwind CSS, CSS Modules, styled-components, Emotion
- **Build Tools**: Vite, Next.js, Create React App, Remix
- **Testing**: Playwright, Lighthouse, axe-core

## 📦 Installation

### Prerequisites

- **Node.js 18 or higher** - [Download here](https://nodejs.org/)
- **Kiro IDE** - [Get Kiro](https://kiro.ai/)
- **npm, yarn, or pnpm** - Package manager (comes with Node.js)

### Install the Power

1. **Open Kiro** and navigate to the Powers panel
2. **Search** for "UI Development Expert" or use the command palette
3. **Click Install** to add the power to your workspace

Alternatively, you can manually install by cloning this repository into your Kiro powers directory:

```bash
# Clone the repository
git clone https://github.com/your-org/ui-development-power.git

# Navigate to your Kiro powers directory
cd ~/.kiro/powers/

# Copy the power
cp -r /path/to/ui-development-power ./ui-development
```

### Configure MCP Servers (Optional)

The power includes three MCP servers for enhanced functionality:

#### 1. Figma MCP Server

Access Figma design files and extract components:

```bash
# Get your Figma API token from:
# https://www.figma.com/developers/api#access-tokens

# Set the environment variable
export FIGMA_API_KEY="your_figma_api_token_here"
```

#### 2. Playwright MCP Server

For browser automation and visual testing:

```bash
# Install Playwright browsers
npx playwright install
```

#### 3. Lighthouse MCP Server

For accessibility and performance audits (no setup required):

```bash
# Lighthouse will be automatically installed via npx
```

## 🚀 Quick Start

### 1. Activate the Power

Open Kiro and activate the UI Development Power. You'll be guided through an onboarding process:

```
Step 1: Environment validation (Node.js version check)
Step 2: MCP server configuration
Step 3: Project context gathering
Step 4: Automated hook setup
```

### 2. Ask Your First Question

Try asking Kiro:

```
"Help me build an accessible login form with email and password fields"
```

Kiro will automatically:

- Load the relevant steering files (accessibility-standards.md, form-design-patterns.md)
- Generate WCAG-compliant code
- Include proper labels, ARIA attributes, and keyboard navigation
- Implement inline validation with helpful error messages

### 3. Explore the Examples

Check out the [examples directory](./examples/) for complete, runnable code:

- [Accessible Form](./examples/accessible-form.md) - Complete form with validation
- [Responsive Layout](./examples/responsive-layout.md) - Mobile-first responsive design
- [Figma to React](./examples/figma-to-react.md) - Design-to-code workflow

## 💡 Usage Examples

### Example 1: Component Library Selection

**Ask Kiro:**

```
"I need to build a dashboard with data tables and charts. Which component library should I use?"
```

**Kiro will:**

- Analyze your requirements (enterprise features, data visualization)
- Recommend Ant Design or Fluent UI
- Provide integration steps
- Show code examples

### Example 2: Accessibility Audit

**Ask Kiro:**

```
"Run an accessibility audit on my login page at http://localhost:3000/login"
```

**Kiro will:**

- Use the Lighthouse MCP server
- Run WCAG 2.2 Level AA compliance checks
- Report violations with specific fixes
- Provide code examples for remediation

### Example 3: Figma to Code

**Ask Kiro:**

```
"Convert this Figma design to a React component: [Figma URL]"
```

**Kiro will:**

- Access the Figma file via MCP server
- Extract design tokens (colors, spacing, typography)
- Generate React component code
- Apply your design system tokens
- Ensure accessibility compliance

### Example 4: Responsive Layout

**Ask Kiro:**

```
"Create a responsive navigation bar that collapses to a hamburger menu on mobile"
```

**Kiro will:**

- Load responsive-design-patterns.md steering file
- Generate mobile-first CSS
- Implement accessible hamburger menu
- Include keyboard navigation
- Use appropriate breakpoints

### Example 5: Form Validation

**Ask Kiro:**

```
"Add inline validation to my signup form with real-time feedback"
```

**Kiro will:**

- Load form-design-patterns.md steering file
- Implement accessible error messages
- Add ARIA live regions for screen readers
- Use appropriate input types
- Provide helpful validation feedback

## 🔌 MCP Server Integration

### Figma MCP Server

**Capabilities:**

- Fetch design file structure and components
- Extract design tokens (colors, typography, spacing)
- Generate design system rules
- Access component specifications

**Usage:**

```
"Get the color palette from my Figma design system"
"Extract spacing tokens from this Figma file"
"Show me all button components in the design file"
```

### Playwright MCP Server

**Capabilities:**

- Capture screenshots across different devices
- Visual regression testing
- Cross-browser testing
- Automated UI testing

**Usage:**

```
"Take a screenshot of my homepage on mobile and desktop"
"Run visual regression tests on the login page"
"Test my form across Chrome, Firefox, and Safari"
```

### Lighthouse MCP Server

**Capabilities:**

- WCAG compliance checking
- Performance metrics
- SEO analysis
- Best practices validation

**Usage:**

```
"Run a Lighthouse audit on http://localhost:3000"
"Check accessibility compliance for my dashboard"
"Analyze performance metrics for the homepage"
```

## 📚 Steering Files

The power includes 12 specialized steering files that load automatically based on your questions:

### Core Guidance

| Steering File                                                       | Topics Covered                                                     | When It Loads                                      |
| ------------------------------------------------------------------- | ------------------------------------------------------------------ | -------------------------------------------------- |
| [ui-design-principles.md](./steering/ui-design-principles.md)       | Fundamental UI/UX concepts, visual hierarchy, user-centered design | Default fallback for general UI questions          |
| [accessibility-standards.md](./steering/accessibility-standards.md) | WCAG 2.2 Level AA requirements, ARIA attributes, semantic HTML     | Keywords: accessibility, a11y, wcag, screen reader |
| [accessibility-testing.md](./steering/accessibility-testing.md)     | Testing tools (axe-core, Lighthouse), automated checks             | Keywords: accessibility testing, audit             |

### Component & Design Systems

| Steering File                                                         | Topics Covered                                                        | When It Loads                                   |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | ----------------------------------------------- |
| [component-libraries.md](./steering/component-libraries.md)           | Chakra UI, Radix UI, MUI, shadcn/ui, Ant Design, Fluent UI comparison | Keywords: component library, chakra, radix, mui |
| [design-systems-guide.md](./steering/design-systems-guide.md)         | Design tokens, color palettes, typography scales, consistency         | Keywords: design system, design tokens          |
| [color-typography-spacing.md](./steering/color-typography-spacing.md) | Visual design tokens, color theory, type scales                       | Keywords: color, typography, spacing            |

### Workflows & Patterns

| Steering File                                                             | Topics Covered                                              | When It Loads                                      |
| ------------------------------------------------------------------------- | ----------------------------------------------------------- | -------------------------------------------------- |
| [figma-to-code-workflow.md](./steering/figma-to-code-workflow.md)         | Design-to-code process, token extraction, component mapping | Keywords: figma, design, mockup                    |
| [responsive-design-patterns.md](./steering/responsive-design-patterns.md) | Mobile-first principles, breakpoints, responsive images     | Keywords: responsive, mobile, breakpoint           |
| [form-design-patterns.md](./steering/form-design-patterns.md)             | Form UX, validation, error handling, input types            | Keywords: form, input, validation                  |
| [micro-interactions.md](./steering/micro-interactions.md)                 | Animations, transitions, performant motion                  | Keywords: animation, transition, micro-interaction |

### Testing & Performance

| Steering File                                                         | Topics Covered                                       | When It Loads                                    |
| --------------------------------------------------------------------- | ---------------------------------------------------- | ------------------------------------------------ |
| [browser-testing-workflow.md](./steering/browser-testing-workflow.md) | Cross-browser testing, visual regression, Playwright | Keywords: testing, playwright, visual regression |
| [performance-optimization.md](./steering/performance-optimization.md) | Image optimization, lazy loading, virtualization     | Keywords: performance, optimization, slow        |

## 📖 Examples

The power includes three complete, runnable examples:

### 1. [Accessible Form](./examples/accessible-form.md)

A complete form implementation demonstrating:

- Proper label associations
- Inline validation with error messages
- ARIA live regions for screen readers
- Keyboard navigation
- Color contrast compliance

### 2. [Responsive Layout](./examples/responsive-layout.md)

A mobile-first responsive layout showing:

- Flexible grid system
- Responsive breakpoints
- Mobile-optimized navigation
- Responsive images with srcset
- Touch-friendly interactive elements

### 3. [Figma to React](./examples/figma-to-react.md)

A complete Figma-to-code workflow demonstrating:

- Design token extraction
- Component mapping
- Design system integration
- Accessibility compliance
- Production-ready code

## 🔧 Troubleshooting

### Common Issues

#### Issue: "Node.js version too old"

**Problem:** Your Node.js version is below 18.

**Solution:**

```bash
# Check your current version
node --version

# Download Node.js 18+ from:
# https://nodejs.org/

# Or use nvm to upgrade:
nvm install 18
nvm use 18
```

#### Issue: "Figma authentication failed"

**Problem:** Invalid or missing FIGMA_API_KEY.

**Solution:**

```bash
# Get a new API token from Figma:
# https://www.figma.com/developers/api#access-tokens

# Set the environment variable
export FIGMA_API_KEY="your_token_here"

# For permanent setup, add to your shell profile:
echo 'export FIGMA_API_KEY="your_token_here"' >> ~/.zshrc
source ~/.zshrc
```

#### Issue: "Playwright browsers not installed"

**Problem:** Playwright browser binaries are missing.

**Solution:**

```bash
# Install all browsers
npx playwright install

# Or install specific browsers
npx playwright install chromium
npx playwright install firefox
npx playwright install webkit
```

#### Issue: "Lighthouse audit failed"

**Problem:** Invalid URL or network error.

**Solution:**

- Ensure the URL is valid and starts with `http://` or `https://`
- Check that your development server is running
- Verify network connectivity
- Try with a simpler page first

```bash
# Test with a simple page
"Run Lighthouse audit on http://localhost:3000"
```

#### Issue: "Steering file not loading"

**Problem:** Steering file missing or corrupted.

**Solution:**

```bash
# Verify all steering files exist
ls -la steering/

# Reinstall the power if files are missing
# Or restore from the repository
```

#### Issue: "MCP server not responding"

**Problem:** MCP server failed to start or timed out.

**Solution:**

```bash
# Check if npx is working
npx --version

# Try running the MCP server manually
npx -y figma-developer-mcp --stdio

# Clear npx cache if needed
rm -rf ~/.npm/_npx
```

### Getting Help

If you encounter issues not covered here:

1. **Check the [Issues](https://github.com/your-org/ui-development-power/issues)** - Someone may have already reported it
2. **Open a new issue** - Provide details about your environment and the problem
3. **Join the discussion** - Ask questions in [GitHub Discussions](https://github.com/your-org/ui-development-power/discussions)

## 🤝 Contributing

We welcome contributions! See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

### Quick Contribution Guide

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/new-steering-file`
3. **Make your changes**
4. **Test thoroughly**
5. **Submit a pull request**

### Areas for Contribution

- **New steering files** - Add guidance for new UI topics
- **Example improvements** - Enhance existing examples or add new ones
- **Documentation** - Improve clarity and add more use cases
- **Bug fixes** - Fix issues and improve reliability
- **MCP server integrations** - Add new tool integrations

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## 🙏 Acknowledgments

- **WCAG Guidelines** - [W3C Web Accessibility Initiative](https://www.w3.org/WAI/)
- **Component Libraries** - Chakra UI, Radix UI, MUI, and all the amazing open-source projects
- **MCP Servers** - Figma, Playwright, and Lighthouse teams
- **Kiro Community** - For feedback and contributions

## 📞 Support

- **Documentation**: [Full documentation](./POWER.md)
- **Issues**: [GitHub Issues](https://github.com/your-org/ui-development-power/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-org/ui-development-power/discussions)
- **Email**: support@kiro.ai

---

**Built with ❤️ for the Kiro community**

Ready to build amazing UIs? Install the power and start creating accessible, beautiful, and performant user interfaces today!
