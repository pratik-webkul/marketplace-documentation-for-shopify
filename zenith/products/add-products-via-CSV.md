---
title: Add products via CSV
description: Add products via CSV 
author: Chirag Tyagi
---

# User Guide for Add Products Via Csv



[Multi-vendor Marketplace app for Shopify](https://store.webkul.com/Shopify-Multi-Vendor-Marketplace.html) provides an ultimate solution for the e-Commerce merchants to convert their stores into fully-fledged marketplaces.

Despite the fact that Shopify is one of the simplest platforms to start an online business.

You have to deal with bulk product upload, add multiple sellers at a time, **sellers requesting for the option to add products in bulk** if you [run an online marketplace](/zenith/introduction/).

So, to have a simplified process, this guide will help you to understand how to upload the CSV files in the app and avoid errors.

<!-- <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 12px;">
  <iframe
    src="https://www.youtube.com/embed/kzct74e3dL4"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    style="position: absolute; top:0; left:0; width:100%; height:100%; border-radius:12px;"
  >
  </iframe>
</div> -->

In the app, admin can allow sellers to add products in bulk via CSV. For this, the admin needs to follow the below-given steps:-

Go to the **Product Configuration** menu >>Enable **Add Product by CSV** tab.

[![Product Configuration](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/zsdwzwdwed.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/zsdwzwdwed.webp)

Admin Panel: Product Configuration

As soon as the admin configures the details, the option to add products via CSV gets reflected at the respective seller panels.

[![Add product by CSV](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/zwrfwergzergz.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/zwrfwergzergz.webp)

Seller Panel: Products

Now, the seller will click the **Add Product by CSV** button & choose the methods using which he/she wants to upload products in bulk.

[![add product in bulk](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/csvaddmethod.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/csvaddmethod.webp)

The seller will get the instruction file in the app.

**Please Note:-**  
If the export data is more than 500 lines, then you will receive export data in mail notifications in multiple files, each file with 5000 lines.

### Seller Currency compatibility with Add Product by CSV.

While adding the product through CSV, we have included a new column for seller currency.

When you enable the seller currency configuration in the Multivendor Marketplace Admin panel, the seller currency and compare price columns will be added to the CSV.

Common mistakes that throw errors while uploading the CSV file and Solutions to avoid them
------------------------------------------------------------------------------------------

While uploading a CSV file, vendors generally do some common mistakes that need to be taken care of.

For this, the instruction file is provided in the app. The sellers need to follow certain instructions and avoid such errors in the CSV file upload.

 **Mistake 1:** UTF-8 Not Encoded!
---------------------
You may get unwanted special characters as errors if your CSV file is not UTF-8 encoded. So, you need to confirm the UTF-8 encoding before you save any CSV file.

### **Solution**

>   
> **CSV file must include UTF 8 encoding** to avoid the unwanted generation of special characters in the CSV file.

 **Mistake 2:** Use of Local Path Images!
--------------------------
The image field must contain the URLs of the product Images if the seller is using Method 2 to upload the products in bulk.

If the seller will use the local path images in the CSV file, it throws an error as shown in the below screenshot:

[![CSV file error](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/zedqewfeferf.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/zedqewfeferf.webp)

CSV File Error

### **Solution**

> You can use **Amazon S3** Or use **Shopify CDN**. **[Checkout the Detailed Guide](https://metafieldsmanager.thebestagency.com/tutorials/import/upload-assets)**

**[Merchant Amazon S3 Setup Guide](/zenith/products/amazon-s3-setup.html)**

 **Mistake 3:** No Default title value in case of No Variant!
---------------------
This is also a common mistake done by the sellers while uploading the Product CSV file.

So, in case the product has no variant, make sure that you are using a default title value in the product CSV file.

### **Solution**

> For products with no variants, the option value should be set to "Default Title".

Make sure that sellers have added the option value as "Default Title" if any product has no variant.

 Mistake 4: Mismatch of Columns in CSV file
----------------------
Sometimes, admin upload the exact product CSV file downloaded from the Shopify store. This contradicts the instructions provided in the app and resulting in the column mismatch.

Mismatch of the number of attributes with the number of columns will throw errors while validating the CSV file.

**Solution**


The number of attributes must match with the number of columns in the CSV file.

> **The most suitable option is to:-  
> download** the sample CSV file from the app.  
> **edit** the file as per the requirement.  
> **validate** the updated CSV file.  
> **upload** the same in the app.  

 Mistake 5: Unrecognizable Character
------------------------
Sometimes, sellers get an error as "Validation Failed" while uploading product CSV file. This may happen due to unrecognizable characters used in the CSV file.

> **Solution**: Make sure that the characters used in the CSV file must contain a defined value.

 Mistake 6: Additional Columns
----------------------
Adding additional columns in the product CSV results in the column mismatch issue.

This is the reason we suggest you download the sample CSV & make the changes in the existing file as per your requirements to avoid column mismatch issues.

[![Seller Panel-Product Upload](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/csvfileuploadinssample.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/csvfileuploadinssample.webp)

Seller Panel-Upload Product in Bulk

### Solution

Make sure that the required fields in the CSV file cannot be empty.

 Mistake 7: Restricted Product Type, Tag & Collection!
------------------------------------
In some cases, you may find a CSV error showing a message something like "**Product Type is restricted**".

This error arises if the admin restricts the product type in the app & the sellers are adding types other than those restricted types in the product CSV file.

Sometimes, the merchant wants to add a specific tag to their brand.

In this case, they can restrict product tags in the app so that sellers will be able to add only those restricted tags to the products.

Also, the merchant can restrict product type & collection in the app.

**Restrict Product Tags**, **Product Types** & **Collections**:  
Enabling these options will restrict product tags, types & collections for the admin/sellers while adding/editing products.

Thus, the sellers will be adding only those tags, types & collections to products that you have added in the app. And the same needs to be added in the product CSV file too.

### Solution

**Mark:-** Make sure that you have added the restricted **Product Tags**, **Product Types** & **Collections** in the product CSV file.

> In simple words:-  
> If you have **restricted the product tags**, **product types** & **collections** in the app, make sure that only those restricted options are added in the CSV file.

[![Restriction Configuration](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/sdferdgfreg.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/sdferdgfreg.webp)

## Restrict Collection Based On Product Type

Now, the Admins can restrict collections based on the Product Type when products are added via CSV.

[![image](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/ecfefercerccre.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/ecfefercerccre.webp)

If the above configuration is enabled, and a specific collection is assigned to a product type.

[![image](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/csvproducttype.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/csvproducttype.webp)

Then, while filling in the CSV, the seller or admin must select the correct collection for the respective product type.

If the correct collection is not selected, an error will be shown during CSV validation.

Note: The Admin will need to enable the Restrict collection in order to add collection in the multivendor app.


### Add Product Description in One Line

NOTE:- The Product description of an item **should not** be added in multiple lines. To use more than one line, You need to use HTML tags.

**For Example:-  
``` html
**<p>  
Here is the Product Description:  
</p>  
<p>  
Partywear, Washable, Do not Iron  
No replacement for this product, 1-month warranty.  
</p>
```
### Conclusion

To successfully validate and upload the CSV file in the Multi-vendor Marketplace app, please ensure you follow the required guidelines.

**POINTS TO BE NOTED:-**

\-Firstly, always try to **download the Product CSV file** from the app, **modify it as per your requirement** and then, **validate** & **upload** the same in the app.

**Suggestion**:- Avoid uploading the exact CSV file downloaded from your Shopify store.

\-The **image URLs** used in the CSV file should be **publically accessible**.

\-Check the columns & fields in the CSV files in case you have **restricted product tags**, **product types** & **collections** in the app.

\-Modify your CSV file once you add any **custom fields** in the app.

> **In Short**  
> **Keep updating Your Product CSV file in the app even if you make a small change in the Product Configuration.**

<!-- > [**Learn**](https://webkul.com/blog/use-of-csv-files-for-bulk-upload/) to make the use of CSV files for Bulk Upload -->


### SCHEDULE DEMO

[Click here to Schedule the demo of Multivendor marketplace App for Shopify ](https://egsma.io/shopify-multivendor-marketplace/)