---
title: Distributed Marketplace
description: Distributed Marketplace
author: Chirag Tyagi
---

# About Distributed Marketplace 

## Efficient Order Assignment with Distributed Marketplace

The **Distributed Marketplace** feature enables marketplace owners to automatically route incoming orders to the nearest eligible seller based on the customer's delivery location.

This ensures faster order fulfillment, improved delivery efficiency, and a better customer experience.

To determine the most suitable seller for an order, the system follows the process below:

*   The system first matches the customer's ZIP code with the ZIP codes configured by sellers.
*   If multiple sellers are available for the same ZIP code and are selling the requested product, the system calculates the customer's location using latitude and longitude coordinates.
*   Based on this calculation, the order is automatically assigned to the nearest eligible seller.

### Prerequisites

To use the Distributed Marketplace feature, the following feature apps must be enabled:

*   Global Product
*   Hyperlocal Marketplace

Both features work together to display products centrally and assign orders to the most appropriate seller based on location.

Sellers can upload and manage the ZIP codes where they are available for selling products.

**Note:** Each seller can upload a maximum of **10,000 ZIP codes** in the backend.

### Step 1: Enable Distributed Marketplace Configuration

To use the Distributed Marketplace functionality, navigate to **[Global Product Configuration](/zenith/featured-app/marketplace-product-add-ons/global-product.html#global-product-configuration)** and enable the following setting:

**Apply Distribution Algorithm on Orders**

Once this configuration is enabled, an additional option will appear:

**Distribution Algorithm Type**

Select **Auto Assign** as the distribution algorithm type.

![Distributed Marketplace Shopify](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/06/distriglobalconfig.webp)

### Step 2: Enable Hyperlocal Marketplace

The Distributed Marketplace feature works together with the **[Hyperlocal Marketplace](/zenith/featured-app/marketplace-miscellaneous-add-ons/hyperlocal-marketplace.html#defining-hyperlocal-marketplace)** module.

Therefore, you must have the Hyperlocal Marketplace feature enabled and configured in your application.

![Distributed Marketplace Shopify](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/06/distrihyperlocalconfig.webp)

### Step 3: Configure Seller Service Areas

For automatic seller assignment to work correctly, sellers must be configured based on ZIP codes.

1.  Configure seller ZIP code coverage through the Hyperlocal Marketplace settings.
2.  Open the **My Account** page.
3.  Configure the seller's serviceable ZIP codes and related hyperlocal settings.

![Distributed Marketplace Shopify](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/06/distriselleracchyoezip.webp)

These configurations determine which sellers can serve customers in specific locations.

## How Distributed Marketplace Works

When a customer visits your store, they will be asked to enter their ZIP code.

![Hyperlocal](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/06/hyperlocall-trunk.webp)

After entering the ZIP code:

*   The customer will see only one global product listing managed by the admin.
*   Multiple sellers may be selling the same product in the marketplace.
*   The customer does not need to choose a seller manually.

When the customer places an order, the system automatically checks all eligible sellers serving that ZIP code and assigns the order to the nearest seller who is selling the product.

This automated process helps reduce delivery times and improves order fulfillment efficiency.

### Example Scenario

Suppose three sellers are selling the same product:

*   Seller A
*   Seller B
*   Seller C

All three sellers serve the customer's ZIP code.

When the customer places an order, the system automatically identifies the nearest eligible seller and assigns the order accordingly.

![Distributed Marketplace Shopify](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/06/distriorderlist.webp)

The customer continues to see only the global product, while the order is routed behind the scenes to the most appropriate seller.

## Order Reassignment by Admin

In some cases, the assigned seller may be unable to fulfill the order due to stock shortages, operational issues, or other reasons.

To handle such situations, the admin can manually reassign the order to another seller.

When an order is reassigned:

*   The order is removed from the previously assigned seller's panel.
*   The newly assigned seller can immediately view the order in their seller panel.
*   All future order processing activities are handled by the newly assigned seller.

![rwassign to another seller](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/06/distriorderreassignbtn.webp)

![reassign](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/06/distrireassignorder.webp)

This flexibility ensures uninterrupted order fulfillment even when the original seller is unable to process the order.

Benefits of Distributed Marketplace
-----------------------------------

*   Automatic order assignment based on customer location.
*   Faster and more efficient order fulfillment.
*   Reduced delivery distances and logistics costs.
*   Improved customer experience.
*   Centralized global product management.
*   Easy order reassignment by the admin when required.
*   Seamless integration with Hyperlocal Marketplace ZIP code configurations.

By combining Global Products and the Hyperlocal Marketplace, marketplace owners can centrally manage product listings while making them available through multiple sellers across different locations.

The Auto Assign Distribution Algorithm then efficiently distributes orders among sellers, ensuring that customers receive products from the nearest available seller.

### SCHEDULE DEMO

[Click here to Schedule the demo of Multivendor marketplace App for Shopify ](https://egsma.io/shopify-multivendor-marketplace/)

