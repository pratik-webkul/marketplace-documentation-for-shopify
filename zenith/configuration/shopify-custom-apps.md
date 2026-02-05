---
title: Shopify Custom Apps
description: Shopify Custom Apps
author: Chirag Tyagi
---


If you are using [Multi vendor Marketplace app for Shopify](https://store.webkul.com/Shopify-Multi-Vendor-Marketplace.html), you can now add a maximum of 5 Custom apps to the Multi-vendor app.

You can create Shopify Custom Apps and configure them in the app to resolve the API limit issue.

### Why would you as a Merchant Need this

The [Shopify API](https://webkul.com/blog/product-auction-api-documentation-for-shopify/) call limit only allows for two requests per second. So, we get 2 API calls per second from the Shopify end. Sometimes, this API gets exhausted when you deal with larger data.

Suppose, in case you sync products in bulk, there might be some possibilities that the API gets exhausted, and the complete data won’t get synced properly.

So, to overcome this API exhaust issue, “Creating Custom apps in the Multi-vendor App is a perfect solution to this problem".

In Custom Apps, Shopify provides 3 to 4 API calls per second.

So, if the merchant lets say, create 1 Custom app on their Shopify store, then per second we will get going to have around 6 API calls per second, which are of course greater than 2 API calls.

This way, the sync processes would run smoothly.

Points to be Noted:-

*   From here, you can add **a maximum of 5 custom apps** to the multi-vendor app.
*   Firstly, you need to **provide the required permissions** in the Shopify private app.

### NEW WORKFLOW

### How to create a custom app in the Multi-vendor App?

Merchants have to log in to their dev dashboard through [dev.shopify.com](http://dev.shopify.com) and then log in to the store.

![devlogin](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/03/devlogin-1-1200x545.webp)

After logging in to the dev dashboard with your store, click on the create app button.

![create app for seller shopify store connector](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/02/createapp-1-1200x545.webp)

Enter the name and click on the create button.

![app name ](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/02/appname-1200x545.webp)

You will be redirected to the Create a version page, where you have to fill in the necessary details.

![create a version page for seller shopify store connector](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/02/createaversionspage-1155x1024.webp)

Now, scroll down and fill in the URLs section.

Follow these steps to find the App URL and Preference URL:-

*   You have to log in to the Multivendor admin portal >> go to the **“Shopify Custom Apps”** inside the Configuration menu >> click on the **"Add Shopify Private App"** \>> then from the custom app type dropdown select the **"New Custom App"** option >>copy the App URL from there >> paste it into the App URL and Preferences URL block.

![Shopify Custom App ](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/03/addshopifyprivateapp-1200x545.webp)

![copy shopify app url ](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/03/customapptypeappurl-1200x545.webp)

And, paste the link here.

![paste url](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/02/sellersideurlpaste-1200x545.webp)

Now, go back to the **“**Shopify Custom Apps**”** in the admin portal and copy the other URL under the App URL.

![copy shopify other url ](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/03/customapptypeotherurl-1200x545.webp)

And, paste it here in the Redirect URL along with the App URL. Only use a comma ( , ) to separate them.

![paste other url](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/02/pasteredirecturl-1200x545.webp)

### Provide the required permissions in the Shopify private app

**Note: Be very specific about the permissions. If it is wrong, no data will be updated as no API will be hit.**

Now, copy these required permissions and paste them into the scope block altogether without any space between them:-

`write_assigned_fulfillment_orders,read_assigned_fulfillment_orders,read_fulfillments, write_fulfillments,read_inventory,write_inventory`

`read_locations,read_orders, write_orders,read_products, write_products,read_markets_home,read_customers,write_customers,read_themes,write_themes,read_publications,write_publications`

![scope](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/02/scopes-1200x545.webp)

Then, click on Release. A field to enter the version name will appear. You can fill it in or leave it blank; the name will be auto-generated. Click on release.

![release version](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/02/versionname-1-1200x545.webp)

Go back to your dev dashboard, open the app you just created, and navigate to the settings and copy the client ID from the “Credential” section.

![client id](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/02/appsettingcredential-1200x544.webp)

![copy secret key](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/02/copysecreatkey-1200x545.webp)

Paste the client ID in the “Api key” block in the **“Shopify Custom App”** inside the Configuration menu at the admin portal.

Also, copy the “Secret Key” from the “Credential” section and paste it in the "Access Token" block here. You can name the private app whatever you want.

![shopify secret app form](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/03/shopifysecretappformfill-1.webp)

And, click on the “save and install” button at the bottom.

After you click the **“Save and Install”** button, the system redirects you to your Shopify store to install the app.

But, if you get an error message like shown in this image below, then follow the process given below the image.

![error](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/03/error-1200x545.webp)

Go to your Shopify partner account >> navigate to “App distribution” >> All apps >> then click on the custom app you created.

![app distribution](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/02/appdistribution-1-1200x545.webp)

From the Overview page, click on the "Choose distribution" Button.

![choose distribution](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/03/choosedistribution-1200x545.webp)

Select the "Custom Distribution" option and click Select.

![customdistribution](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/03/customdistribution-1200x545.webp)

After this, you will be redirected to this page, and you have to ignore this page.

![ignore](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/03/ignore-1200x545.webp)

Then, go back to your **Multivendor admin panel** and navigate to the **“Shopify Custom App”** section under the **Configuration** menu.

After filling in all the required details, click on **“Save & Install”**.  
Once this is done, the app will be installed successfully.

![install ](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/02/installapp-1200x545.webp)

### LEGACY WORKFLOW (Old)

#### How to Create Custom Apps in the Multi-vendor App?

To Add a Shopify Custom App, you need to visit the Shopify Admin Panel >> Apps >> Develop apps

![r1](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/09/r1.png)

 Now click on "Create an App"

![create-app](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/03/create-app-1200x480.png)

Enter the name for the app as per your convenience and then click on "Create"

![enter-name](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/03/enter-name-1200x526.png)

Click on "Configure Admin API Scope"

![configure-api-scope](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/03/configure-api-scope-1200x488.png)

### Provide the required permissions in the Shopify private app

1.  Product: Write inventory and Read inventory
2.  Inventory: Write Products and read products
3.  Order: View or manage orders.
4.  Location: Read locations

Then click on "Save".

**Note: Be very specific about the permissions. If it is wrong, no data will be updated as no API gets hit.**

Select these permissions mentioned below:-

`write_assigned_fulfillment_orders,read_assigned_fulfillment_orders,read_fulfillments, write_fulfillments,read_inventory,`

`write_inventory,read_locations,read_orders, write_orders,read_products, write_products,read_markets_home`,`read_customers,write_customers`

![save-issues](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/03/save-issues-1200x507.png)

Click on "Install App"

![install-app](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/03/install-app-1200x492.png)

Copy the API credential, after that you need to paste this in Mulvendor Private App

![api-token](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/03/api-token-1200x775.png)

To paste these credentials in the "**Shopify private apps**" section of the Multi-vendor Admin Panel  
Go to Multivendor Admin Panel>> Configuration>>Shopify private apps>> Click on "Add shopify Private App"

![Shopify-Private-Apps-Admin-mvm](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/03/Shopify-Private-Apps-Admin-mvm-1200x513.png)

![name-of-the-app](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/03/name-of-the-app-1200x503.png)

**Please Remember** :- In case you want to delete the Custom app on Shopify, firstly you need to delete/disable the same in the app.

Otherwise, the access token will get expired and no API call gets hit from the Multi-vendor app.
