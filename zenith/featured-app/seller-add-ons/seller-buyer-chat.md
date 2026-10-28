---
title: SELLER BUYER CHAT
description: SELLER BUYER CHAT
date: 2025-07-29
author: Chirag Tyagi
---

# User Guide for Seller Buyer Chat

[ChatWhizz](https://chatwhizz.com/) is now integrated with the [Seller-Buyer Chat](/zenith/featured-app/seller-add-ons/seller-buyer-chat) add-on of the [Multivendor Marketplace App](https://apps.shopify.com/multi-vendor-marketplace) for Shopify.

Using this integration, you can display a live chat widget on your storefront. The customers can connect with the sellers on the runtime and get their queries resolved.

## ChatWhizz Registration for Seller buyer chat

**How to get registered on ChatWhizz(Registration Process)**  
  
For registration on chatwhizz kindly check this [link](https://chatwhizz.com/).

Once you open the link you need to signup by clicking on the **sign up for free** button.

![c1-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/06/c1-1-1200x811.png)

Thereafter, you need to enter the email and your workspace URL.

**Email-** Your active email so that you can easily receive emails related to the ChatWhizz account.

**Workspace URL-** Enter the domain name that you would like for your chatwhizz account. It should be alphanumeric.

Workspace URL must not have empty space.

**Choose country:** Select your country to continue.

![Country](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/06/chatwhiz1-1200x857.webp)

**Once you click “Create Account,” you’ll see two options appear. You have to choose Seller-Buyer Chat .**

The system selects Organization Chat by default, but you need to switch to Seller-Buyer Chat here .

![SELLER BUYER REGISTRATION](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/04/sellerbuyerreg-1200x943.webp)

After that, you need to select the plan as per your organizational need, as ChatWhizz is the subscription-based platform where you need to select the plan.

![seller buyer plan ](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/10/sellerbuyer1.webp)

Once you select the plan you will be redirected to the home page of seller buyer chat .

![seller buyer dashborad](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/04/sellerbuyerdash-1200x857.webp)

## Installation at Multivendor Marketplace End: Seller-Buyer Chat Add-on

To install the add-on, visit **Multivendor Marketplace Admin Panel** > Hover over the **three dots** on the top right of the dashboard > **Feature Apps**. Next, enable the **Seller-Buyer Chat** add-on:

![r9](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/12/addsellerbuyer.webp)

Once enabled, visit **Configuration** > **Seller Buyer Chat**:

![image-25](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/12/configurationsellerbuyer.webp)

Next, you need to configure the add-on by entering the following details:

*   Email ID (Admin needs to mention marketplace admin email ID)
*   Access Token
*   Refresh Token

![c2](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/12/apiseller.webp)

To get the access token and refresh token, visit **ChatWhizz admin > API details:**

![access tocken](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/04/sellerbuyertocket.webp)

Here, you will have both the keys:

Once you'll save the details, you will get this success message on the screen:

![c3](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/12/savedconfig.webp)

Once the seller-buyer chat is successfully configured, it will appear under the **Domain** section on the ChatWhizz dashboard.

![seller buyer domain](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/04/sellerbuyerdomain-1200x857.webp)

NOTE:

If the admin enables **Allow Sellers to Configure this Feature** tab, then the seller will be able to see and configure the feature on the seller panel.

![c5](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/12/chatconfig.webp)

But if the admin disables "**Allow Sellers to Configure this Feature**" tab, then the seller will not be able to configure.

![Seller-Buyer Chat](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/12/chatsellerend.webp)

## Auto-login to Seller-Buyer Chat

Sellers can now auto-login to the Chatwhizz panel from within their own seller panel.

They will find the option under Seller panel>> Configuration>>Seller-Buyer Chat>> Chat login

![Seller-Buyer Chat cofigs ](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/12/chatlogin.webp)

## Code Instructions

Furthermore, visit **Multivendor Admin Panel** > **Configuration** > **Instructions for Marketplace**.

Here, you will have the code to add to the **footer.liquid** (or theme.liquid) template to display the chat box on frontend:

To show Chat History on the Storefront Customer Account page, you need to add the codes in **main-account.liquid** template

![Seller-Buyer Chat codes ](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/12/codepasting.webp)

### Code For Online Store 2.0

If you are using Online Store 2.0 (Example- Dawn), the codes to show the chatbox will remain the same.

## Marketplace Seller Panel

On the marketplace seller panel, a seller needs to visit **Configuration** > **Seller Buyer Chat**:

![Seller-Buyer Chat seller config](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/12/chatmenu.webp)

Lastly, enable the option & save the changes:

![Seller-Buyer Chat configuration](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/12/sbchat.webp)

Once done, an operator account will be created for the seller. The seller will receive an email regarding the same with login credentials.

## Chat Box on Storefront

You will have the chat widget on the bottom of the page (depending on the configuration):

![Seller-Buyer Chat store front](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/04/image-32-1200x597.png)

Customers can send their queries in this chat box:

![Seller-Buyer Chat store front ](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/04/image-33.png)

The operators/sellers will monitor it from the ChatWhizz backend.

![image-34](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/04/image-34-1200x590.png)

**Note**: Suppose a customer is on the product description page of product A. If the customer initiates the chat from this page, the seller selling product A will receive the message.

Similarly, the product page from where the chat starts will decide which seller will get the chat notification.

Now, in case the customer is on any other page that is not a product page, the chat notification will go to the admin. The admin needs to conduct the chat in that case.

## Show chat history to customers

Now, you can show chat history to your customers on their account page. For this, firstly admin needs to regenerate the file from the storefront configuration

Multivendor marketplace admin panel>>Configuration>>Storefront configuration>> regenerate Seller buyer chat

![Seller-Buyer Chat admin config](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/12/regenarate.webp)

A page named "Seller Buyer Chat" will be created on the Shopify pages section.

**NOTE-** Make sure to add the code to the respective liquid file on Shopify as [**mentioned above**](/zenith/featured-app/seller-add-ons/seller-buyer-chat.html#code-instructions).

## SELLER END

On the seller's end, a chat widget will appear in the dashboard like this.

![Seller-Buyer Chat seller dashboard](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/12/widget.webp)

**NOTE- To show the chat widget on the seller dashboard make sure that** **add-on is enabled for that particular seller.**

Seller can accept/decline the chat and can create a ticket or end chat of an ongoing chat.

Enable UV desk addon on chatwhizz end for ticket creation.

![Seller-Buyer Chat seller dashboard](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/12/chat.webp)

![Seller-Buyer Chat seller end ](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/12/chatbox.webp)

## On customer end

This is how it will look on the customer end

![screenshot_1706088448749](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/01/screenshot_1706088448749-1200x575.png)

![Seller-Buyer Chat customer end](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/01/screenshot_1706088463155-1200x575.png)

![Seller-Buyer Chat](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/01/seller-buyer-chat.myshopify.com_pages_seller-buyer-chat_clientId65b0d6fa1a4d0420fc29f108-1200x942.png)

### **Auto Bot Response (Seller-Buyer Chat)**

We have added a new feature in your seller-buyer chat — **Auto Bot Response**.

 This feature allows your store to automatically reply to customer queries.

Whenever a customer visits your website and opens the chat, the bot will respond to **product-related** and **order-related** questions based on your store data.

### **Add Your Domain**

1.  Go to:  
    **Chatwhizz Dashboard → Domain → Add New**
2.  Fill in the details:
    *   **Domain Name** → Enter your website URL (without  https://)
    *   **Email** → Enter your email ID
3.  Click on **Create**

 After this, your domain will be successfully added to the list.

![domain](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/04/prera.webp)

### **Enable Auto Response**

1.  After adding the domain, click on the **Eye Icon** next to it

![image](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/04/kkkkkkk.webp)

2.  Open **General Configuration**
3.  Find the option: **Enable Auto Response**
    *   Turn it **ON**
4.  You will see this message:  
    _“Please configure the Auto Response section first, to ensure proper bot functionality.”_

 This means you now need to complete the setup.

5.  Click on **Save**

![image](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/04/saedkj.webp)

 After saving, a new section **“Auto Response”** will appear.

### **Configure Auto Response (Very Important Step)**

Go to the **Auto Response section** and fill all details carefully:

*   **Platform** → Select **Shopify**
*   **AI Agent** → Select **ChatGPT**
*   **API URL** →  
    You must enter this exact URL (do not change anything):  
    https://api.openai.com/v1/chat/completions
*   **API Key** → Paste your OpenAI API Key here
*   **Response Type** → Select **POST**

 After filling all details, click on **Save Changes**

![image](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/04/firt.webp)

**How to Get OpenAI API Key**
-----------------------------

This step is required for bot functionality.

1.  Go to: [https://platform.openai.com/](https://platform.openai.com/)
2.  Create a new account or login
3.  Go to **API Keys section**
4.  Click on **Create API Key**
5.  Enter:
    *   Name
    *   Project
6.  Click on **Create Secret Key**

 A key will be generated  
Copy this key and paste it into Chatwhizz (API Key field)

![opem](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/04/prera-1.webp)

![api](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/04/prera2.webp)

![key ](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/04/jhsjsdkljkljasdkjfksajdfs.webp)

**Install the Chatwhizz live chat App in Shopify**
--------------------------------------------------

1.  Open **Shopify App Store**
2.  Search: **[Chatwhizz Live Chat](https://apps.shopify.com/chatwhizz-live-chat?st_source=autocomplete&surface_detail=autocomplete_apps)**
3.  Click on **Install**

 This app is **free**, no extra payment required.

![install](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/04/newwww.webp)

4.  After installation:
    *   You will see **Choose Your Chat Mode**
    *   Select **Seller Buyer Chat**
    *   Click **Continue**

![choose mode](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/04/prer.webp)

 Once done, Auto Bot functionality will be activated.

![activated](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/04/pereir.webp)

**Frontend (What Customer Will See)**
-------------------------------------

*   A **chat icon** will appear on your website
*   A **default welcome message** will be shown

 Customers can:

*   Ask product-related questions
*   Ask order-related queries

 Bot will automatically respond based on your store data

![frontend](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/04/dafsdfasdf.webp)

**Edit Default Welcome Message**
--------------------------------

If you want to change the message shown to customers:

1.  Go to:  
    **Chatwhizz Panel → Domain → Eye Icon**
2.  Open:  
    **Custom Message → Bot Operator**
3.  Click on **Edit**
4.  Update the message as per your requirement and save

![custom message](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/04/dfasdfasdfasdfasf.webp)


### SCHEDULE DEMO

[Click here to Schedule the demo of Multivendor marketplace App for Shopify ](https://egsma.io/shopify-multivendor-marketplace/)

