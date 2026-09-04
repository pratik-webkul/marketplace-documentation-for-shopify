---
title:  Shipping Calculator
description:  Shipping Calculator
author: Chirag Tyagi
---

# User Guide for  Shipping Calculator


### INTRODUCTION

We are here to discuss one of the functionalities which you get in the [Multivendor Marketplace Shipping](/zenith/marketplace-shipping/marketplace-shipping) feature app for Shopify i.e., **Shipping Calculator.**

You must be using our very famous [Multivendor Marketplace app for Shopify](/zenith/introduction/) and might have installed the Multivendor Marketplace Shipping feature app for Shopify which is free of cost.

 This feature app enables the admin to configure shipping methods from his end for sellers and sellers can also configure shipping from their end.

## Shipping Calculator

This option will let you display a shipping calculator on the **Cart Page** on your Shopify store's frontend.

On the cart page, customers will have an option to calculate the shipping rates on the added products.

Customers will get to know about the shipping prices that they need to pay during checkout before entering their account details thus reducing the rates of abandoned checkouts.

## Where to locate this functionality?

Login to your Multivendor Marketplace Admin panel and then go to Configuration > Marketplace Shipping Configuration:

![Dashboard-Admin-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/09/calc1.webp)

This action will take you to the following page:

![Configuration-Admin-6](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/09/calc2.webp)

![s1](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/09/calc3.webp)

Enable the **Shipping Calculator** option to display the Shipping Calculator menu on the frontend.

Moreover, you can decide if you want the shipping calculator to be available for all countries or for specific countries.

Selecting countries every time is also a time-consuming process, so we introduce a new feature here

**select countries at the top**, selected countries will be visible at the top of the list at the front end.

If you have selected specific countries, you'll further need to select the countries from the drop-down menu for which you want to make the calculator available.

```liquid
Furthermore, you need to copy the given code and paste it in your '**cart.liquid**' file template inside <form> tag.

    <div id="wk_shipping_calculate_div" class="mp-relative" style="clear: both!important; margin:15px;"><div id="wk_shipping_calculate"><div 
    class='mp-loader mp-absolute'><div class='mp-spinner'></div></div></div>
```

## FRONTEND

When a customer adds products to his cart, this is what the Cart page looks like:

![s2](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/04/s2-1200x629.png)

Here, the customer can see the option to calculate shipping. Click on that and it will ask you to select your Country from the drop-down options:

![s3](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/04/s3-1200x510.png)

Further, it will ask you to select the state and enter the zip code:

![Multivendor Marketplace for Shopify by Webkul: Shipping Calculator](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/02/Your-Shopping-Cart-–-Multivendor-Shipping-Calculator-2.png)

After this, click on 'Calculate' and it will show you the store name, product name and the shipping charges set by the sellers:

![Multivendor Marketplace for Shopify by Webkul: Shipping Calculator](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/02/Your-Shopping-Cart-–-Multivendor-Shipping-Calculator-3.png)

### SCHEDULE DEMO

[Click here to Schedule the demo of Multivendor marketplace App for Shopify ](https://egsma.io/shopify-multivendor-marketplace/)

