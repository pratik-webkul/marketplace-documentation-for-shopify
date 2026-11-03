# Agent Management for Multivendor Marketplace Documentation

## Project Overview
This is the documentation repository for the **Webkul Multivendor Marketplace for Shopify**. The project contains comprehensive documentation for the multivendor marketplace app, including:

- Featured app add-ons and pricing
- Shipping configurations
- Payment processing
- Commission management
- Seller configuration
- Transaction charges

## Directory Structure
```
zenith/
├── featured-app/          # All featured app documentation
├── products/              # Product-related documentation
├── payment/               # Payment gateway documentation
├── Booking Product/       # Booking product features
├── seller/                # Seller management docs
├── subscription-plan/     # Plan configuration
└── dynamic%20Mockups/     # Print-on-demand docs
```

## Available Agent Types
This project supports the following agent types for documentation tasks:

### `explore` Agent
- **Purpose**: Codebase research, finding files by patterns, searching code for keywords
- **Best for**: Quick searches, moderate exploration, comprehensive analysis
- **Usage**: `task(description="...", prompt="...", subagent_type="explore")`

### `general` Agent
- **Purpose**: Research complex questions, execute multi-step tasks
- **Best for**: Multi-step tasks, implementing changes, analyzing documentation
- **Usage**: `task(description="...", prompt="...", subagent_type="general")`

## Common Commands
- `/explore` - Search and explore the codebase
- `/task` - Launch a subagent for complex tasks
- `/review` - Code review options
- `/question` - Ask clarifying questions

## Documentation Updates
When making changes to documentation:

1. **Always read the file first** before editing
2. **Use the `edit` tool** for exact string replacements
3. **Preferred**: Edit existing files rather than creating new ones
4. **Price updates**: Use consistent formatting `**$XX USD per month**`
5. **Verify changes** after editing

## Working with Agents
- Launch multiple agents concurrently for parallel work
- Use `background=true` for non-blocking tasks
- Results are returned as task messages
- Each agent starts with fresh context unless `task_id` is provided

## Project-Specific Notes
- All featured app documentation is in `zenith/featured-app/`
- Price formatting should be consistent: `**$XX USD per month**`
- Transaction charge documentation is in `zenith/products/transaction-charges.md`
- Seller payment configuration is in `zenith/payment/seller-payment-configuration.md`

## Example Task Usage
```bash
# Explore files related to transaction charges
task(description="Find transaction charge docs", 
     prompt="Find all files mentioning transaction charges in zenith/products/", 
     subagent_type="explore")

# Update a price in a file
edit(filePath="zenith/featured-app/seller-add-ons/whatsApp-integration.md",
     oldString="$15 per month",
     newString="$16 per month")
```

## Configuration
No special agent configuration needed - the project follows standard Kilo agent patterns. Agent settings can be managed through the standard Kilo configuration files if needed.