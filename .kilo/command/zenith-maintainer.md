---
allowed-tools: Bash, Read, Glob, Grep, Write, Edit
description: Maintains Zenith documentation with automated URL replacements and heading insertion
---

# Zenith Maintainer Skill

This skill performs automated maintenance tasks on Zenith documentation files:

## Tasks

1. **URL Replacement (Shopify):** Replaces `https://multivendor-marketplace-5.myshopify.com/` with `https://egsma.io/shopify-multivendor-marketplace/`

2. **URL Replacement (UVDesk):** Replaces `https://webkul.uvdesk.com/` with `https://webkul.uvdesk.com/en/customer/create-ticket/` (preserves URLs with existing paths)

3. **Heading Insertion:** Adds "User Guide for [App Name]" heading at the top of Featured App section files

## Persistence

Run automatically on document changes or add to git hook:

```bash
bash .kilocode/skills/zenith-updater/update_docs.sh
```

## Scripts

- `process_all.py` - Main processor
- `update_docs.sh` - Runner script