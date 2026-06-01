---
title: Amazon S3 Setup
description: How to setup amazon s3
date: 2025-07-02
author: Chirag Tyagi
---

# User Guide for Amazon S3 Setup

If you are looking to build a marketplace with no restriction of shop type then [Multi-Vendor Marketplace for Shopify](/zenith/introduction/) is the solution.

Selling physical as well as digital products on this Multi-Vendor Marketplace is really flexible & easy.

In **Multivendor Marketplace App** for Shopify, a merchant can set up a store for physical (normal) products, digital products & even both.

They can easily select the [**Shop Type**](/zenith/products/digital-products) from the app’s configuration section.  
Now, for adding digital products to your multivendor store, you require [digital storage](/zenith/digital-storage/digital-storage).

The digital storage provided in the app depends on the plan that you have activated.

However, if you want to have more storage than provided, you can [upgrade](/zenith/digital-storage/digital-storage) your storage plan or an alternative to this is using your own **AWS storage**.

Moreover, using your own AWS, you'll have total control over the marketplace data.

So, in this documentation, we'll see how a merchant can configure his own Amazon S3 in the [Multivendor Marketplace](/zenith/introduction/) for Shopify.

Configuration
-------------

To configure this, you need to visit Multi-vendor Marketplace Admin Panel > Configuration > Products Configuration:

Under the heading 'WANT TO USE YOUR AMAZON-S3 CREDENTIAL FOR DIGITAL PRODUCT', select Merchant S3 from the drop-down menus. Refer:

![Screenshot-from-2020-01-02-11-19-52](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/05/1amazons3.webp)

Further, visit Multivendor Marketplace Admin Panel > Configuration > Amazon S3/Box Details

Here, fill out your **Amazon S3 Details**:

![7r1n60shwly-1516×849-](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/05/2amazons3box-1.webp)

Steps to get the Amazon S3 images
---------------------------------

To get the Amazon S3 Detail & Secret Key, follow these steps:

*   Log in to [IAM Console](https://console.aws.amazon.com/iam/home?#home)
*   From the navigation menu, click on the **Users**
*   Here, you need to select the IAM username
*   Further, click **User Actions** > **Manage Access Keys**
*   Click on **Create Access Key**
*   Here, you'll have your Access & also the Secret keys
*   Moreover, you can even download the credentials, to keep it secure for future use by clicking on the **Download Credentials** button.

Setting up Amazon S3 Bucket
---------------------------

Once you configure the above-said details, you need to create a **bucket**. The same bucket name will be used in the above configuration (AWS Bucket Name).

Further, inside this bucket, you need to create the following folders by the exact names as provided:

*   **product\_img**: It will store all the product images.
*   **store\_logo**: Used to store your seller's profile images.
*   **shop\_logo**: It will store the Shop logo of your marketplace sellers.
*   **store\_banner**: Used to store the banner image used by your marketplace sellers.
*   **checkout-image**: This will store the checkout image used in your shop.
*   **shipping\_label**: All the shipping labels generate using any [shipping feature app](/zenith/marketplace-shipping/marketplace-shipping) will be stored here.
*   **seller\_shop\_logo**: Here, the shop logos of your sellers' synced Shopify stores will be stores. (Only for '[Create an app for sellers](/zenith/featured-app/connector/seller-shopify-store-connector)' feature app users. )
*   **icon\_img**: This will store icon images, only for '[Create an app for sellers](https://webkul.com/blog/shopify-multivendor-marketplace-seller-product-sync-new-theme/)' feature app users.
*   **favicon\_img**: This will store the favicon image used in your marketplace.
*   **ff\_logo**: Used to store 'fulfilled by admin' logo. (Only for '[Stock Management](/zenith/featured-app/marketplace-product-add-ons/stock-management)' feature app users.)
*   **badge\_img**: Used to store seller badges in case you are using the [Seller Badge](/zenith/featured-app/seller-add-ons/seller-and-customer-badge) feature app.

###### Some more...

*   **image\_csv**: This will store the images upload via CSV on your marketplace.
*   **image\_zip**: This will be used to store the images upload via a zip file on your marketplace.
*   **seller\_csv**: This will store the CSV file used to upload sellers on your marketplace.
*   **product\_csv**: This will store the CSV file used to upload products on your marketplace.
*   **product\_properties**: If you use any kind of file in your product's properties then that will be stored here.
*   **custom\_fields**: The files used in the created custom fields will be stored here.
*   **product\_design**: The initial replacement value proof will be stored here. (Only for merchants using the '[Artist Product Design](/zenith/featured-app/marketplace-product-add-ons/artist-product-design)' feature app.)
*   **digital\_order\_file**: It stores digital files uploaded using "digital product as service" in AWS S3 storage.
*   **digital\_order\_file\_service**: It stores digital files uploaded using "digital product as service" in BOX storage.
*   **logo\_img**: This will store the logo of the merchant.
*   **fulfillment**: This will store the other files related to the order fulfillment.
*   **manifest**: This will store the manifest details. (Only for merchants using '[PWA for Sellers](/zenith/featured-app/seller-add-ons/pwa)' feature app.)
*   **manifest\_icon**: This will store the image used in the manifest configuration. (Only for merchants using '[PWA for Sellers](/zenith/featured-app/seller-add-ons/pwa)' feature app.)
*   **pwa\_icon**: This will store the PWA icon used on your marketplace. (Only for merchants using '[PWA for Sellers](/zenith/featured-app/seller-add-ons/pwa)' feature app.)
*   **og\_image**: Will store the OG image used in '[PWA for sellers](/zenith/featured-app/seller-add-ons/pwa)' & '[Create an app for sellers](/zenith/featured-app/connector/seller-shopify-store-connector)' feature app.
*   **ask\_a\_question**: This will store the files related to [Ask a Question](/zenith/featured-app/seller-add-ons/ask-a-question.html#ask-a-question-as-faq) feature app.
*   **product\_video**: It will store all the product images.

How to get the Amazon S3 Bucket Region?
---------------------------------------

Follow these instructions:

*   Log in to [IAM Console](https://console.aws.amazon.com/iam/home?#home)
*   From the dashboard, click on **[S3](https://console.aws.amazon.com/s3/home)** option
*   Here, you will have a list of all the buckets on the left side.
*   Further, click on the S3 bucket name that you just created
*   Click on **Properties**
*   Here, you will see **Region** for the selected bucket also with many other properties. \[We dont support Mumbai region (ap-south-1)\]

Need help?
----------

Furthermore, if you have any issues or if you want us to configure the Amazon S3 for you, please drop an email at support@webkul.com. You can also create a ticket at  [Webkul UV Desk](https://webkul.uvdesk.com/en/customer/create-ticket/).
### SCHEDULE DEMO

[Click here to Schedule the demo of Multivendor marketplace App for Shopify ](https://egsma.io/shopify-multivendor-marketplace/)

