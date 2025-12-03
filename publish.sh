#!/bin/bash

# UI Development Kiro Power - GitHub Publication Script
# This script automates the process of publishing to GitHub

set -e  # Exit on error

echo "🚀 UI Development Kiro Power - GitHub Publication"
echo "=================================================="
echo ""

# Check if gh CLI is installed
if ! command -v gh &> /dev/null; then
    echo "❌ GitHub CLI (gh) is not installed."
    echo ""
    echo "Please install it first:"
    echo "  macOS:   brew install gh"
    echo "  Linux:   See https://github.com/cli/cli/blob/trunk/docs/install_linux.md"
    echo "  Windows: See https://github.com/cli/cli/releases"
    echo ""
    echo "Or follow the manual steps in PUBLISH.md"
    exit 1
fi

# Check if authenticated
if ! gh auth status &> /dev/null; then
    echo "❌ Not authenticated with GitHub."
    echo ""
    echo "Please run: gh auth login"
    exit 1
fi

echo "✅ GitHub CLI is installed and authenticated"
echo ""

# Get GitHub username
GH_USERNAME=$(gh api user -q .login)
echo "📝 GitHub username: $GH_USERNAME"
echo ""

# Confirm before proceeding
read -p "Create public repository 'ui-development-power'? (y/n) " -n 1 -r
echo ""
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ Cancelled"
    exit 1
fi

echo ""
echo "Step 1: Creating GitHub repository..."
gh repo create ui-development-power \
    --public \
    --description "Transform Kiro into an expert UI/UX developer with comprehensive guidance on accessibility, design systems, component libraries, and modern UI development practices." \
    --source=. \
    --remote=origin

echo "✅ Repository created"
echo ""

echo "Step 2: Pushing code to GitHub..."
git push -u origin main

echo "✅ Code pushed"
echo ""

echo "Step 3: Adding topics/tags..."
gh repo edit \
    --add-topic ui \
    --add-topic ux \
    --add-topic design \
    --add-topic accessibility \
    --add-topic figma \
    --add-topic react \
    --add-topic kiro \
    --add-topic kiro-power \
    --add-topic design-systems \
    --add-topic wcag \
    --add-topic component-libraries

echo "✅ Topics added"
echo ""

echo "Step 4: Enabling Issues and Discussions..."
gh repo edit --enable-issues --enable-discussions

echo "✅ Issues and Discussions enabled"
echo ""

echo "Step 5: Creating initial release (v0.1.0)..."
gh release create v0.1.0 \
    --title "v0.1.0 - Initial Release" \
    --notes-file RELEASE_NOTES.md

echo "✅ Release created"
echo ""

echo "=================================================="
echo "🎉 Publication Complete!"
echo "=================================================="
echo ""
echo "Repository URL: https://github.com/$GH_USERNAME/ui-development-power"
echo ""
echo "Next steps:"
echo "  1. Visit your repository and verify everything looks good"
echo "  2. Update RELEASE_NOTES.md with your actual GitHub username"
echo "  3. Share the power with the Kiro community"
echo "  4. Monitor issues and discussions"
echo ""
echo "Thank you for contributing to the Kiro ecosystem! 🙏"
