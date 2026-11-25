---
title: Mollie Connect
description: Mollie Connect
author: Chirag Tyagi
---

# User guide for Mollie Connect

The Mollie Connect integration for the [Multivendor Marketplace Application](https://apps.shopify.com/multi-vendor-marketplace) enables the admin to route payments between the admin and sellers through [Mollie](https://www.mollie.com/),

The routing is based on the configured payment routing rules set by the admin in Mollie

  
Customers can select Mollie at Shopify checkout to pay for their orders. Once Mollie confirms the payment, the integration initiates the seller payment routing process based on the configured rules.  

The integration routes the funds to the respective sellers through Mollie based on the configured rules.

The admin can also manage these payment routing rules directly in their Mollie account.

Installation
------------

Go to the **Feature Applications** section in the Marketplace Admin Panel and enable the Mollie feature application by accepting the applicable charges.

![Mollie connect installation](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/11/mo1.webp)

![Mollie charges accept](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/11/mo2.webp)

**Shopify-End Configuration**
-----------------------------

On the Shopify end, you will need to connect **Mollie Payments** as a payment option.  

![Shopify- mollie payment method](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/10/mollie12.webp)

**Configure Mollie Connect**
----------------------------

Here, you will need to enter the required API credentials.

*   Payment method name - The name of the Mollie payment method name that you have set in shopify

![Mollie payment method](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/09/mollie4.webp)

*   You can obtain your Access Token by creating an account on Mollie.
*   Client ID and Client secret: You will receive them from the Mollie account

![Mollie connect configuration](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/09/mollie3.webp)

**Create an Application on Mollie**: API keys
---------------------------------------------

To obtain the required Mollie credentials(client ID and client secret)

Navigate to  

**Mollie Dashboard → Developers → Your Apps → Create Application**

![Mollie dashboard](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/10/mollie4.webp)

![Mollie application creation](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/10/mollie5.webp)

While creating the application, you will need to enter the **Redirect URL**.  

![mollie redirect URL](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/10/mollie6.webp)

You can find the required Redirect URL under the **Instructions** section of the MultiVendor Marketplace application.

![Marketplace redirect URL](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/10/mollie7.webp)

  
After creating the application on Mollie, copy the API credentials into the Mollie Connect Configuration section of your Marketplace Admin Panel to complete the setup.

**Enable Mollie as a Seller Payment Method**
--------------------------------------------

Navigate to:

**Payments → Seller Payment Configuration → Seller Payment Methods**

Enable **Mollie**.

![Mollie as seller payment method](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/10/mollie8.webp)

**Configure Seller Earnings**
-----------------------------

Navigate to:

**Payment Settings → Add Seller Total Due Earnings → On Order Paid**

![add seller total due earning](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/10/mollie9.webp)

Enable this option and click **Save**.

**Seller Mollie Account Connection**
------------------------------------

Once the above configuration is completed, sellers will be able to connect their Mollie accounts from their seller panel:

**Seller Panel → Profile → Payment Details → Connect to Mollie**

![connect to Mollie](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/10/mollie10.webp)

**Connected Sellers**
---------------------

You can view the list of sellers who have connected their Mollie accounts under:

**Mollie Connect Configuration**

**For this, you need to navigate to configuration→  Mollie connect configuration**

![Mollie connected sellers](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/10/mollie11.webp)

**Payment Status Webhook**
--------------------------

To ensure that seller payment status updates are properly communicated to the [marketplace](https://marketplace-doc.webkul.com/zenith/introduction/overview.html) end, you will need to configure the following webhook on the Mollie end.

Navigate to:

**Mollie Dashboard → Developers → Webhooks → Create Webhook**

![Order status webhook ](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/10/mollie15.webp)

For the **Webhook URL**, use

    https://sp-seller.webkul.com/mollie_webhook.php

Under **Event Types**, select **Payouts API**.  

![Payout API](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/10/mollie16.webp)

**Retrigger Option**
--------------------

For failed transactions, we provide a retrigger functionality that allows the administrator to retry seller payments.

To retrigger a failed transaction, please navigate to **Payments → Seller Payments → Payouts** in the marketplace admin panel.

Locate the failed payout and use the available retrigger option to initiate the payment process again.

![Retrigger Failed Transactions](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/10/mollie13.webp)

Support
-------

Furthermore, if you require any assistance or consultancy, please raise a support ticket at [http://webkul.uvdesk.com/](http://webkul.uvdesk.com/) or email us at [support@webkul.com](mailto:support@webkul.com).

### SCHEDULE DEMO

[Click here to Schedule the demo of Multivendor marketplace App for Shopify ](https://egsma.io/shopify-multivendor-marketplace/)