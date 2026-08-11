---
title: Multilocation Inventory+Store Pickup
description: Multilocation Inventory+Store Pickup
author: Chirag Tyagi
---

# User Guide for Multilocation Inventory+Store Pickup

Till now, you had no options to add locations to the multi-vendor marketplace app & manage product inventories at those locations.

But we have upgraded the [Multi-location Inventory](/zenith/featured-app/marketplace-miscellaneous-add-ons/multi-location-inventory) feature app in the [Multi-vendor Marketplace app](/zenith/introduction/).

Sellers can manage their product inventories by setting up quantities in stock at multiple locations.

This upgraded multi-location inventory feature allows sellers to add locations from their respective seller panels in case the [Store Pickup feature app](/zenith/featured-app/shipping/store-pickup) is enabled.

Let's understand the combined feature & workflow in detail.

### How to activate the feature apps?

In order to enable the feature apps, you need to visit the **Feature Apps** section of the Multi-vendor Marketplace app.

Now, you need to enable the Multilocation Inventory & Store Pickup feature apps separately.

![mltstp1](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/08/mltstp1-1-1200x573.webp)

![mltstp 2](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/08/mltstp2-1-1200x604.webp)

After enabling both the feature apps, you can manage product inventory at your preferred location.

Additionally, you can allow customers to pick up their order from the store pickup location that they select for their products.

As soon as you enable the feature apps, a new menu gets added to the **Configuration** menu of the app i.e. **Multilocation Configuration**.

![mltstp 3](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/08/mltstp3-1-1200x602.webp)

Change Status:- Firstly, you need to enable the Multi-location status for the sellers. Later if you disable this tab, all the seller's default location will be disabled with this action.

#### **Only Shopify Location**

Now You choose this location type, your product inventory will get transferred to the primary location added from Shopify end (Shopify Settings>Locations>Add Location).

![multi vendor marketplace](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/08/JohnDoe2-_-Locations-_-Shopify-1.png)

Now, you can view all the added inventory locations in the **Multi-location Inventory** section of the app.

In the Multi-location Inventory section, you can view the list of all the added locations. You can sync the Shopify locations to the app.

![MTLSTP 4](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/08/mltstp4-1-1200x602.webp)

Now, while adding new products, you will get all the locations to manage product inventory.  
Products>>Product Listing>>Add product>>Quantity>>Edit Locations.

![MLTSTP 5](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/08/mltstp5-1-1200x573.webp)

But make sure that these locations vary at the admin end as it depends on seller's added locations.

So, let's proceed to check how sellers will manage the locations & provide store pickup option to the selected location.

Seller End
----------

As soon as you enable the Store Pickup feature app on your store, the two sub-menus get added to the Configuration menu of the seller panel i.e. **Store Pickup Configuration** & **Locations**.

Before the seller enables the store pickup feature, he/she needs to add a store pickup location first.

After adding the location, the seller can configure the store pickup settings.

![MLTSTP 7](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/08/mltstp7-1-1200x602.webp)

![MLTSTP 8](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/08/mltstp8-1-1200x602.webp)

The seller can add new locations from this section. Also, edit, delete, enable/disable any location.

As soon as the seller adds a location, he/she can now proceed to configure the store pickup settings.

![MLTSTP 6](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/08/mltstp6-1-1200x603.webp)

In case the seller configures the store pickup option for specific products, then an option appears to stock inventory while adding/editing products.

![MLTSTP 9](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/08/mltstp9-1-1200x601.webp)

Front End Display
-----------------

To display the store pickup option on the product page, you need to add the below-given code into product.liquid (or product-template, if exist):

<div id="wk\_store\_pickup\_div" data-productid="{{ product.id }}"></div>

Let’s see how it will be visible on frontend.

In case the seller has set both the option(Store pickup+Delivery) on products, customers can select from the two. The same appears like this on frontend:

![Delivery and store pickup ](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/08/Screenshot-69.png)

But, if the seller has configured only Store pickup option, customers can view all the addresses on the product page. Customer will select an address from where he/she wants to pick up the order.

![Store pickup](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/08/Screenshot9-2.png)

The [Split Cart feature](https://webkul.com/blog/shopify-multivendor-marketplace-split-cart/) app is now compatible with the Store Pickup feature app.

You can use this feature with the split cart. This means that you can now display the store pickup & delivery option on the cart page(split vendor-wise).

[**KNOW MORE**](/zenith/featured-app/shipping/store-pickup.html#seller-panel)

**CONCLUSION**
--------------

Being a merchant, you can manage product inventory in the app & track it on multiple locations. You can add these locations both on Shopify end as well as on the multi-vendor app.

Now, while adding or editing products, both you and your sellers can manage product quantity at multiple locations.

In case you want your sellers to enable store pickup option for customers, that too can be managed in the app.

The seller will get the option to add store pickup addresses from their respective seller panels.

Now, once the customer selects the "Store Pickup" option for any product, he/she can simply choose one address from where he/she wants to pick up the order.



### SCHEDULE DEMO

[Click here to Schedule the demo of Multivendor marketplace App for Shopify ](https://egsma.io/shopify-multivendor-marketplace/)

