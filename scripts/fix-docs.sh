#!/bin/bash

echo "Fixing documentation references..."

# Replace all design-ui imports with regular ui imports in MDX files
find content/docs -type f -name "*.mdx" \
  -exec sed -i '' 's|@/components/ui/design-ui/|@/components/ui/|g' {} +

echo "✓ Updated all design-ui imports to regular ui imports"

# Remove documentation for components that no longer exist
REMOVED_COMPONENTS=(
  "enemy-health-display"
  "health-bar"
  "mana-bar"
  "xp-bar"
  "spinner"
  "empty"
  "item"
)

for component in "${REMOVED_COMPONENTS[@]}"; do
  if [ -f "content/docs/components/${component}.mdx" ]; then
    rm "content/docs/components/${component}.mdx"
    echo "✓ Removed docs for ${component}"
  fi
done

echo ""
echo "Documentation cleanup complete!"
