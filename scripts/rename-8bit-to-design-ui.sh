#!/bin/bash

# Script to rename @8bitcn to design-ui and 8bit folder to design-ui

echo "Starting rename from @8bitcn to design-ui and 8bit to design-ui..."

# 1. Replace @8bitcn with design-ui in all files
echo "Replacing @8bitcn with design-ui in all files..."
find . -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" -o -name "*.json" -o -name "*.md" -o -name "*.mdx" \) \
  -not -path "*/node_modules/*" \
  -not -path "*/.next/*" \
  -not -path "*/.git/*" \
  -exec sed -i '' 's/@8bitcn/design-ui/g' {} +

# 2. Replace /8bit/ with /design-ui/ in all files
echo "Replacing /8bit/ with /design-ui/ in all files..."
find . -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" -o -name "*.json" -o -name "*.md" -o -name "*.mdx" \) \
  -not -path "*/node_modules/*" \
  -not -path "*/.next/*" \
  -not -path "*/.git/*" \
  -exec sed -i '' 's/\/8bit\//\/design-ui\//g' {} +

# 3. Rename the actual directory
echo "Renaming components/ui/8bit to components/ui/design-ui..."
if [ -d "components/ui/8bit" ]; then
  mv components/ui/8bit components/ui/design-ui
  echo "✓ Directory renamed"
else
  echo "⚠ Directory components/ui/8bit not found"
fi

echo ""
echo "✓ Rename complete!"
echo ""
echo "Next steps:"
echo "1. Run: pnpm fix"
echo "2. Review changes with: git diff"
echo "3. Test the application: pnpm dev"
