#!/usr/bin/env python3
"""
Zenith Documentation Maintainer - Master Script
Performs global URL replacements and heading insertion for all Zenith documentation files

Tasks:
A. Replace https://multivendor-marketplace-5.myshopify.com/ with https://egsma.io/shopify-multivendor-marketplace/
B. Replace https://webkul.uvdesk.com/ with https://webkul.uvdesk.com/en/customer/create-ticket/
C. Add "User Guide for [App Name]" heading to all markdown files
"""

import os
import re
from pathlib import Path

ZENITH_DIR = Path("/home/chirag/marketplace-documentation/zenith")

def get_heading(file_path, lines):
    """Generate appropriate heading based on file path and content."""
    # Skip index.md files
    if file_path.name == 'index.md':
        return None
    
    # Find frontmatter title
    frontmatter_title = None
    for line in lines[:10]:
        if line.startswith('title:'):
            frontmatter_title = line.replace('title:', '').strip()
            break
    
    if frontmatter_title and frontmatter_title not in ('', 'title'):
        # "SELLER TIME SLOT MANAGEMENT" -> "Seller Time Slot Management"
        heading_text = ' '.join(word.capitalize() for word in frontmatter_title.split())
        return f"User Guide for {heading_text}"
    
    return None

def process_file(file_path):
    """Process a single markdown file."""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    changes = []
    
    lines = content.split('\n')
    
    # Task A: Replace Shopify URL
    if 'multivendor-marketplace-5.myshopify.com' in content:
        content = re.sub(
            r'https?://multivendor-marketplace-5\.myshopify\.com/?',
            'https://egsma.io/shopify-multivendor-marketplace/',
            content
        )
        changes.append("Shopify URL replaced")
    
    # Task B: Replace UVDesk URL
    if 'webkul.uvdesk.com' in content:
        content = re.sub(
            r'https://webkul\.uvdesk\.com/$',
            'https://webkul.uvdesk.com/en/customer/create-ticket/',
            content
        )
        content = re.sub(
            r'http://webkul\.uvdesk\.com/$',
            'https://webkul.uvdesk.com/en/customer/create-ticket/',
            content
        )
        changes.append("UVDesk URL replaced")
    
    # Task C: Add heading to all files (if no heading exists)
    frontmatter_end = 0
    if lines and lines[0].strip() == '---':
        for i, line in enumerate(lines[1:], 1):
            if line.strip() == '---':
                frontmatter_end = i + 1
                break
    
    # Check if "User Guide for" heading already exists
    has_heading = False
    for line in lines[frontmatter_end:frontmatter_end+5]:
        if line.strip().startswith('# ') and 'User Guide for' in line:
            has_heading = True
            break
    
    # Only add heading if none exists and we can generate one from frontmatter
    if not has_heading:
        heading = get_heading(file_path, lines)
        if heading:
            lines.insert(frontmatter_end, '')
            lines.insert(frontmatter_end + 1, f"# {heading}")
            lines.insert(frontmatter_end + 2, '')
            content = '\n'.join(lines)
            changes.append(f"Added heading: {heading}")
    
    if content != original_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"[UPDATED] {file_path}")
        for change in changes:
            print(f"  -> {change}")

def main():
    print("=== Zenith Documentation Maintainer ===")
    print("Processing all markdown files in zenith directory...")
    
    count = 0
    files_updated = 0
    for md_file in ZENITH_DIR.rglob('*.md'):
        try:
            process_file(md_file)
            count += 1
        except Exception as e:
            print(f"[ERROR] {md_file}: {e}")
    
    print(f"\nProcessed {count} files")

if __name__ == '__main__':
    main()