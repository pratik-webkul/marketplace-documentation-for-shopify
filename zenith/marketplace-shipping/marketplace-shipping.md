---
title: MARKETPLACE SHIPPING
description: MARKETPLACE SHIPPING
date: 2025-07-18
author: Chirag Tyagi
---

# User Guide for Marketplace Shipping

 **Introduction**
---------------------
**[Multi-vendor Marketplace](/zenith/introduction/)** app now comes with a new simplified way to understand marketplace shipping in the app.

Below guidance will help you to know exactly how shipping works in the app & how the shipping rates will be applied at the checkout. So, Let's proceed to explore.

 **Why Shipping Feature App?**
-----------------
As we know by default, the shipping rates are set by the admin on his/her Shopify store which is shown to the customers on the checkout page and the admin can set for seller products also.

But if you want your sellers to add their own shipping rates of their products then we have a featured app named **Shipping**.

In the Multi-vendor Marketplace app, Shipping is set in three ways: Country-wise Shipping, Zone wise Shipping & Postcode wise shipping.

 **What to Choose?**
---------------------
*   If your seller is shipping in different countries with different shipping rates then, you will choose Country-wise shipping.
*   In case, your seller is shipping in different countries with the same shipping rate then, you will choose Zone wise shipping as the same shipping will be applied for all the countries added to a zone.
*   And if your seller wants shipping according to postcode with different shipping rates then, you will choose postcode-wise shipping. To know more about **[postcode-wise shipping](https://webkul.com/blog/postcode-shipping-multi-vendor-marketplace-for-shopify/).**

### **PLEASE NOTE**

1.  The Shipping feature is available in the Pro Plan of Multivendor marketplace app. Also, to make this feature work, you need to have the **“[Real-Time Carrier-Calculated Shipping](https://help.shopify.com/en/manual/shipping/setting-up-and-managing-your-shipping/enabling-shipping-carriers)”.**  
    
2.  The shipping Feature app **only supports a single shipping profile and a single location**.  
    It is **not compatible with multiple shipping profiles** **& also** **with a single shipping profile plus multiple locations**. **[About Shopify Shipping Profiles](https://help.shopify.com/en/manual/shipping/setting-up-and-managing-your-shipping/shipping-profiles)**  
    
3.  **A new Fulfillment API has been implemented in the multivendor marketplace app. Please update your multivendor marketplace app for the order fulfillment functionality to work.**

### Quick Steps

However, first, you need to configure shipping methods for sellers by selecting the Shipping type as Country-wise shipping or Zone wise shipping.

The shipping methods that you have activated & the shipping type that you set on your marketplace will be visible to your sellers on their respective panels.

Accordingly, the sellers will set the country-wise/zone-wise shipping rates on the basis of the **Price** or **Weight** of the product.

 **Country wise shipping**
-----------------
*   Sellers will create the shipping ranges
*   Add countries
*   Set the state-wise shipping rates based on the price or weight of the products.

 **Zone wise shipping**
-----------------------
*   First, Sellers will create the shipping ranges
*   Select the zone (added by the admin).
*   Then Set the zone-wise shipping rates based on the price or weight of the products.

Let's understand the step-by-step process to install the Shipping feature app & how it works on marketplaces in both cases; Country-wise & Zone wise Shipping.

Check the below video of Zone Wise Shipping:

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 12px;">
  <iframe
    src="https://www.youtube.com/embed/eCZFDz2VvM4?si=7XBn1zkINY3WoKoR"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    style="position: absolute; top:0; left:0; width:100%; height:100%; border-radius:12px;"
  >
  </iframe>
</div>

 Workflow
--------------------
#### **STEP 1: Shipping Feature App Installation.**

In order to get the app, first, you need to visit the **[Feature App](https://webkul.com/blog/shopify-multivendor-marketplace-feature-apps/#panel-0)** section of the multi-vendor app and search for the Shipping feature app. Now, click the **Enable** button and activate **Shipping**.

[![Multi-vendor-Shipping Feature](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/1mpshipping.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/1mpshipping.webp)

That is how you can enable the shipping feature in the multi-vendor marketplace app.

#### STEP 2: Configure Shipping: Admin End

As soon as you enable the Shipping feature, a sub-menu gets added to the Configuration menu i.e **Shipping Methods**.

[![Dashboard-Admin-4](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/2shippingmethods.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/2shippingmethods.webp)

 Shipping Method
-------------------------
From this section, you can view the list of all the shipping methods that you want to activate on your marketplace.

Here, you can see the **Marketplace shipping** in the list.  
As soon as you enable the Shipping feature app. By **Configure Shipping** button in the action menu, you can configure the shipping details.

You can anytime enable/disable any of the Shipping methods from the list. Also, You can view the seller details of who are using these Shipping Couriers.

[![Configuration-Admin-25](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/3mpconfigshipping.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/3mpconfigshipping.webp)

Clicking the Configure Shipping button, you will be redirected to the Global Shipping Configuration section.

From the Global Shipping Configuration section, you can select whether you want to add single shipping or Multiple shipping.

Then you need to choose and configure **Country-wise** or **Zone wise,** or **[Postcode shipping.](https://webkul.com/blog/postcode-shipping-multi-vendor-marketplace-for-shopify/)**

### **Country-wise Shipping**

#### **SINGLE SHIPPING+COUNTRY WISE SHIPPING**

#### Display "Dispatch" & "Delivery days" on the frontend Product page in country-wise shipping

#### **Expected Shipping and Delivery days**

Expected shipping and delivery days refer to the estimated time it takes for an item to be shipped from the seller or retailer and delivered to the customer's designated address.

It represents the approximate duration within which you can anticipate receiving your order after it has been shipped.

Please note that the actual shipping and delivery times may vary based on factors such as shipping method, distance, customs procedures, and any unforeseen delays.

In case you choose this shipping, you will get an option to add Expected shipping and Delivery days.

[![Configuration-Admin-18](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/4mpshippingconfig.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/4mpshippingconfig.webp)

  
To configure the Expected Shipping and Delivery Days, follow these steps:

*   Go to the "Configuration" section.
*   Select "Instructions for the marketplace" from the options.

[![screenshot_1683727462432-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/instructionformarketplace.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/instructionformarketplace.webp)

*   Locate the section labeled "Expected Shipping and Delivery Days."
*   Click on the "Regenerate" button underneath this section.

[![screenshot_1683727355304](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/6shippingdeliverydays.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/6shippingdeliverydays.webp)

In order to display the expected shipping and delivery days on the front end, it is necessary to add the relevant section for that specific page through the Shopify backend configuration.

To access the required Shopify backend settings, the admin should follow these steps:

*   Go to the Shopify Admin Panel.
*   Navigate to Online Store.
*   Select Themes.
*   Click on Customize button.

[![image-36](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/05/image-36.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/05/image-36.png)

*   Select Product in the top search box and then select Default Product.

[![screenshot_1683728599816](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/05/screenshot_1683728599816-1200x620.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/05/screenshot_1683728599816-1200x620.png)

  
Next, click on the "Add section" and choose the "Marketplace Shipping Days" option to include it on the product page.

[![image-37](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/05/image-37-1200x545.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/05/image-37-1200x545.png)

 **Global** **Configuration on Seller's End**
----------------------
If shipping and delivery days have not been configured for a particular state in a country, then in such cases, it will be displayed based on the global configuration.

However, if a specific configuration has been set for the state within that country, it will be displayed accordingly.

To configure the Global configuration for shipping, go to MVM  
Seller Panel, navigate to Configuration >> Shipping Methods >> Click on Global Configuration

[![image-38](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/10sellershippingmethod.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/10sellershippingmethod.webp)

On Global Configuration Page, you have to set Shipping days and Delivery days as per your requirement.

[![screenshot-shipra-store1.sp-seller.webkul.com-2023.05.10-20_12_21](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/11shippinganddeleverydays.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/11shippinganddeleverydays.webp)

After following these above steps, the seller will get an option to add shipping days and delivery days while adding the country for shipping.

[![image-39](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/12shippinganddeleverydaysaddcountry.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/12shippinganddeleverydaysaddcountry.webp)

To access the details on the front end, customers are required to select their country and state on the product page.

By providing this information, they can view the relevant details specific to their location.

[![image-60](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/05/image-60-1200x621.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/05/image-60-1200x621.png)

The frontend display will resemble the image shown below.

[![image-40](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/05/image-40-1200x551.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/05/image-40-1200x551.png)

 MULTIPLE SHIPPING+COUNTRY WISE SHIPPING
---------------------------
In case you choose **Multiple shipping**, you will have the option to add multiple shipping methods.

[![Configuration-Admin-26](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/15addshippingmethods.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/15addshippingmethods.webp)

You need to choose whether you want to display the shipping on the cart page or on the checkout page.

### **[Know About Multiple Shipping](https://webkul.com/blog/shopify-multiple-shipping/)**

[![Configuration-Admin-19](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/16createmultipleshipping.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/16createmultipleshipping.webp)

 **Zone-wise Shipping**
----------------------
For zone-wise shipping, you need to configure the zone from the Global Shipping Configuration section.

[![Configuration-Admin-21](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/11/Configuration-Admin-21-1200x597.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/11/Configuration-Admin-21-1200x597.png)

 **SINGLE SHIPPING+ZONE WISE SHIPPING**
-------------
[![Configuration-Admin-22](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/18zonewise.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/18zonewise.webp)

### **MULTIPLE SHIPPING+ZONE WISE SHIPPING**

[![Configuration-Admin-20](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/19zonewisemultipleshipp.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/19zonewisemultipleshipp.webp)

You can change the label of the shipping method also.

Additionally, you can view the list of all the sellers who are using your marketplace shipping.

[![Configuration-Admin-23](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/20viewseller-1.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/20viewseller-1.webp)

[![View seller details](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/21viewselleredit-1.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/21viewselleredit-1.webp)

 ADMIN ADDING SHIPPING ZONES
--------------------
If you select Zone-wise shipping which will let your sellers add zone wise shipping rates then first you need to add zones from your admin panel.

[![Configuration-Admin-18](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/22zonewisesingle-1.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/22zonewisesingle-1.webp)

As soon as You select Zone-wise shipping, you will get the option to add shipping zones in the app.

<!-- [![Configuration-Admin-24](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/11/Configuration-Admin-24-1200x597.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/11/Configuration-Admin-24-1200x597.png) -->

You can add shipping zones & assign countries to a particular seller.

[![Shipping-Zone-Admin](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/24addzone-1.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/24addzone-1.webp)

Admin Panel>> **Configuration** menu>> **Shipping Zone**\>> Click on Add Shipping zone>> Enter Zone name>> Select countries>> Click on Save button.

[![Add Shipping Zone Admin](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/25selectcountry-1.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/25selectcountry-1.webp)

Later on, you can edit the zones if required.

[![Shipping Zone-add countries](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/26editzone-1.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/26editzone-1.webp)

You can click the Edit button in the Action menu & edit the zones also.

[![Edit Shipping Zone Admin (1)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/27removcountry-1.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/27removcountry-1.webp)

These zones will be visible to your sellers and sellers can set shipping rates on this zone.

Now, let’s see how sellers will add their own shipping rates.

 Set Shipping As Default: Admin End
----------------------
From the S**eller Listing** menu of the app, You can set the **marketplace shipping as a default option** for any of your sellers.

> It is necessary for the sellers to choose a shipping method. Then only shipping rates will be visible to the customers on front end. 
> 
> If the sellers don't want to set the shipping method separately for each product then,
> 
> they can simply set the "Shipping as default" and shipping method will be added automatically to each product of that seller.

Multi-vendor Admin Panel>>Go to **Sellers**\>>**Seller-listing**\>>Select a seller>>Click **Edit**\>>Click **"Set As Default"** from the Action menu of Shipping Methods.

[![seller listing](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/28mpshippingdefault.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/28mpshippingdefault.webp)

In the same way, sellers can also set the shipping method as the default option from their respective seller panels. 

### **Export Seller Details for a Specific Shipping Method**

Now, you can easily export seller details associated with a particular shipping method in the Multivendor Marketplace app. Just follow these steps:

1.  **Navigate to** the **Configuration** section.
2.  Go to **Shipping Methods** and select the shipping method for which you want to view seller details.
3.  Click on the **three dots (⋮)** next to the selected shipping method and choose **"View Sellers."**
4.  You will now see an option to **Export Sellers**. Click it to download the seller details in a convenient format.

[![Shipping methods](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/29viewseller.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/29viewseller.webp)

[![export details ](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/30sellerexport.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/30sellerexport.webp)

Seller Panel: Shipping Configuration
------------------------------------

There will be two sub-menus also added to the Configuration menu in the seller panel i.e. **Shipping Configuration** and **Marketplace Shipping**.

[![Dashboard-Seller-•-Multivendor-MarketPlace-6](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/31sellersidempshipconfigmpship.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/31sellersidempshipconfigmpship.webp)

Shipping methods are configured by the admin and will get listed as same as on the seller side. From here, the seller will proceed to add shipping rates on their own.

This is the case with **SINGLE SHIPPING** selected from the admin end.

[![Shipping-Configuration-Seller-•-Multivendor-MarketPlace-5](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/32sellersidempshipconfig.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/32sellersidempshipconfig.webp)

**Note**:- Until & unless the seller will enable the shipping status from the "**Marketplace Shipping**" as shown below

then the seller won't get the Marketplace shipping option in the Shipping configuration.  
Even if you have enabled [Multiple Shipping](https://webkul.com/blog/shopify-multiple-shipping/) from the admin panel.

[![Shipping-Configuration-Seller-•-Multivendor-MarketPlace-4](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/33mpshipdisable.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/33mpshipdisable.webp)

[![Marketplace-Shipping-Seller-•-Multivendor-MarketPlace-2](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/34mpshipnotvisible.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/34mpshipnotvisible.webp)

 Set Shipping as Default: Seller Panel
--------------------------
Similar to admin, sellers can also set the **marketplace shipping as the default option** from their respective seller panels of the Multi-vendor app.

> It is necessary for the sellers to choose a shipping method. Then only shipping rates will be visible to the customers on front end.
> 
> If a seller don't want to set the shipping method separately for each of his products then, he can simply set the "Shipping as default" as set the shipping rates.
> 
> Thus, the marketplace shipping method will be automatically added to each product of that seller.  

Multi-vendor Seller Panel>>Go to **Configuration**\>>**Shipping Configuration**\>>Click (...)**Action**\>>Click **"Set As Default"** from the Action menu of Shipping Methods.

[![seller shipping](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/35sellermpsgippingdefault.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/35sellermpsgippingdefault.webp)

That is how sellers can set **marketplace shipping as the default** shipping method from their respective seller panels of the multi-vendor app. 

Now, let’s see how the seller can set shipping rates separately for country wise or zone wise.

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

[![Admin panel configuration, distance wise range](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/05/distance.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/05/distance.webp)

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

 ZONE WISE SHIPPING
----------------------------
Similarly, if the admin has enabled the Zone-wise Shipping from the **Configuration**\>>**Shipping Method** menu of the admin panel,

the seller will configure the **zone-wise shipping rates with Single/Multiple shipping methods** configured.

Check the below video of the Zone wise shipping:

1O18fgt60PY

### **Case 1**: ZONE-WISE SHIPPING+SINGLE SHIPPING

[![Screenshot-2020-11-18T142023.498](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/53singlezonewise.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/53singlezonewise.webp)

The seller will configure zone-wise shipping from the Shipping Configuration menu in the seller panel. To add the zone-wise shipping rates, Go to **Configuration**\>>**Shipping Configuration**.

[![Dashboard-Seller-•-Multivendor-MarketPlace-5](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/54shippingmethod.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/54shippingmethod.webp)

Here, the seller will get the option to add zone-wise shipping rates.

[![Shipping-Configuration-Seller-•-Multivendor-MarketPlace-3](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/55mpshippingview.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/55mpshippingview.webp)

Clicking the **View** button, the seller will get the option to add ranges & add zone-wise shipping rates.

[![Shipping Details Seller • Multivendor MarketPlace](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/56shippingmethoddetails.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/56shippingmethoddetails.webp)

Seller adding Shipping Ranges
-----------------------------

The seller will click the Range Detail to add New Range & set a shipping range to enter zone-wise shipping rates. These rates will be applied whether on the product's price or product's weight.

[![Shipping Configuration Seller • Multivendor MarketPlace (4)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/57rangedetails.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/57rangedetails.webp)

[![Range Details Seller • Multivendor MarketPlace](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/58addnewshippingranges.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/58addnewshippingranges.webp)

And the Seller can add up to 8 shipping ranges for a Shipping method.

[![Range Details Seller • Multivendor MarketPlace (1)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/59addshippingrangesdetails.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/59addshippingrangesdetails.webp)

Here, the shipping range is set on the basis of Product Price. Similar to this, Seller can set up to 8 ranges for a shipping method. Also, the seller can edit/delete the ranges.

[![Range Details Seller • Multivendor MarketPlace (2)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/60editdeleteshiprange.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/60editdeleteshiprange.webp)

Now, as the sellers have added the Shipping rages, they can now proceed to add zone-wise shipping rates simply by clicking here:

Seller adding Shipping Rates
----------------------------

**Scenario 1:** When Range Details Tab is Enabled from Admin End. In this case, sellers can simply add zone-wise shipping rates.

[![Shipping Details Seller • Multivendor MarketPlace (2)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/61addshippingzone.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/61addshippingzone.webp)

and **Scenario 2:** And When Range Details Tab is Disabled from Admin End.  
If the Range Details Tab is disabled from admin end, Seller can directly set a Fixed Shipping cost for the respective zone.

[![set a fixed shipping cost](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/62fixedshipping.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/62fixedshipping.webp)

You can view the details, edit/delete zones later if required.

[![Shipping Details Seller • Multivendor MarketPlace (3)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/63shippingmethoddetails.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/63shippingmethoddetails.webp)

### **Case 2:** ZONE-WISE SHIPPING+MULTIPLE SHIPPING

In case you have enabled multiple shipping method, the process of setting zone-wise shipping rates will remain the same for the sellers.

To manage the shipping status, the seller needs to Go to the seller panel **Configuration**\>>**Marketplace Shipping** sub-menu.

[![Dashboard-Seller-•-Multivendor-MarketPlace-8](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/64sellersidempshipconfigmpship.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/64sellersidempshipconfigmpship.webp)

[![Marketplace-Shipping-Seller-•-Multivendor-MarketPlace-3](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/65shippingstatus.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/65shippingstatus.webp)

That is how sellers can add zone-wise shipping rates.

Choose a Shipping Method while Adding/Editing Products
------------------------------------------------------

Once the seller configures the shipping rates, make sure to select a shipping method while adding/editing a product from the respective panels.

[![Screenshot34](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/66productshippingmethod.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/66productshippingmethod.webp)

Shipping At Checkout
--------------------

This is how the Marketplace Shipping Rates appear at checkout.

[![Screenshot-2021-01-11T105917.777](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/01/Screenshot-2021-01-11T105917.777-1200x522.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/01/Screenshot-2021-01-11T105917.777-1200x522.png)

 Allow Delivery Days for Zone wise Shipping
-----------------------------
You can now allow sellers to configure delivery days for zone-wise shipping. Thus, the customers can view the details when the products get delivered to their respective zones.

For that, first you need to enable the tab from the **Shipping Method** menu of the admin panel. Go to the Configuration>>Shipping Methods>>Click **Configure Shipping**\>>Enable the Option.

[![Configuration-Admin-28](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/68configshipping.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/68configshipping.webp)

Now, enable the tab:

[![Configuration-Admin-29](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/69allowdeliverydatezonewise.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/69allowdeliverydatezonewise.webp)

Enabling this option will allow sellers to configure delivery days from their respective seller panels.

 Seller Panel Configurations:-
--------------------
The seller will manage the shipping from the "Shipping Configuration" menu of the seller panel.

To configure the delivery days, the seller needs to click the **view** button of the zone-wise shipping menu.

[![Shipping_Configuration_Seller_•_Multivendor_MarketPlace](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/70viewmpshipzone.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/70viewmpshipzone.webp)

Then, the seller will get redirected to the "Shipping Method Details" section to manage Zone-wise shipping rates.

[![Screenshot-2020-06-03T111745.394](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/71shippingmethoddetails.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/71shippingmethoddetails.webp)

By clicking the **Edit** button (Action menu), the seller will get the option to fill in delivery days.

As soon as, the no of days is entered and this will let customers to know when the products will be delivered to their shipping zones.

[![Delivery Days](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/72deliverydate.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/72deliverydate.webp)

On the product page, The delivery days details will be shown to the customers.  
  
To show the details on the product page, it is equally important to add this code to the product template.liquid file.

[![Instruction](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/73sellershipzonecode.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/73sellershipzonecode.webp)

Finally adding the codes, this is how it appears on the product page of your store:

[![Shipping product page](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/06/Cups_Saucers_%E2%80%93_priyadarshni_store10-1200x627.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/06/Cups_Saucers_%E2%80%93_priyadarshni_store10-1200x627.png)

 Free Shipping Over a Certain Amount
----------------------
In case you want your sellers to provide free shipping over a certain amount then they can set up the shipping ranges on the basis of price as below:

For example, You can set the shipping ranges as 0-$100, $101-200, $201-300, and in the last shipping range, you can put any higher number like $301 to $5000000.

Then, sellers can put up the rates on these shipping ranges for states/countries

like 0-100$ shipping rate is $10.

101-200$ shipping rate is $20.

201-300$ shipping rate is $15.

$301 to $5000000 shipping rate is zero($0)

This way, if any seller's product falls under $301 to $500000000 range then no shipping rates will be applied to that seller's products.

 **Product-wise fixed rate shipping**
-------------------------
The Product-wise fixed rate shipping is applied to a particular product one by one, not applied to all products at once.

Check the below video of the Product-wise fixed rate shipping:

ljiEjswPnNE

Now lets see that the configuration of product -wise fixed rate shipping. First, enable product-wise fixed rate shipping from the admin's end :

  
Login MVM admin >> Go to the configuration >> Shipping method >> enable product-wise fixed rate shipping through the action button.

[![product-wise](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/75productfixedship.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/75productfixedship.webp)

[![product-wise-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/76enableproductfixedship.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/76enableproductfixedship.webp)

Then Enable Product-wise fixed rate shipping from the seller's end also.

Login Seller dashboard>> Go to the configuration >> Shipping method >> enable product-wise fixed rate shipping through the action button.

[![product-wise-3-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/77sellerproductfixedship.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/77sellerproductfixedship.webp)

[![product-wise-4](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/78enablesellerproductfixedship.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/78enablesellerproductfixedship.webp)

While editing or adding a product, both the admin and seller have to choose product-wise fixed rate shipping as their shipping method.

Go to Product >> Product >> Edit or add a product >> Shipping method >> select product-wise fixed rate shipping in shipping methods.

As soon as, you select product-wise fixed rate shipping, a few options will appear i.e. PRODUCT WISE SHIPPING RATE TYPE and shipping price.

Select the product-wise shipping rate type i.e. Quantity wise & Over all , enter the shipping price and click SAVE button.

### **Quantity wise**  

When we select "Quantity", the Shipping cost will be applied to the number of quantity selected while placing order.

For example :-

if set product -wise fixed rate shipping cost Rs 10 on a quantity basis then if choose three product quantity while placing order then the Shipping cost will be Rs 30.  
  
**Overall**

When we select "Overall", the Shipping cost will be applied to product only while placing order.  
For example :-

if set product -wise fixed rate shipping cost Rs 10 on an overall basis then if we order that product the shipping cost will be Rs 10 and no matter how much quantity we have selected.

[![updated-product-shipping](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/79productpage.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/79productpage.webp)

#####   
**NOTE :**

Product wise fixed rate shipping will work with both Single Shipping and multiple shipping.

Now, the Shipping calculator is also compatible with product-wise fixed rate shipping.

Go to configuration >> marketplace shipping configuration >> Enable Shipping calculator

And as soon as you enable the shipping calculator then few more options will appear as mention below :

\# SHIPPING CALCULATOR AVAILABLE FOR and # CONFIG SHIPPING CALCULATOR LABELS

\# "Copy the following code into the cart.liquid template inside form tag to display the shipping calculate button on cart page"

Please enter and follow the instructions to display the shipping calculator.  

[![shipping-cal](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/80shippingcalculator1.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/80shippingcalculator1.webp)

<!-- [![ship-cal-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/04/ship-cal-1-1200x535.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/04/ship-cal-1-1200x535.png) -->

[![ship-cal-2](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/81shippingcalculator2.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/81shippingcalculator2.webp)

### **Allow sellers to add an additional shipping cost:**

Now the Admin can allow sellers to charge an additional shipping cost per product. Admin can configure it under the admin panel by following the steps below:

*   Make sure to Enable Product-wise fixed Shipping in the Admin PanelNavigate to **Configuration > Shipping Methods > Product-wise Fixed Shipping** and enable this setting.
*   In the same section, enable **"Allow sellers to charge an additional shipping cost on products"** and choose one of the three available rules from the dropdown. Then, save the configuration.

[![image](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/83productfixrateconfig.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/83productfixrateconfig.webp)

The three rules operate in the following manner:

#### **1\. Max Shipping cost + Additional cost of remaining products**

In this case, the product with the highest shipping cost will be considered as the base shipping and the additional cost of the remaining products will be added.

In case all the shipping costs are the same, the product with the highest additional cost will be considered base shipping and the additional cost of the remaining products will be calculated.

#### 2\. **Min Shipping Cost + Additional shipping cost of remaining products.**

In this case, the product with the lowest shipping cost will be considered as the base shipping and the additional cost of the remaining products will be added.

In case all the shipping costs are the same, the product with the lowest additional cost will be considered base shipping and the additional cost of the remaining products will be calculated.

#### 3\. Sum of all the Shipping and Additional Costs.

If this is selected then the shipping cost of all the products and the additional cost of all the products will all be added together.

_**Note**\- If there are **multiple sellers** involved in the cart, the same rule will apply per seller, and the total shipping cost will be calculated by adding up the charges from all sellers._

### **Seller-side Setup**

In the Seller panel>>Shipping Methods section, the seller needs to enable "Product-wise Fixed rate Shipping,"

Once enabled, sellers can navigate to the **Add Product** page. they will see an option to add a fixed shipping cost and an additional cost.

[![image](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/84sellerproductpage.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/84sellerproductpage.webp)

 Restrict Buyers in Zone-wise Shipping
-------------------------
You can now disable the "Add to Cart" & "Buy Now" buttons for any product that has configured Zone-wise shipping rates.

**PURPOSE**  
However, If a seller is not selling products at the buyer's location then you can restrict the buyer to purchase the product.

As soon as, the customer login to his account, You can ask him to select an address (added by the customer) to let him check if the seller is available to ship at that location or not.

**Note**:- Marketplace shipping features must be selected for the product.

For this, the admin needs to visit Configuration >> **Global Shipping Configuration** menu >> enable the **"Restrict Buyer"** option.

[![Screenshot-2020-11-18T161424.811](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/85restrictbuyer.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/85restrictbuyer.webp)

To get it working for the buyers on the front end, you need to visit the Configuration menu >>"**Instruction for Marketplace"** & add the codes.

[![Code Pasting](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/86addcode.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/86addcode.webp)

For displaying the model box, copy the following code & add it to the **product.liquid template**.

 ```liquid
<div id="wk-modal" class="wk-modal" style="display: none;">
  <div class="wk-modal-content">
    <div class="wk-modal-header">
      <span id="wk-modal-header-span">Notification</span>
      <span id="wk-close" class="wk-close">×</span>
    </div>
    <div class="wk-modal-body">
      <div class="wk-redirect-buyer"></div>
      <div class="wk-buyer-address wk-hide">
        <div>
          <h4>{{ wk_modal_select_address_header | default: "Select Preferred location for Shipping" }}</h4>
          <select class="wk-selectbox">
            {% for address in customer.addresses %}
              <option value="{{ address.id }}"
                {% if address.id == customer.default_address.id %}selected{% endif %}>
                {{ address.address1 }}, {{ address.address2 }}, {{ address.city }}, {{ address.province }},
                <strong>{{ address.country }}, {{ address.zip }}</strong>
              </option>
            {% endfor %}
          </select>
        </div>
        <div>
          <button type="button" class="btn button-primary" id="wk-address-submit">
            {{ wk_save_address_btn | default: "SAVE" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
```

Hiding Add to Cart & Buy Now, get the code:-
```liquid
<div style="width: 100%;"
  {% if customer %}
    class="wk-buyer-restrict"
    data-customerId="{{ customer.id }}"
    data-productId="{{ product.id }}"
  {% endif %}>
</div>
```
if you want to notify users, paste that code into the **product.liquid or product-template.liquid** template:-
```liquid
    {% if customer %}
  <div class="wk-buyer-notice wk-text-danger"></div>
  <div style="display: none; width: 100%;">
    <button style="width: 100%; border-radius: 3px;"
      type="button"
      class="btn button-primary wk-select-address">
      {{ wk_select_address_btn | default: "SELECT SHIP ADDRESS" }}
    </button>
  </div>
{% endif %}
```

Include file in **product.liquid or product-template.liquid** template:-
```liquid
   {% include 'wk-restrict-buyer' %}
```

Front End
---------

**Note** :  
It is mandatory for customers to have an account on the admin's Shopify store.

If the customer's address is not added to the store, the customer will be asked to enter a new address first.

[![Frontend](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/11/Screenshot-48-1-1200x546.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/11/Screenshot-48-1-1200x546.png)

By visiting the product page, the customer will see the option to view the shipping address.

[![Frontend](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/11/Free-Shipping-%E2%80%93-abhishek-store2-1-1200x627.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/11/Free-Shipping-%E2%80%93-abhishek-store2-1-1200x627.png)

Now, the customer can select the shipping address.

[![Frontend](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/11/Free-Shipping-%E2%80%93-abhishek-store2-1-2-1200x627.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/11/Free-Shipping-%E2%80%93-abhishek-store2-1-2-1200x627.png)

Moreover, If the seller is not available to ship at the buyer's location then, a message will appear on the product page like this:-

[![Frontend](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/11/Screenshot-50-2-1200x498.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/11/Screenshot-50-2-1200x498.png)

You can configure the labels in the **"wk-restrict-buyer-liquid"** file under snippets.

 Shipping Label Generation
----------------------------
Using the Marketplace shipping feature app, you can allow your sellers to generate shipping labels for the fulfilled orders.

As soon as the orders get fulfilled, the seller will get an option to generate a shipping label for their order detail section.

Multi-vendor **Seller Panel**\>>**Orders**\>>**Order Listing**\>>Select an order & click **View** button>>Click "**Generate shipping label**" in the Action menu.

[![Order_Details_Seller_•_Multivendor_MarketPlace](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/91generateshippinglabel.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/91generateshippinglabel.webp)

By clicking on this button, the seller needs to select "**Marketplace Fulfillment**" as the fulfillment method and click the **Generate** button.

[![generate shipping label](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/06/one.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/06/one.webp)

#### SHIPPING LABEL GENERATED

[![shipping label](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/93printshippinglabel.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/93printshippinglabel.webp)

This way, the sellers can easily generate shipping labels.

 Configure Shipping Label from Invoice Template
---------------------------------
You can configure the shipping labels from your admin panel from the **Invoice templates** menu of the app.

[![Invoice_Template_Admin-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/94invoicetemplate.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/94invoicetemplate.webp)

Log in to the multi-vendor admin panel>>Go to Orders>>Click **Invoice Templates**\>>Select the option>>Click the **Edit** button and configure the template.

[![Screenshot13-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/95chooseshippinglabel.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/95chooseshippinglabel.webp)

Now, scroll down and click the **Edit** button to configure Shipping Label:

[![Invoice_Template_Admin-1-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/96editshippinglabel.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/96editshippinglabel.webp)

### SCHEDULE DEMO

[Click here to Schedule the demo of Multivendor marketplace App for Shopify ](https://egsma.io/shopify-multivendor-marketplace/)

