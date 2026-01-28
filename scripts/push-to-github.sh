#!/bin/bash

# Script to push Bolt Design System to GitHub
# Usage: ./scripts/push-to-github.sh

set -e

echo "🚀 Bolt Design System - GitHub Push Script"
echo "=========================================="
echo ""

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo -e "${RED}❌ Git is not installed. Please install git first.${NC}"
    exit 1
fi

echo -e "${YELLOW}📋 Step 1: Checking current git status...${NC}"
git status

echo ""
echo -e "${YELLOW}📋 Step 2: Checking current remote...${NC}"
CURRENT_REMOTE=$(git remote get-url origin 2>/dev/null || echo "none")
echo "Current remote: $CURRENT_REMOTE"

if [[ "$CURRENT_REMOTE" != *"santakrishnan/bolt-design-system"* ]]; then
    echo ""
    echo -e "${YELLOW}⚠️  Remote is not set to bolt-design-system repository${NC}"
    read -p "Do you want to update the remote? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo "Removing old remote..."
        git remote remove origin 2>/dev/null || true
        
        echo "Adding new remote..."
        git remote add origin https://github.com/santakrishnan/bolt-design-system.git
        
        echo -e "${GREEN}✅ Remote updated successfully${NC}"
    else
        echo -e "${RED}❌ Aborted. Please update remote manually.${NC}"
        exit 1
    fi
fi

echo ""
echo -e "${YELLOW}📋 Step 3: Running linter...${NC}"
pnpm fix

echo ""
echo -e "${YELLOW}📋 Step 4: Staging all changes...${NC}"
git add .

echo ""
echo -e "${YELLOW}📋 Step 5: Creating commit...${NC}"
read -p "Enter commit message (or press Enter for default): " COMMIT_MSG

if [ -z "$COMMIT_MSG" ]; then
    COMMIT_MSG="feat: update design system with modern components"
fi

git commit -m "$COMMIT_MSG" || echo "No changes to commit"

echo ""
echo -e "${YELLOW}📋 Step 6: Checking branch...${NC}"
CURRENT_BRANCH=$(git branch --show-current)
echo "Current branch: $CURRENT_BRANCH"

if [ "$CURRENT_BRANCH" != "main" ]; then
    echo -e "${YELLOW}⚠️  You're not on the main branch${NC}"
    read -p "Do you want to switch to main? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        git checkout main || git checkout -b main
    fi
fi

echo ""
echo -e "${YELLOW}📋 Step 7: Pushing to GitHub...${NC}"
read -p "Ready to push to GitHub? (y/n) " -n 1 -r
echo

if [[ $REPLY =~ ^[Yy]$ ]]; then
    git push -u origin main
    
    echo ""
    echo -e "${GREEN}✅ Successfully pushed to GitHub!${NC}"
    echo ""
    echo "🎉 Next steps:"
    echo "1. Visit: https://github.com/santakrishnan/bolt-design-system"
    echo "2. Check Actions tab for deployment status"
    echo "3. Once deployed, visit: https://santakrishnan.github.io/bolt-design-system"
    echo ""
else
    echo -e "${YELLOW}⚠️  Push cancelled. You can push manually with: git push -u origin main${NC}"
fi

echo ""
echo -e "${GREEN}✨ Done!${NC}"
