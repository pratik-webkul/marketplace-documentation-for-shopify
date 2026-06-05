import{_ as a,c as r,o as l,ah as o,j as e,a as n}from"./chunks/framework.PvdZnrZd.js";const m=JSON.parse('{"title":"Amazon S3 Setup","description":"How to setup amazon s3","frontmatter":{"title":"Amazon S3 Setup","description":"How to setup amazon s3","date":"2025-07-02T00:00:00.000Z","author":"Chirag Tyagi"},"headers":[],"relativePath":"zenith/products/amazon-s3-setup.md","filePath":"zenith/products/amazon-s3-setup.md"}'),s={name:"zenith/products/amazon-s3-setup.md"};function i(c,t,u,p,h,d){return l(),r("div",null,[...t[0]||(t[0]=[o('<h1 id="user-guide-for-amazon-s3-setup" tabindex="-1">User Guide for Amazon S3 Setup <a class="header-anchor" href="#user-guide-for-amazon-s3-setup" aria-label="Permalink to &quot;User Guide for Amazon S3 Setup&quot;">​</a></h1><p>If you are looking to build a marketplace with no restriction of shop type then <a href="/zenith/introduction/">Multi-Vendor Marketplace for Shopify</a> is the solution.</p><p>Selling physical as well as digital products on this Multi-Vendor Marketplace is really flexible &amp; easy.</p><p>In <strong>Multivendor Marketplace App</strong> for Shopify, a merchant can set up a store for physical (normal) products, digital products &amp; even both.</p><p>They can easily select the <a href="/zenith/products/digital-products.html"><strong>Shop Type</strong></a> from the app’s configuration section.<br> Now, for adding digital products to your multivendor store, you require <a href="/zenith/digital-storage/digital-storage.html">digital storage</a>.</p><p>The digital storage provided in the app depends on the plan that you have activated.</p><p>However, if you want to have more storage than provided, you can <a href="/zenith/digital-storage/digital-storage.html">upgrade</a> your storage plan or an alternative to this is using your own <strong>AWS storage</strong>.</p><p>Moreover, using your own AWS, you&#39;ll have total control over the marketplace data.</p><p>So, in this documentation, we&#39;ll see how a merchant can configure his own Amazon S3 in the <a href="/zenith/introduction/">Multivendor Marketplace</a> for Shopify.</p><h2 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-label="Permalink to &quot;Configuration&quot;">​</a></h2><p>To configure this, you need to visit Multi-vendor Marketplace Admin Panel &gt; Configuration &gt; Products Configuration:</p><p>Under the heading &#39;WANT TO USE YOUR AMAZON-S3 CREDENTIAL FOR DIGITAL PRODUCT&#39;, select Merchant S3 from the drop-down menus. Refer:</p>',12),e("p",null,[e("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/05/1amazons3.webp",alt:"Screenshot-from-2020-01-02-11-19-52",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
        const existing = document.getElementById('wk-image-overlay');
        if(existing) existing.remove();

        const overlay = document.createElement('div');
        overlay.id = 'wk-image-overlay';

        overlay.style.cssText = \`
          position:fixed;
          inset:0;
          background:rgba(0,0,0,0.88);
          display:flex;
          align-items:center;
          justify-content:center;
          z-index:99999;
          padding:20px;
          cursor:zoom-out;
          overflow:hidden;
          backdrop-filter: blur(3px);
        \`;

        // 🔹 CLOSE BUTTON
        const closeBtn = document.createElement('div');
        closeBtn.innerHTML = '&times;';

        closeBtn.style.cssText = \`
          position:absolute;
          top:20px;
          right:25px;
          color:#fff;
          font-size:42px;
          font-weight:bold;
          cursor:pointer;
          z-index:100000;
          line-height:1;
          user-select:none;
        \`;

        closeBtn.onclick = () => {
          overlay.remove();
        };

        const img = document.createElement('img');
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/05/1amazons3.webp";

        img.style.cssText = \`
          max-width:95%;
          max-height:95%;
          border-radius:12px;
          transition:transform .15s ease;
          cursor:zoom-in;
          will-change:transform;
          user-select:none;
        \`;

        let scale = 1;

        // scroll zoom
        overlay.onwheel = (e) => {
          e.preventDefault();

          scale += e.deltaY * -0.001;
          scale = Math.min(Math.max(1, scale), 5);

          img.style.transform = 'scale(' + scale + ')';
        };

        // double click zoom
        img.ondblclick = () => {
          scale = scale === 1 ? 2 : 1;
          img.style.transform = 'scale(' + scale + ')';
        };

        overlay.appendChild(closeBtn);
        overlay.appendChild(img);

        document.body.appendChild(overlay);

        // close overlay
        overlay.onclick = (e) => {
          if (e.target === overlay) {
            overlay.remove();
          }
        };

        // esc close
        document.onkeydown = (e) => {
          if (e.key === 'Escape') {
            overlay.remove();
          }
        };
      `})],-1),e("p",null,"Further, visit Multivendor Marketplace Admin Panel > Configuration > Amazon S3/Box Details",-1),e("p",null,[n("Here, fill out your "),e("strong",null,"Amazon S3 Details"),n(":")],-1),e("p",null,[e("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/05/2amazons3box-1.webp",alt:"7r1n60shwly-1516×849-",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
        const existing = document.getElementById('wk-image-overlay');
        if(existing) existing.remove();

        const overlay = document.createElement('div');
        overlay.id = 'wk-image-overlay';

        overlay.style.cssText = \`
          position:fixed;
          inset:0;
          background:rgba(0,0,0,0.88);
          display:flex;
          align-items:center;
          justify-content:center;
          z-index:99999;
          padding:20px;
          cursor:zoom-out;
          overflow:hidden;
          backdrop-filter: blur(3px);
        \`;

        // 🔹 CLOSE BUTTON
        const closeBtn = document.createElement('div');
        closeBtn.innerHTML = '&times;';

        closeBtn.style.cssText = \`
          position:absolute;
          top:20px;
          right:25px;
          color:#fff;
          font-size:42px;
          font-weight:bold;
          cursor:pointer;
          z-index:100000;
          line-height:1;
          user-select:none;
        \`;

        closeBtn.onclick = () => {
          overlay.remove();
        };

        const img = document.createElement('img');
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/05/2amazons3box-1.webp";

        img.style.cssText = \`
          max-width:95%;
          max-height:95%;
          border-radius:12px;
          transition:transform .15s ease;
          cursor:zoom-in;
          will-change:transform;
          user-select:none;
        \`;

        let scale = 1;

        // scroll zoom
        overlay.onwheel = (e) => {
          e.preventDefault();

          scale += e.deltaY * -0.001;
          scale = Math.min(Math.max(1, scale), 5);

          img.style.transform = 'scale(' + scale + ')';
        };

        // double click zoom
        img.ondblclick = () => {
          scale = scale === 1 ? 2 : 1;
          img.style.transform = 'scale(' + scale + ')';
        };

        overlay.appendChild(closeBtn);
        overlay.appendChild(img);

        document.body.appendChild(overlay);

        // close overlay
        overlay.onclick = (e) => {
          if (e.target === overlay) {
            overlay.remove();
          }
        };

        // esc close
        document.onkeydown = (e) => {
          if (e.key === 'Escape') {
            overlay.remove();
          }
        };
      `})],-1),o('<h2 id="steps-to-get-the-amazon-s3-images" tabindex="-1">Steps to get the Amazon S3 images <a class="header-anchor" href="#steps-to-get-the-amazon-s3-images" aria-label="Permalink to &quot;Steps to get the Amazon S3 images&quot;">​</a></h2><p>To get the Amazon S3 Detail &amp; Secret Key, follow these steps:</p><ul><li>Log in to <a href="https://console.aws.amazon.com/iam/home?#home" target="_blank" rel="noreferrer">IAM Console</a></li><li>From the navigation menu, click on the <strong>Users</strong></li><li>Here, you need to select the IAM username</li><li>Further, click <strong>User Actions</strong> &gt; <strong>Manage Access Keys</strong></li><li>Click on <strong>Create Access Key</strong></li><li>Here, you&#39;ll have your Access &amp; also the Secret keys</li><li>Moreover, you can even download the credentials, to keep it secure for future use by clicking on the <strong>Download Credentials</strong> button.</li></ul><h2 id="setting-up-amazon-s3-bucket" tabindex="-1">Setting up Amazon S3 Bucket <a class="header-anchor" href="#setting-up-amazon-s3-bucket" aria-label="Permalink to &quot;Setting up Amazon S3 Bucket&quot;">​</a></h2><p>Once you configure the above-said details, you need to create a <strong>bucket</strong>. The same bucket name will be used in the above configuration (AWS Bucket Name).</p><p>Further, inside this bucket, you need to create the following folders by the exact names as provided:</p><ul><li><strong>product_img</strong>: It will store all the product images.</li><li><strong>store_logo</strong>: Used to store your seller&#39;s profile images.</li><li><strong>shop_logo</strong>: It will store the Shop logo of your marketplace sellers.</li><li><strong>store_banner</strong>: Used to store the banner image used by your marketplace sellers.</li><li><strong>checkout-image</strong>: This will store the checkout image used in your shop.</li><li><strong>shipping_label</strong>: All the shipping labels generate using any <a href="/zenith/marketplace-shipping/marketplace-shipping.html">shipping feature app</a> will be stored here.</li><li><strong>seller_shop_logo</strong>: Here, the shop logos of your sellers&#39; synced Shopify stores will be stores. (Only for &#39;<a href="/zenith/featured-app/connector/seller-shopify-store-connector.html">Create an app for sellers</a>&#39; feature app users. )</li><li><strong>icon_img</strong>: This will store icon images, only for &#39;<a href="https://webkul.com/blog/shopify-multivendor-marketplace-seller-product-sync-new-theme/" target="_blank" rel="noreferrer">Create an app for sellers</a>&#39; feature app users.</li><li><strong>favicon_img</strong>: This will store the favicon image used in your marketplace.</li><li><strong>ff_logo</strong>: Used to store &#39;fulfilled by admin&#39; logo. (Only for &#39;<a href="/zenith/featured-app/marketplace-product-add-ons/stock-management.html">Stock Management</a>&#39; feature app users.)</li><li><strong>badge_img</strong>: Used to store seller badges in case you are using the <a href="/zenith/featured-app/seller-add-ons/seller-and-customer-badge.html">Seller Badge</a> feature app.</li></ul><h6 id="some-more" tabindex="-1">Some more... <a class="header-anchor" href="#some-more" aria-label="Permalink to &quot;Some more...&quot;">​</a></h6><ul><li><strong>image_csv</strong>: This will store the images upload via CSV on your marketplace.</li><li><strong>image_zip</strong>: This will be used to store the images upload via a zip file on your marketplace.</li><li><strong>seller_csv</strong>: This will store the CSV file used to upload sellers on your marketplace.</li><li><strong>product_csv</strong>: This will store the CSV file used to upload products on your marketplace.</li><li><strong>product_properties</strong>: If you use any kind of file in your product&#39;s properties then that will be stored here.</li><li><strong>custom_fields</strong>: The files used in the created custom fields will be stored here.</li><li><strong>product_design</strong>: The initial replacement value proof will be stored here. (Only for merchants using the &#39;<a href="/zenith/featured-app/marketplace-product-add-ons/artist-product-design.html">Artist Product Design</a>&#39; feature app.)</li><li><strong>digital_order_file</strong>: It stores digital files uploaded using &quot;digital product as service&quot; in AWS S3 storage.</li><li><strong>digital_order_file_service</strong>: It stores digital files uploaded using &quot;digital product as service&quot; in BOX storage.</li><li><strong>logo_img</strong>: This will store the logo of the merchant.</li><li><strong>fulfillment</strong>: This will store the other files related to the order fulfillment.</li><li><strong>manifest</strong>: This will store the manifest details. (Only for merchants using &#39;<a href="/zenith/featured-app/seller-add-ons/pwa.html">PWA for Sellers</a>&#39; feature app.)</li><li><strong>manifest_icon</strong>: This will store the image used in the manifest configuration. (Only for merchants using &#39;<a href="/zenith/featured-app/seller-add-ons/pwa.html">PWA for Sellers</a>&#39; feature app.)</li><li><strong>pwa_icon</strong>: This will store the PWA icon used on your marketplace. (Only for merchants using &#39;<a href="/zenith/featured-app/seller-add-ons/pwa.html">PWA for Sellers</a>&#39; feature app.)</li><li><strong>og_image</strong>: Will store the OG image used in &#39;<a href="/zenith/featured-app/seller-add-ons/pwa.html">PWA for sellers</a>&#39; &amp; &#39;<a href="/zenith/featured-app/connector/seller-shopify-store-connector.html">Create an app for sellers</a>&#39; feature app.</li><li><strong>ask_a_question</strong>: This will store the files related to <a href="/zenith/featured-app/seller-add-ons/ask-a-question.html#ask-a-question-as-faq">Ask a Question</a> feature app.</li><li><strong>product_video</strong>: It will store all the product images.</li></ul><h2 id="how-to-get-the-amazon-s3-bucket-region" tabindex="-1">How to get the Amazon S3 Bucket Region? <a class="header-anchor" href="#how-to-get-the-amazon-s3-bucket-region" aria-label="Permalink to &quot;How to get the Amazon S3 Bucket Region?&quot;">​</a></h2><p>Follow these instructions:</p><ul><li>Log in to <a href="https://console.aws.amazon.com/iam/home?#home" target="_blank" rel="noreferrer">IAM Console</a></li><li>From the dashboard, click on <strong><a href="https://console.aws.amazon.com/s3/home" target="_blank" rel="noreferrer">S3</a></strong> option</li><li>Here, you will have a list of all the buckets on the left side.</li><li>Further, click on the S3 bucket name that you just created</li><li>Click on <strong>Properties</strong></li><li>Here, you will see <strong>Region</strong> for the selected bucket also with many other properties. [We dont support Mumbai region (ap-south-1)]</li></ul><h2 id="need-help" tabindex="-1">Need help? <a class="header-anchor" href="#need-help" aria-label="Permalink to &quot;Need help?&quot;">​</a></h2><p>Furthermore, if you have any issues or if you want us to configure the Amazon S3 for you, please drop an email at <a href="mailto:support@webkul.com" target="_blank" rel="noreferrer">support@webkul.com</a>. You can also create a ticket at  <a href="https://webkul.uvdesk.com/en/customer/create-ticket/" target="_blank" rel="noreferrer">Webkul UV Desk</a>.</p><h3 id="schedule-demo" tabindex="-1">SCHEDULE DEMO <a class="header-anchor" href="#schedule-demo" aria-label="Permalink to &quot;SCHEDULE DEMO&quot;">​</a></h3><p><a href="https://egsma.io/shopify-multivendor-marketplace/" target="_blank" rel="noreferrer">Click here to Schedule the demo of Multivendor marketplace App for Shopify </a></p>',16)])])}const f=a(s,[["render",i]]);export{m as __pageData,f as default};
