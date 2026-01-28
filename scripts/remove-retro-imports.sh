#!/bin/bash

# Script to remove retro.css imports from all components

echo "Removing retro.css imports from components..."

# Remove the import lines from all TypeScript/TSX files
find components/ui/design-ui -type f \( -name "*.tsx" -o -name "*.ts" \) \
  -exec sed -i '' '/import.*retro\.css/d' {} +

echo "✓ Removed all retro.css imports from design-ui components"
echo ""
echo "Note: retro.css is now imported globally in app/globals.css"
