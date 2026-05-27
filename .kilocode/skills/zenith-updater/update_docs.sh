#!/bin/bash

# Zenith Documentation Maintainer Script
# Performs automated maintenance on Zenith documentation files

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "=== Zenith Documentation Maintainer ==="
echo ""

# Run Python processor
echo "Running URL replacements and heading insertion..."
python3 "$SCRIPT_DIR/process_all.py"

echo ""
echo "Documentation maintenance complete!"