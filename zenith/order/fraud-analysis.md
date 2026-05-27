---
title: Fraud Analysis
description: Fraud Analysis
author: Chirag Tyagi
---

# User Guide for Fraud Analysis


In a [Multivendor Marketplace App](/zenith/introduction/), the fraud analysis system operates in the backend to evaluate the risk associated with each customer order.

Utilizing data such as billing details, shipping addresses, IP geolocation, and transaction history, Shopify's algorithms swiftly assess the likelihood of fraud.

In the Multivendor app, the fraud analysis system flags high-risk orders and instantly notifies sellers through the marketplace app.

This action halts the fulfillment of the order until the admin has reviewed and confirmed its safety.

**Note: _When a product undergoes fraud analysis or encounters a fraud-related issue, the system sends an email to the seller,_**

**_Additionally, the system sends an email to the seller when it enables the fraud order restriction configuration._**

When a customer orders through a store, the respective seller can handle fulfillment of their product through the Multivendor Marketplace App.

However, In the Multivendor Marketplace App, Admin allows Sellers to fulfill orders.

This means, that if the Admin prefers to handle order fulfillment instead of allowing Sellers to do so, they can do this in the Multivendor Marketplace.

The Admin can configure whether he wants his Sellers to fulfill orders or not.

To restrict sellers from fulfilling fraud orders, the administrator must first enable the tab. For this, the admin needs to navigate.

Multi-vendor Admin Panel>>Configurations>>Order Configuration  
After enabling the tab, the admin Restrict Seller to fulfillment for fraud orders whose fraud risk is high.

[![Fraud analysis in the Multivendor app Configuration](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/07/config-1200x550.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/07/config-1200x550.webp)

**Note: _If the "Restrict Seller to fulfillment for fraud orders" tab is enabled in the Multi-vendor Admin Panel,_**

**_the system prevents sellers from fulfilling any orders flagged for fraud until the admin marks them as safe._**

 **ADMIN END** 
------------------
Go to the Multi-vendor Admin Panel>>Orders>>Order Listing

When an order is placed by a customer with a high-risk factor, It will display a warning on the order description page.

For reference image is given below:

[![before mark safe by admin](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/07/adbeforemark-538x1024.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/07/adbeforemark-538x1024.webp)

To make order safe Admin needs to click on the tab “MARK AS SAFE” and then **Proceed**.

[![admin make order safe](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/07/adbeforemarkk-1200x559.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/07/adbeforemarkk-1200x559.webp)

[![after mark safe by admin](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/07/adaftermarkk-1200x556.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/07/adaftermarkk-1200x556.webp)

 **SELLER END**
----------------
 Now we have to navigate this from the seller's end.  
Multi-vendor seller Panel Dashboard>>Orders>>Order Listing

Also in the respective seller panel, It will display a warning on the order description page.

[![seller end before mark safe by admin](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/07/sellersidebefore-753x1024.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/07/sellersidebefore-753x1024.webp)

Now if a seller tries to fulfill the order the alert popup on the screen 

[![risk popup](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/07/selllersidebeforee-1200x539.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/07/selllersidebeforee-1200x539.webp)

After Marked by the admin as safe the seller can fulfill the order.

[![After mark safe by admin ](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/07/sellersideafter-1200x558.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/07/sellersideafter-1200x558.webp)