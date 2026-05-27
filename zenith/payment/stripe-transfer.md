---
title: Stripe Transfer
description: Stripe Transfer
author: Chirag Tyagi
---

# User Guide for Stripe Transfer


Stripe Transfer
------------------
#### **Purpose of this feature**:

This feature lets your sellers automatically receive their total earnings once they mark the order as delivered/fulfilled/paid after the refund date.

**In the Stripe Transfer** feature customers will pay the admin via the payment method available on the Shopify end.

The seller's earnings are transferred from the Admin Stripe account to the Seller Stripe account.

[![All payment methods](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/03/stripefourteen.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/03/stripefourteen.webp)

Now admin can choose to create a payment (transfer to the seller) only if the payment is made through a specific payment method on Shopify.

[![Stripe payment method](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/03/stripefifteen.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/03/stripefifteen.webp)

This transfer of seller earnings from  Admin to Seller Stripe account is managed by the MVM app,

then as per the settings configured by the seller on their respective stripe dashboard, the amount transferred from the Seller Stripe account to their bank account is managed by the Stripe end.

**Note:** The stripe Transfer feature is not compatible with one country that is **India.**

[![stripe-balance](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/02/stripe-balance-1200x476.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/02/stripe-balance-1200x476.png)

## Description for Stripe Transfers

We have introduced a new option for Stripe transfers that allows admins to add a custom description to payouts.

Thus, when the admin selects Stripe Transfer, a new configuration called **“Set Description in Stripe Transfer”** will be displayed. After enabling this option, the admin can enter any custom description.

This description will then be automatically attached to all Stripe payouts processed through the Multivendor app and will be visible along with the transaction details on the Stripe dashboard.

[![image](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/03/stripesixteen.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/03/stripesixteen.webp)


How to configure the Stripe Transfer feature?
---------------------------------------------

To configure this feature, the Admin needs to follow the steps written below:

*   Go to Multi vendor Marketplace **Admin Panel**
*   Hover over the **Order** menu & select the **Checkout payment method** from the drop-down menus.

[![screenshot_1675923554142](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/03/stripeone.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/03/stripeone.webp)

After clicking on the checkout payment method, the user will land on the checkout method page as shown in the image. The user needs to click on the add button.

[![Stripe Connect](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/03/stripetwo.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/03/stripetwo.webp)

Once the user clicks on the add button the stripe configuration page will open and the user needs to select the **Transfer** for the field **"use stripe for**".

[![screenshot_1675923802059](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/03/stripeseventeen.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/03/stripeseventeen.webp)

After fulfilling all the relevant details, the payout configuration is there **AUTOPAY TO SELLER**.

Once you enable this configuration, you will get the three options to select

### **Fulfil**l:

If you select the fulfill option then once the seller marks the order as fulfilled then seller earnings will be transferred to the seller account.

### **Delivery**:

In the case of delivery, the seller’s earnings will be transferred to the seller’s account once the order is marked as delivered.

[![Stripe Connect](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/03/stripeeighteen.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/03/stripeeighteen.webp)

 **Pay after the return date:**
---------------------
To enable this, the admin first needs to enable the **ENABLE CASHABLE AMOUNT FOR SELLER** configuration which allows you to set particular days after which you want your Sellers to receive the payment.

These days are basically the days in which your customers can refund the purchased items.

Configure the following feature by navigating through: **Multivendor Marketplace Admin Panel > Payment > Seller Payment Configuration**.

Refer to the images below:

[![admin](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/03/stripefive.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/03/stripefive.webp)

[![payment](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/03/stripesix.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/03/stripesix.webp)

<!-- [![cashable](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/10/enablecashable-4-1200x602.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/10/enablecashable-4-1200x602.webp) -->

Here, the Admin needs to enter the days after which the payment will be done to his sellers for the order (order refund days),

and select whether you want to calculate the provided span of time from the delivery date, order fulfillment date, or order creation date.

Example: If you have selected the delivery date & mentioned refund days (pay after days) as 30 then after 30 days of the delivery date, the Sellers will receive the payment.

**NOTE**: Refund days should be greater than -1 otherwise it will not work.

Lastly, enable the ‘**Allow seller to enter refund days**‘ if you want your sellers to add their individual refund days.

Once enabled, the sellers will be able to set the refund days by visiting **Marketplace Seller Panel > Configuration > General Configuration > Enter the day & save:**

[![Stripe Connect](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/12/spp6-1-1200x542.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/12/spp6-1-1200x542.png)

**Note:** The sellers who have not entered any refund days will by default have the refund days set by the admin.  
If entered then the refund days should be greater than -1 otherwise it will not work.

Only after enabling this option, the Admin will have the ‘Pay after refund date’ option in stripe Transfer Configuration:

[![Stripe Connect](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/03/stripeeighteen.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/03/stripeeighteen.webp)

Also, the Admin won’t be able to choose the ‘pay after’ as delivery or fulfillment because now it will work as configured in the ‘Cashable Amount for Seller’ option.
