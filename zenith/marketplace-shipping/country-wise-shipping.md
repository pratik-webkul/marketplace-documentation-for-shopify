---
title: Country Wise Shipping
description: Country Wise Shipping
author: Chirag Tyagi
---

# User Guide for Country Wise Shipping

COUNTRY WISE SHIPPING
---------------------
If your seller is shipping in different countries with different shipping rates then, he/she has to set country-wise shipping.

For this, first, you need to enable the Marketplace Shipping as Country-wise from the Admin Panel>>**Configurations**\>>**Shipping Methods** menu.

Check the below video of country-wise shipping:

heck the below video of Zone Wise Shipping:

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 12px;">
  <iframe
    src="https://www.youtube.com/embed/k7i1r-VVpwU?si=x_ERrA65NNG3MmGt"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    style="position: absolute; top:0; left:0; width:100%; height:100%; border-radius:12px;"
  >
  </iframe>
</div>

### CASE 1: COUNTRY-WISE SHIPPING+SINGLE SHIPPING

[![Screenshot-2020-11-18T130651.301](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/36singlecountrywiseship.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/36singlecountrywiseship.webp)

#### SELLER END

Go to Configuration >> **Shipping Configuration** menu of the seller panel, the seller will have the marketplace shipping option in the listing.

<!-- [![Dashboard-Seller-•-Multivendor-MarketPlace-7](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/11/Dashboard-Seller-%E2%80%A2-Multivendor-MarketPlace-7-1200x597.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/11/Dashboard-Seller-%E2%80%A2-Multivendor-MarketPlace-7-1200x597.png) -->

In front of that shipping method, the seller needs to click the **view** button in the **Action** menu.

Clicking on the view button, the seller will see the list of added countries. From here, the seller will get the option to manage shipping ranges & add more countries.

The seller can manage each country’s shipping rates from the **Action** menu just by clicking the **view** button. He/she can anytime disable/delete any country from the list.

[![Shipping Configuration Seller • Multivendor MarketPlace (5)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/38viewshipping.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/38viewshipping.webp)

### How to Manage Shipping Range?

Moreover, Sellers first need to add Shipping ranges and then proceed to add countries to set different shipping rates for each country for all the states.

[![Shipping Details Seller • Multivendor MarketPlace (4)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/39shippngrangessteps.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/39shippngrangessteps.webp)

Seller adding Shipping ranges
-----------------------------

The seller will click the Add New Range button to set a shipping rate for zone-wise shipping. These rates can be applied to the product's price or the product's weight.

[![Range Details Seller • Multivendor MarketPlace](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/40addshippingranges.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/40addshippingranges.webp)

Moreover, the Seller can add upto 8 shipping ranges for a Shipping method.

[![Range Details Seller • Multivendor MarketPlace (1)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/41addshippingrangesdetails.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/41addshippingrangesdetails.webp)

The shipping Range is now set on the price of the product. Also, the seller can edit/delete the ranges.

[![Range Details Seller • Multivendor MarketPlace (2)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/42editdeleteshiprange.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/42editdeleteshiprange.webp)

Allow seller to add shipping ranges on the basis of distance
------------------------------------------------------------

We have added a feature where admin can allow sellers to add ranges on the bases distance.  
**Note:** This feature will work on with single **country wise shipping**.

**Configuration:** Navigate from admin panel of multivendor app configuration >> Enable MANAGE SHIPPING RANGES BASED ON DISTANCE

[![Admin panel configuration, distance wise range](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/05/admin-panel_distance-config-1200x521.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/05/admin-panel_distance-config-1200x521.webp)

Once done, you need to add google map api keys.

Refer this how to get google map api keys: https://developers.google.com/maps/documentation/javascript/get-api-key

 Seller Panel configuration for distance wise ranges
--------------------
Sellers can then add ranges on the basis of distance.

[![Seller Panel configuration for distance wise ranges](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/05/seller-panel-distange-range-1200x509.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/05/seller-panel-distange-range-1200x509.webp)

 **Flat Shipping Rate in case of Weight-wise shipping**
----------------------
If the seller selects range as a weight basis then there is an option to give a flat rate shipping to the customer.

This condition works as per the seller's total products, not the whole cart amount.

### **For example:**

if a customer buys products from two sellers, seller A and seller B and both the seller sets different condition amounts.

Seller A set the max price for the flat rate is 1000$ and the shipping rate is 10$.  
  
And, Seller B set the max price for the flat rate is 800$ and the shipping rate is 8$.

Note: IF the condition is met for one seller then it will work as per the condition for that seller but if not then work as marketplace shipping rate for the rest of the seller.

[![s5](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/45flatrate.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/45flatrate.webp)

To enable this there is a configuration that you need to enable first, **Admin Panel > configuration > Market Place Configuration > Flat Rate Shipping.**

[![S6](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/46enableflatrate.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/46enableflatrate.webp)

for example: if shipping ranges is set as as weight It will calculate shipping cost on the weight basis.

But if customer order value is more than the flat shipping condition amount then it shipping cost will be as per the condition amount.

The seller can view the shipping range details from here:

[![Range Details Seller • Multivendor MarketPlace (3)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/47vewshippingranges.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/47vewshippingranges.webp)

Once done, the seller will proceed accordingly to select countries & set different shipping rates for each country & their states based on the price or weight of the product.

[![Add Shipping Country Seller • Multivendor MarketPlace](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/48addcountrywiserate.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/48addcountrywiserate.webp)

All the countries to which the shipping rate is set will be listed in this section (as attached in the screenshot).

The seller can proceed to manage shipping ranges from there & add new countries also.

[![Shipping Details Seller • Multivendor MarketPlace (5)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/49manageaddcountry.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/49manageaddcountry.webp)

In case the admin has selected Multiple Shipping and enabled the Country-wise shipping.

 **CASE 2:** COUNTRY-WISE SHIPPING+MULTIPLE SHIPPING
--------------------------
[![Screenshot-2020-11-18T132459.408](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/50multipleshippingcontywise.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/50multipleshippingcontywise.webp)

A new sub-menu gets added to the seller Configuration menu i.e. **Marketplace Shipping**. From here, you can update the shipping status in case you are using Multiple Shipping.

[![Shipping-Configuration-Seller-•-Multivendor-MarketPlace-2](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/51mpshipping.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/51mpshipping.webp)

From here, the seller will view the Shipping Method and Shipping Type selected. Moreover, the seller can update the shipping status.

[![Marketplace-Shipping-Seller-•-Multivendor-MarketPlace](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/52mpshippingview.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/52mpshippingview.webp)

### **[Know How To Create Multiple Shipping](/zenith/marketplace-shipping/multiple-shipping.html)**

This way, a seller can set different shipping rates for different countries based on the Price or weight of the product.


Need Support?
-------------

Hope you like this blog. To get more interesting blogs, keep in touch with us. If you need any kind of support, simply raise a ticket at [https://webkul.uvdesk.com/en/customer/create-ticket/](https://webkul.uvdesk.com/en/customer/create-ticket/).

You can also contact at **support@webkul.com** to get proper assistance.

Thank You for reading this Blog!
### SCHEDULE DEMO

[Click here to Schedule the demo of Multivendor marketplace App for Shopify ](https://egsma.io/shopify-multivendor-marketplace/)

