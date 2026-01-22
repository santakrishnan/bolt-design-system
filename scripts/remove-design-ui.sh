#!/bin/bash

echo "Replacing design-ui imports with regular shadcn/ui imports..."

# Replace all design-ui imports with regular ui imports
find . -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) \
  -not -path "*/node_modules/*" \
  -not -path "*/.next/*" \
  -not -path "*/.git/*" \
  -exec sed -i '' 's/@\/components\/ui\/design-ui\//@\/components\/ui\//g' {} +

echo "✓ Replaced all design-ui imports"
echo ""
echo "Note: Some components may need manual fixes if they don't exist in shadcn/ui"
