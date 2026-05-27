---
title: Order Fulfillment
description: Order Fulfillment
author: Chirag Tyagi
---

# User Guide for Order Fulfillment



Let's see how orders can be fulfilled in the Multi-Vendor Marketplace for Shopify
---------------------------------------------------------------------------------

In [Multi-Vendor Marketplace](/zenith/introduction/), once the order is being placed from the Shopify store then each seller can do the fulfillment of their respective products directly from their seller panel on the app.

But, we do give the Admin an option to restrict his Sellers from fulfilling the orders. In other words, if the admin doesn't want his sellers to fulfill the orders & instead he wants to fulfill the order then he can do so in the Multivendor Marketplace.

Let's catch each scenario one by one:
-------------------------------------

The Admin can configure whether he wants his Sellers to fulfill orders or not.

To configure this in the MultiVendor Marketplace app, the Admin needs to visit his MultiVendor Marketplace Admin Panel > Configuration > Seller Configuration:

[![Configuration Admin](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/02/allowsellertoflfillitem.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/02/allowsellertoflfillitem.webp)

CASE: I
-------

**Admin wants the orders to be fulfilled by the Sellers.**

So in this case, whenever an order gets placed, the Seller will fulfill & mark the order as delivered from his end.

MultiVendor Marketplace Seller Panel > Orders > Order Listing > View:

[![Order Details Seller • Multivendor MarketPlace (3)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/02/proceedtofulfillorder-1.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/02/proceedtofulfillorder-1.webp)

Clicking on the 'Fulfill' button, a pop-up will generate where the Seller needs to enter the tracking number, tracking URL & shipping method and then click on 'Fulfill items':

> The tracking number & URL will be given by the shipment provider.

[![Order-Details-Seller-•-Multivendor-MarketPlace-5](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/02/fulfillmentmethodtrckdetails.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/02/fulfillmentmethodtrckdetails.webp)

The admin can make the tracking number & shipping methods as mandatory details, i.e., the seller mandatorily has to enter these details before fulfilling the order.

To configure this, Admin needs to go to MultiVendor Marketplace Admin Panel > Order Configuration:

[![Configuration Admin (1)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/02/mandateordertrackingdeyails.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/02/mandateordertrackingdeyails.webp)

After fulfilling, the Seller can either edit tracking details or enter delivery details:

[![Order Details Seller • Multivendor MarketPlace (5)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/02/editrackingdeliverydetails.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/02/editrackingdeliverydetails.webp)

Check the box in front of Delivery Status to mark the order as delivered:

[![Order Details Seller • Multivendor MarketPlace (7)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/02/deloverystatus.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/02/deloverystatus.webp)

The Seller can generate a shipping label from the **Additional Order Details** section only before he marks the order as delivered, after that he'll only be able to generate just the customer invoice.

Multivendor Marketplace App has some shipping feature apps which will allow you to ship orders & generate shipping labels. Dropping them down:

ShipStation
-----------

**[ShipStation](https://www.shipstation.com/)** is a web-based, multi-carrier shipping solution for ecommerce retailers. Designed to streamline the fulfillment process.

This feature will allow you to ship your goods via multiple carrier shipping methods. Moreover, you can automatically generate shipping labels. [Know More.](/zenith/featured-app/shipping/shipstation)

Blue Dart
---------

You can now allow sellers to fulfill orders via Blue Dart fulfillment & courier delivery services. Additionally, allow sellers to generate shipping labels for fulfilled orders. [Know More.](/zenith/featured-app/shipping/bluedart)

UPS
---

Enable the “UPS” feature app to let the sellers ship their products through UPS. [Know More.](/zenith/featured-app/shipping/ups-shipping)

Vamaship
--------

Using this featured app, the merchants can enable shipment through Vamaship. Moreover, he can automatically generate shipping labels for the same. [Know More.](/zenith/featured-app/shipping/vamaship)

FedEx
-----

Using this featured app, the merchants can enable shipment through **FedEx**. Moreover, he can allow **US** **sellers** to automatically generate shipping labels. [Know More.](/zenith/featured-app/shipping/fedex-shipping)

Ecom Express
------------

his feature will help both the admin and the seller to manage the fulfillment in the best possible way. Once the customer places an order, the seller can directly fulfill it from the backend with the help of the Ecom Express Shipping feature. [Know More.](/zenith/featured-app/shipping/ecom-express-shipping)
<!-- 
**USPS Shipping**
-----------------

The Admin can allow his sellers to ship their products using USPS and can allow them to generate shipping labels automatically using Stamps.com Integrationonce the order gets fulfilled. [Know More](https://webkul.com/blog/shopify-multivendor-marketplace-usps-shipping-new-theme/). -->

**Canada Post Shipping**
------------------------

Admin can allow his sellers of Canada to ship their products worldwide and also generate a “shipping label” from their panel. [Know More](/zenith/featured-app/shipping/canada-post-shipping).

**Australia Post Shipping**
---------------------------

The Admin can let his sellers ship the orders via Australia post shipping method and can even generate shipping labels using the app. [Know More](/zenith/featured-app/shipping/australia-post-shipping).

**AirSpeed Shipping**
---------------------

Using this featured app, Both the admin and sellers can notify the courier about the customer’s order from their respective panels. Also, Sellers will manage fulfillment and can generate shipping labels for fulfilled orders. [Know More](/zenith/featured-app/shipping/air-speed-shipping).

CASE: II
--------

**Admin doesn't want the Sellers to fulfill their orders, instead, he will fulfill the orders by himself.**

Now, the seller will not get any option to fulfill the order (as shown in the image below) whenever a customer places an order.

MultiVendor Marketplace Seller Panel > Orders > Order Listing > View:

[![Order Details Seller • Multivendor MarketPlace](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/02/additionalorderdetails.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/02/additionalorderdetails.webp)

The seller can only generate a customer invoice from the Order Details section.

Coming to the Admin end, he can fulfill the order from Shopify backend.

Shopify Backend > Orders > All Orders > Click on the order ID:

[![multivendor marketplace 4 Orders Shopify](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/05/multivendor-marketplace-4-Orders-Shopify.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/05/multivendor-marketplace-4-Orders-Shopify.png)

On this page, the Admin will capture the payment & mark the order as fulfilled.

[![multivendor marketplace 4 Orders 1038 Shopify](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/05/multivendor-marketplace-4-Orders-1038-Shopify.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/05/multivendor-marketplace-4-Orders-1038-Shopify.png)

After clicking on the 'Mark as fulfilled' button, the Admin needs to enter the tracking number & shipping carrier. These are optional fields.

If the Admin is using a carrier other than Shopify Shipping, then he needs to enter the tracking number given by his shipping provider. The tracking URL will appear in the customer's shipping confirmation and shipping update emails.

To send the shipping information to your customers right after the fulfillment, check the 'Send shipment details to your customers now' option.

[![multivendor marketplace 4 Fulfillment Shopify](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/05/multivendor-marketplace-4-Fulfillment-Shopify.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/05/multivendor-marketplace-4-Fulfillment-Shopify.png)

The fulfillment details will auto-update on both Admin & Seller Panel.

Admin Panel:
------------

MultiVendor Marketplace Admin Panel > Orders > Order Listing > View:

Furthermore, admin can only generate an invoice or raise RMA request now-

[![Order Details Admin](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/02/additionalorderdetails.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/02/additionalorderdetails.webp)

Whereas, the Seller can mark the order as delivered, print customer invoice & generate shipping labels:

MultiVendor Marketplace Seller Panel > Orders > Order Listing > View:

[![Order Details Seller • Multivendor MarketPlace (2)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/02/additionalorderdetails.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/02/additionalorderdetails.webp)

CASE: III
---------

**If the Admin doesn't want the Sellers to fulfill the order when the order has a high risk of fraud.**

Then, in this case, The Admin can enable this tab, to restrict Seller to fulfillment for fraud orders whose fraud risk is high.

[![configuration](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/02/restrictsellerfraudorder.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/02/restrictsellerfraudorder.webp)

[For more information check the below reference ](/zenith/order/fraud-analysis)

This was all about the Order Fulfillment in MultiVendor Marketplace App.

### Demo Details

Check out: [https://egsma.io/shopify-multivendor-marketplace/pages/demo](https://egsma.io/shopify-multivendor-marketplace/pages/seller-profile)
