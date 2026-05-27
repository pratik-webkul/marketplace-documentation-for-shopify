# Zenith Documentation Maintainer Skill

This skill performs automated maintenance on Zenith documentation files.

## Tasks

### Task A: Global URL Replacement (Shopify)
- Replaces `https://multivendor-marketplace-5.myshopify.com/` with `https://egsma.io/shopify-multivendor-marketplace/`

### Task B: Global URL Replacement (UVDesk)
- Replaces `https://webkul.uvdesk.com/` (standalone URL) with `https://webkul.uvdesk.com/en/customer/create-ticket/`
- Preserves URLs that already have specific paths

### Task C: Dynamic Heading Insertion
- Adds "User Guide for [App Name]" heading to Featured App section files
- Extracts app name from frontmatter title or filename
- Converts kebab-case to Title Case (e.g., "seller-time-slot-management" → "Seller Time Slot Management")

## Persistence

To apply these rules automatically to new files, run:

```bash
bash .kilocode/skills/zenith-updater/update_docs.sh
```

Or add to git hook or CI/CD pipeline.

## Implementation

The Python script (`process_all.py`) handles all three tasks in a single pass.