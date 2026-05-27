---
title: Directory listing 
description: Directory listing 
author: Chirag Tyagi
---

# User Guide for Directory Listing



We have added a new **Directory Listing** feature to the [Multivendor Marketplace](/zenith/introduction/) App for Shopify.

Purpose of the feature
----------------------

If you want your customers to get redirected to a separate URL after clicking on the **Buy Now** button, then this feature will help you.

Enabling this feature will replace the **Add to Cart** button with a **Buy Now** button that will redirect customers to the desired URL. The URL can be your seller's website or any other page where you want your customers to complete the checkout process.

**Note:** Each product can have a separate redirecting URL. Also, this feature can only be applicable to normal products, i.e., will not work for digital products or any other kind of product.

Configuration
-----------------

The admin needs to configure the following feature by visiting:

**Multivendor Marketplace Admin Panel** > **Configuration** > **Products Configuration**

On this page, you'll have the option to enable this feature. Refer:

[![Configuration-Admin-2](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/02/directoryconfig.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/02/directoryconfig.webp)

Enable this feature & enter the button name. Save the changes.

Once done, you'll need to add a code to the product template of your store's theme. The code is available in the note section below the directory listing button (refer to the image provided above).

**Instructions**: Copy the below-given code & paste it in the '**product.liquid**' or '**product-template.liquid**' file. The code needs to be added just above the **Add to Cart** button.
```liquid
    {% include "wk-directory-listing" %}
```
**NOTE**:- In case you are using **[Online store 2.0](https://www.shopify.com/partners/blog/shopify-online-store)** (Example- Dawn), you need to add the codes to **product.json** >> **sections/main-product.liquid** file**:-**
```liquid
    {% include "wk-directory-listing" %}
```    

How to find product template files?
-----------------------------------

You can edit the code for your theme:

1.  From your Shopify admin, go to **Online Store** > **Themes**.
2.  Click **Actions** > **Edit code**.
3.  Further, search for '**product.liquid**' template & paste the code.

Refer:

[![multivendor-marketplace-4-Edit-Debut-Shopify](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/02/multivendor-marketplace-4-Edit-Debut-Shopify-1200x597.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/02/multivendor-marketplace-4-Edit-Debut-Shopify-1200x597.png)

If you are having trouble while updating the codes, let us know by emailing at **shopify@webkul.com** or creating a ticket for the same at [**Webkul UV Desk**](https://webkul.uvdesk.com/en/customer/create-ticket/). We’ll do it for you!

Adding Directory Listing Product
--------------------

Both admin and seller can add a directory listing product by following these steps:

Visit **Multivendor Marketplace Admin/Seller Panel** \> **Products** > **Product Listing** > **Add Product**

(Instructions are shown with seller panel images whereas, the method to add a directory listing product is the same for admin as well.)

[![Product-Seller-•-Multivendor-MarketPlace](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/02/addproduct-1.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/02/addproduct-1.webp)

On the add product form, choose the product as **Directory Listing Product**. Further, on the right side, you'll have a section to enter directory listing details.  
Here, enter the URL of the webpage to which you want to redirect your customers to make the purchase of this particular product. Save the changes once done!

[![Add-Product-Seller-•-Multivendor-MarketPlace](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/02/directoryurl.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/02/directoryurl.webp)

The product will have a **directory listing button** instead of a normal **Add to Cart** **button**. Clicking on the button, the customers will be redirected to the configured URL.

Example: For the product below, we have added the Webkul Blog link to the Buy Now button. [Try it yourself!](https://multivendor-marketplace-4.myshopify.com/products/bright-red-purse-with-gold-detailing)

[![collage-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/02/collage-1.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/02/collage-1.png)
