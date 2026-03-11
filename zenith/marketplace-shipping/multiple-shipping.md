---
title: Multiple Shipping
description: Multiple Shipping
author: Chirag Tyagi
---

If you are using [Multivendor Marketplace Shipping App](/zenith/marketplace-shipping/marketplace-shipping) then now you will be able to **create multiple shipping** for your sellers.

In this documentation, we will only discuss how the admin can create multiple shipping and further, how the sellers can configure them.

To learn more about the marketplace shipping app, refer to this [blog](/zenith/marketplace-shipping/marketplace-shipping).

**Note**: You will only be able to create multiple shipping if you are using **Zone-Wise** or **Country-wise** shipping type.

It will not work in the case of the Postcode-wise shipping type.

In case you want to change the shipping type from zone-wise/country-wise to postcode-wise then you first need to disable multiple shipping. Otherwise, you may face issues.

Also, if you are using this feature, you won't be able to fetch shipping rates using any other [shipping module](https://sp-seller.webkul.com/mvm-landing/addons/) of the marketplace app.

However, you can use these shipping modules for the fulfillment process.

These are all the points that you need to remember. Now, let's jump into the configuration part!

 Enable Multiple Shipping
-----------------
The admin needs to visit **Multivendor Admin panel** \> **Configuration** > **Marketplace Shipping Configuration**. Here, you need to click on the following option:

[![Home-_-Admin](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/02/Home-_-Admin-1200x590.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/02/Home-_-Admin-1200x590.png)

*   Enable the '**Create Multiple Shipping**' option.
*   Choose where you want the shipping methods to display: **Checkout Page** or **Product Page**.

[![image-15](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/11/image-15-1200x597.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/11/image-15-1200x597.png)

On the same page, it is mandatory to enable the [shipping calculator](https://webkul.com/blog/shopify-multivendor-marketplace-shipping-calculator/) option:

[![image-5](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/03/image-5-1200x597.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/03/image-5-1200x597.png)

On the bottom on this page, you will have the code that you need to paste for shipping calculator. **Note**: In the case of multiple shipping, this code needs to be pasted in the **product.liquid** file.

[![image-6](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/03/image-6-1200x597.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/03/image-6-1200x597.png)

 Single To Multiple Shipping Transfer 
-----------------
If you'll switch from single to multiple shipping, you'll get an option to migrate current shipping data to the new multiple shipping data.

You can migrate the existing ranges by entering shipping method name.

Further, the existing products with marketplace shipping will be replaced by this new shipping method.

[![download](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/02/download-1200x546.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/02/download-1200x546.png)

 Add Shipping Method
------------
Visit **Multivendor Admin panel** \> **Configuration** > **Shipping Methods**. On this page, click on **Add Shipping Method**:

[![image-35](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/02/image-35-1200x597.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/02/image-35-1200x597.png)

On the redirected page, add the Shipping Method:

[![Add-Shipping-Method-Admin](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/10/Add-Shipping-Method-Admin-1200x597.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/10/Add-Shipping-Method-Admin-1200x597.png)

Next, enable these added methods:

[![Configuration-Admin-1-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/10/Configuration-Admin-1-1-1200x559.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/10/Configuration-Admin-1-1-1200x559.png)

Once added & enabled, the following methods will be listed on the seller end. Let's move on to the seller end configuration.

 Seller Panel
---------------
Visit **Multivendor Seller Panel** \> **Configuration** > **Marketplace Shipping**: Enable the shipping status.

[![image-21](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/11/image-21-1200x597.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/11/image-21-1200x597.png)

The seller needs to visit **Multivendor Seller Panel** \> **Configuration** > **Shipping Configuration**. Enable the shipping methods added by the admin:

[![Shipping-Configuration-Seller-•-Multivendor-MarketPlace](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/10/Shipping-Configuration-Seller-%E2%80%A2-Multivendor-MarketPlace-1200x597.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/10/Shipping-Configuration-Seller-%E2%80%A2-Multivendor-MarketPlace-1200x597.png)

Further, the seller needs to add **Range Details**:

[![Shipping-Configuration-Seller-•-Multivendor-MarketPlace-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/10/Shipping-Configuration-Seller-%E2%80%A2-Multivendor-MarketPlace-1-1200x597.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/10/Shipping-Configuration-Seller-%E2%80%A2-Multivendor-MarketPlace-1-1200x597.png)

After clicking on the Range Detail option, the seller will be redirected to the following page.

The seller then needs to click on the **Add New Range** button to set a shipping range to enter zone-wise shipping rates.

These rates will be applied on the basis of the product’s price or product’s weight.

[![Range-Details-Seller-•-Multivendor-MarketPlace](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/10/Range-Details-Seller-%E2%80%A2-Multivendor-MarketPlace-1200x597.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/10/Range-Details-Seller-%E2%80%A2-Multivendor-MarketPlace-1200x597.png)

Seller can set up to 8 ranges for a shipping method. Also, the seller can edit/delete the ranges.

[![Range-Details-Seller-•-Multivendor-MarketPlace-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/10/Range-Details-Seller-%E2%80%A2-Multivendor-MarketPlace-1-1200x750.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/10/Range-Details-Seller-%E2%80%A2-Multivendor-MarketPlace-1-1200x750.png)

Click on the **View Shipping** button as shown in the above image. Here, click on the marked location to add zone wise rates:

[![Shipping-Details-Seller-•-Multivendor-MarketPlace](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/10/Shipping-Details-Seller-%E2%80%A2-Multivendor-MarketPlace-1200x597.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/10/Shipping-Details-Seller-%E2%80%A2-Multivendor-MarketPlace-1200x597.png)

Further, enter the shipping range prices:

[![Shipping-Details-Seller-•-Multivendor-MarketPlace-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/10/Shipping-Details-Seller-%E2%80%A2-Multivendor-MarketPlace-1-1200x680.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/10/Shipping-Details-Seller-%E2%80%A2-Multivendor-MarketPlace-1-1200x680.png)

Once added, the rates can be deleted/edited/disabled.

[![Shipping-Details-Seller-•-Multivendor-MarketPlace-2](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/10/Shipping-Details-Seller-%E2%80%A2-Multivendor-MarketPlace-2-1200x713.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/10/Shipping-Details-Seller-%E2%80%A2-Multivendor-MarketPlace-2-1200x713.png)

This flow is as per zone-wise shipping. In case you want to know the flow to add country-wise shipping, refer: [Country Wise Shipping](/zenith/marketplace-shipping/marketplace-shipping.html#country-wise-shipping-2)

 Add Shipping to Products
-----------------
Visit **Multivendor Seller Panel** > **Products** > **Product Listing** > **Add/Edit Product**. Add the shipping to the products (more than once shipping can be added to a product):

[![Edit-Product-Seller-•-Multivendor-MarketPlace](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/10/Edit-Product-Seller-%E2%80%A2-Multivendor-MarketPlace-1200x597.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/10/Edit-Product-Seller-%E2%80%A2-Multivendor-MarketPlace-1200x597.png)

### Shipping on Product Page:

[![collage](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/10/collage.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/10/collage.png)

### Shipping on Checkout Page:

[![Shipping-Sanjay-store-trunk-Checkout](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/10/Shipping-Sanjay-store-trunk-Checkout-1200x597.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/10/Shipping-Sanjay-store-trunk-Checkout-1200x597.png)

 Admin Managing Shipping Ranges
-------------
In case you want to manage multiple shipping ranges & set rates on your own then, this can be done.

For this, you need to visit the Multi-vendor admin panel **Configuration** >> **Marketplace Shipping Configuration**.

[![screenshot-sp-seller.webkul.com-2021.08.13-10_46_57-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/08/screenshot-sp-seller.webkul.com-2021.08.13-10_46_57-1-1200x564.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/08/screenshot-sp-seller.webkul.com-2021.08.13-10_46_57-1-1200x564.png)

Now, make sure to select shipping type as Create Multiple Shipping and then enable the tab "**Manage Shipping Range by Admin**" and **Save** the changes.

[![manage shipping](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/08/Screenshot-2021-08-13T102959.949-1200x617.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/08/Screenshot-2021-08-13T102959.949-1200x617.png)

Once you enable this tab, you will get the option to choose if you want to enable multiple shipping on the seller's products or not.

Enabling the **"Multiple Shipping on Seller Products"** configuration, all the active shipping methods of sellers will be selected on all (old and new) products of the sellers.

[![multiple shipping](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/08/screenshot-sp-seller.webkul.com-2021.08.13-11_36_46-1200x620.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/08/screenshot-sp-seller.webkul.com-2021.08.13-11_36_46-1200x620.png)

Now, you will have a new sub-menu "**Global Shipping Range"** added to the **Configuration** menu of the app.

[![global shipping range](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/08/screenshot-sp-seller.webkul.com-2021.08.13-11_51_38-1200x620.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/08/screenshot-sp-seller.webkul.com-2021.08.13-11_51_38-1200x620.png)

From here, you can add new shipping ranges.

[![new range](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/08/Screenshot-2021-08-13T115849.920-1200x510.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/08/Screenshot-2021-08-13T115849.920-1200x510.png)

Proceed to add shipping ranges based on the price & weight of the product.

[![add range](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/08/Screenshot-2021-08-13T120009.680-1200x618.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/08/Screenshot-2021-08-13T120009.680-1200x618.png)

You can further edit the ranges and prices from the **Shipping Configuration** menu >> Select the shipping method and Edit Range/Price.

[![screenshot-sp-seller.webkul.com-2021.08.13-16_03_01](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/08/screenshot-sp-seller.webkul.com-2021.08.13-16_03_01-1200x620.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/08/screenshot-sp-seller.webkul.com-2021.08.13-16_03_01-1200x620.png)

 Code pasting
---------------
In case you are using shipping on the product page, visit **Multivendor Marketplace Admin Panel** > **Configuration** > **Instructions for Marketplace**.

Add the following sets of code to the restrictive template files:

[![Instructions-Admin](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/10/Instructions-Admin-1200x597.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/10/Instructions-Admin-1200x597.png)

In case you are using the [**Hyperlocal Marketplace**](/zenith/featured-app/marketplace-miscellaneous-add-ons/hyperlocal-marketplace) module, kindly check out: [**Hyperlocal with Multiple Shipping**](/zenith/featured-app/marketplace-miscellaneous-add-ons/hyperlocal-marketplace.html#hyperlocal-with-multiple-shipping)

**Note**: In case you need our help with code pasting, drop your request at shopify@webkul.com.

### Case Scenario

**CASE I**

Suppose, Seller has 2 products: **Product A** & **product B**

On product A, let say the seller has chosen: **Method 1** & **Method 2**  
On product B, let say the seller has chosen: **Method 2** & **Method 3**

Then in this case, when customers add product A as well as product B then we'll get Method 2 common so then we'll display the shipping rates based on Method 2 on Shopify checkout.

**CASE II**

Suppose, Seller has 2 products: **Product A** & **product B**

On product A, let say the seller has chosen: **Method 1** & **Method 2**  
On product B, let say the seller has chosen: **Method** **3** & **Method** **4**

Then in this case, when customer adds product A as well as product B then we won't be getting any common shipping method

so then we won't be able to display any shipping rates on the checkout page.

