---
title: Seller URL customisation
description: Seller URL customisation
author: Chirag Tyagi
---

In this documentation, we'll find out how the admin can customize the seller login URL/seller subdomain for [Multi-Vendor Marketplace App](/zenith/introduction/) for Shopify.

Note: During the app Installation and onboarding process. You can now modify the part of your existing(default) Seller URL that appears before ".sp-seller.webkul.com" once

If you want to customize the entire seller URL, then follow the instructions shared below:

Steps to Customize Seller Login URL:
------------------------------------

### In case you are using any other Web hosting Services other than Cloudflare

You need to create a CNAME record through your web hosting platform, such as GoDaddy, Shopify, Domain Factory, etc.

As an example, we will use Shopify here:

Visit your **Shopify backend** > **Setting** \> **Domains**.

Select the Domain.

[![image](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/10/capture2-1200x472.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/10/capture2-1200x472.webp)

Furthermore, you need to click on **Edit** **DNS Setting** from **Domain Setting.**

[![image](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/10/cap3-1200x575.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/10/cap3-1200x575.webp)

Then select **CNAME record** from the drop-down options.

[![image](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/10/cna4.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/10/cna4.webp)

You need to enter the Name as something like 'seller,' 'vendor,' or 'marketplace,', etc depending on what you prefer to display.

For example:

If you enter '**seller**' as the Host Name, your URL will be: **seller.mystore.com/.**  
If you enter '**vendor**' as the Host Name, your URL will be: **vendor.mystore.com/.**

And Point to: **sh-saas-ssl.webkul.com**

[![image](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/10/cnam1-1.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/10/cnam1-1.webp)

Now, once this is done, the URL won’t work instantly. You need to inform us at support@webkul.com.

We will make the edits from our end, and then it will start working.

### In Case you are using Cloudflare as your DNS

You need to navigate to the DNS >> Records. Furthermore, Click on the Add Record. As mentioned in the image below.

[![image](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/10/cloud1-1200x471.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/10/cloud1-1200x471.webp)

Next, enter the required details, such as the **Name**, and set the **Target** to **sh-saas-ssl.webkul.com**. Make sure to **disable the proxy status**, as shown in the image below, and then click **Save**.

[![ssh](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/11/ssh-1200x602.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/11/ssh-1200x602.webp)

