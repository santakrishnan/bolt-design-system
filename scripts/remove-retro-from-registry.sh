#!/bin/bash

# Script to remove retro.css entries from registry.json

echo "Removing retro.css entries from registry.json..."

# Create a backup
cp registry.json registry.json.backup

# Use Python to properly remove the retro.css entries from the JSON
python3 << 'EOF'
import json

with open('registry.json', 'r') as f:
    data = json.load(f)

# Remove retro.css file entries from all items
for item in data.get('items', []):
    if 'files' in item:
        item['files'] = [
            file_entry for file_entry in item['files']
            if 'retro.css' not in file_entry.get('path', '')
        ]

with open('registry.json', 'w') as f:
    json.dump(data, f, indent=2)

print("✓ Removed all retro.css entries from registry.json")
EOF

echo ""
echo "Backup saved as registry.json.backup"
