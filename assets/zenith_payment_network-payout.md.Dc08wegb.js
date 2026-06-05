import{_ as o,c as a,o as r,ah as n,j as e}from"./chunks/framework.PvdZnrZd.js";const m=JSON.parse('{"title":"Country Wise Shipping","description":"Country Wise Shipping","frontmatter":{"title":"Country Wise Shipping","description":"Country Wise Shipping","author":"Chirag Tyagi"},"headers":[],"relativePath":"zenith/payment/network-payout.md","filePath":"zenith/payment/network-payout.md"}'),i={name:"zenith/payment/network-payout.md"};function l(s,t,c,p,d,h){return r(),a("div",null,[...t[0]||(t[0]=[n('<h1 id="user-guide-for-network-payout" tabindex="-1">User Guide for Network Payout <a class="header-anchor" href="#user-guide-for-network-payout" aria-label="Permalink to &quot;User Guide for Network Payout&quot;">​</a></h1><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><p>We have launched the <strong>Network International Payment Integration</strong> in the Shopify Multivendor Marketplace app. This integration allows the marketplace admin to send seller payouts directly through <strong>Network International</strong>.</p><p>Using this integration, the admin can configure <strong>automatic</strong> or <strong>manual payouts</strong> for sellers. Once configured, payouts can be triggered after <strong>order delivery</strong> or <strong>order fulfillment</strong>, depending on the admin’s preference.</p><p>Sellers only need to provide their <strong>Beneficiary ID</strong>, after which the admin can process payouts through the Network International payout system.</p><p>This guide explains how to configure the Network International payout method in the marketplace and how sellers can receive their payouts.</p><h2 id="step-1-enable-the-network-payout-feature-app" tabindex="-1">Step 1: Enable the Network Payout Feature App <a class="header-anchor" href="#step-1-enable-the-network-payout-feature-app" aria-label="Permalink to &quot;Step 1: Enable the Network Payout Feature App&quot;">​</a></h2><p>First, the admin needs to enable the Network Payout feature app from the Feature Apps section.</p><blockquote><p><strong>Note:</strong><br> The Network Payout feature app costs <strong>$10/month</strong>, which will be charged in addition to your existing Multivendor Marketplace app plan.</p></blockquote><h1 id="steps" tabindex="-1">Steps <a class="header-anchor" href="#steps" aria-label="Permalink to &quot;Steps&quot;">​</a></h1><ol><li><p>Go to:</p><p><strong>Admin Panel → Feature Apps</strong></p></li><li><p>Locate the feature app <strong>“Network Payout.”</strong></p></li><li><p>Click <strong>Enable</strong> to activate the feature.</p></li></ol>',11),e("p",null,[e("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/03/networkapp.webp",alt:"Network Payout Feature App",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/03/networkapp.webp";

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
      `})],-1),n('<h2 id="step-2-configure-network-international-payment" tabindex="-1">Step 2: Configure Network International Payment <a class="header-anchor" href="#step-2-configure-network-international-payment" aria-label="Permalink to &quot;Step 2: Configure Network International Payment&quot;">​</a></h2><p>After enabling the feature app, the admin needs to configure the payout settings.</p><h1 id="steps-1" tabindex="-1">Steps <a class="header-anchor" href="#steps-1" aria-label="Permalink to &quot;Steps&quot;">​</a></h1><p>Navigate to:</p><p><strong>Admin Panel → Payments → Seller Payment Configuration</strong></p><p>Configure the following options:</p><h1 id="enable-network-international-payment-method" tabindex="-1">Enable Network International Payment Method <a class="header-anchor" href="#enable-network-international-payment-method" aria-label="Permalink to &quot;Enable Network International Payment Method&quot;">​</a></h1><ul><li>Enable Auto Pay to Seller</li><li>Enter the Client ID</li><li>Enter the API Key</li></ul><p>Select the payout trigger condition:</p><h3 id="pay-after-delivery" tabindex="-1">Pay After Delivery <a class="header-anchor" href="#pay-after-delivery" aria-label="Permalink to &quot;Pay After Delivery&quot;">​</a></h3><h3 id="pay-after-fulfillment" tabindex="-1">Pay After Fulfillment <a class="header-anchor" href="#pay-after-fulfillment" aria-label="Permalink to &quot;Pay After Fulfillment&quot;">​</a></h3><p>Optionally, you can also deduct shipping charges before sending payouts:</p><h3 id="enable-deduct-shipping-charges" tabindex="-1">Enable Deduct Shipping Charges <a class="header-anchor" href="#enable-deduct-shipping-charges" aria-label="Permalink to &quot;Enable Deduct Shipping Charges&quot;">​</a></h3><ul><li>Enter the amount to deduct</li></ul><h3 id="click-save" tabindex="-1">Click Save <a class="header-anchor" href="#click-save" aria-label="Permalink to &quot;Click Save&quot;">​</a></h3>',15),e("p",null,[e("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/03/enableconfig.webp",alt:"Enable Configuration",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/03/enableconfig.webp";

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
      `})],-1),e("p",null,[e("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/03/autopay.webp",alt:"Auto Pay Configuration",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/03/autopay.webp";

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
      `})],-1),n('<h2 id="step-3-obtain-client-id-merchant-id" tabindex="-1">Step 3: Obtain Client ID (Merchant ID) <a class="header-anchor" href="#step-3-obtain-client-id-merchant-id" aria-label="Permalink to &quot;Step 3: Obtain Client ID (Merchant ID)&quot;">​</a></h2><p>The Client ID used in the integration corresponds to the <strong>Merchant ID</strong> provided by Network International.</p><h1 id="steps-to-obtain-merchant-id" tabindex="-1">Steps to Obtain Merchant ID <a class="header-anchor" href="#steps-to-obtain-merchant-id" aria-label="Permalink to &quot;Steps to Obtain Merchant ID&quot;">​</a></h1><ol><li><p>Log in to the <strong>Network International Merchant Portal (N-Genius Portal).</strong></p></li><li><p>Navigate to:</p><p><strong>Account Settings / Business Information</strong></p></li><li><p>Locate the <strong>Merchant ID / Merchant Reference</strong>.</p></li></ol><p>This Merchant ID is used in the payout API endpoint:</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/payouts/merchants/{merchantId}/payout-orders</span></span></code></pre></div><p>The <code>{merchantId}</code> value is the <strong>Client ID</strong> that must be entered in the marketplace configuration.</p><p><strong>Official Documentation:</strong><br><a href="https://docs.ngenius-payments.com/" target="_blank" rel="noreferrer">https://docs.ngenius-payments.com/</a></p><hr><h2 id="step-4-generate-api-key" tabindex="-1">Step 4: Generate API Key <a class="header-anchor" href="#step-4-generate-api-key" aria-label="Permalink to &quot;Step 4: Generate API Key&quot;">​</a></h2><p>The API Key is required to authenticate payout requests from the marketplace to Network International.</p><h1 id="steps-2" tabindex="-1">Steps <a class="header-anchor" href="#steps-2" aria-label="Permalink to &quot;Steps&quot;">​</a></h1><ol><li><p>Log in to the <strong>Network International Merchant Portal</strong>.</p></li><li><p>Navigate to:</p><p><strong>Developer Settings</strong></p></li><li><p>Click <strong>Generate API Key</strong>.</p></li><li><p>Copy the generated API Key and paste it into the marketplace configuration.</p></li></ol><p><strong>Official Developer Documentation:</strong><br><a href="https://docs.ngenius-payments.com/docs/authentication" target="_blank" rel="noreferrer">https://docs.ngenius-payments.com/docs/authentication</a></p><h2 id="step-5-seller-configuration-–-adding-beneficiary-id" tabindex="-1">Step 5: Seller Configuration – Adding Beneficiary ID <a class="header-anchor" href="#step-5-seller-configuration-–-adding-beneficiary-id" aria-label="Permalink to &quot;Step 5: Seller Configuration – Adding Beneficiary ID&quot;">​</a></h2><p>To receive payouts, each seller must add their Beneficiary ID in their seller panel.</p><h1 id="steps-for-sellers" tabindex="-1">Steps for Sellers <a class="header-anchor" href="#steps-for-sellers" aria-label="Permalink to &quot;Steps for Sellers&quot;">​</a></h1><ol><li><p>Login to the <strong>Seller Panel</strong>.</p></li><li><p>Navigate to:</p><p><strong>Seller Panel → Profile → Payment Details</strong></p></li><li><p>Select <strong>Network International</strong> as the payment method.</p></li><li><p>Enter the <strong>Beneficiary ID</strong>.</p></li><li><p>Click <strong>Save</strong>.</p></li></ol>',18),e("p",null,[e("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/03/seller.webp",alt:"Seller Beneficiary Configuration",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/03/seller.webp";

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
      `})],-1),n('<h2 id="step-6-create-beneficiary-id-seller-payout-account" tabindex="-1">Step 6: Create Beneficiary ID (Seller Payout Account) <a class="header-anchor" href="#step-6-create-beneficiary-id-seller-payout-account" aria-label="Permalink to &quot;Step 6: Create Beneficiary ID (Seller Payout Account)&quot;">​</a></h2><p>The Beneficiary ID represents the seller’s payout account in Network International.</p><h1 id="steps-3" tabindex="-1">Steps <a class="header-anchor" href="#steps-3" aria-label="Permalink to &quot;Steps&quot;">​</a></h1><ol><li><p>Log in to the <strong>Network International Merchant Portal</strong>.</p></li><li><p>Navigate to:</p><p><strong>Payouts → Beneficiaries</strong></p></li><li><p>Click <strong>Add Beneficiary</strong>.</p></li><li><p>Enter the seller payout details such as:</p></li></ol><h3 id="beneficiary-name" tabindex="-1">Beneficiary Name <a class="header-anchor" href="#beneficiary-name" aria-label="Permalink to &quot;Beneficiary Name&quot;">​</a></h3><h3 id="bank-account-iban" tabindex="-1">Bank Account / IBAN <a class="header-anchor" href="#bank-account-iban" aria-label="Permalink to &quot;Bank Account / IBAN&quot;">​</a></h3><h3 id="country" tabindex="-1">Country <a class="header-anchor" href="#country" aria-label="Permalink to &quot;Country&quot;">​</a></h3><h3 id="currency" tabindex="-1">Currency <a class="header-anchor" href="#currency" aria-label="Permalink to &quot;Currency&quot;">​</a></h3><h3 id="payment-purpose" tabindex="-1">Payment Purpose <a class="header-anchor" href="#payment-purpose" aria-label="Permalink to &quot;Payment Purpose&quot;">​</a></h3><ol start="5"><li>After submitting the details, the system generates a <strong>Beneficiary ID</strong>.</li></ol><p>This Beneficiary ID must be shared with the seller so they can add it to their <strong>Seller Payment Details</strong>.</p><p><strong>Official Payout Documentation:</strong><br><a href="https://docs.ngenius-payments.com/docs/payouts" target="_blank" rel="noreferrer">https://docs.ngenius-payments.com/docs/payouts</a></p><h2 id="how-the-payout-process-works" tabindex="-1">How the Payout Process Works <a class="header-anchor" href="#how-the-payout-process-works" aria-label="Permalink to &quot;How the Payout Process Works&quot;">​</a></h2><p>Once the setup is complete:</p><ol><li><p>A customer places an order in the marketplace.</p></li><li><p>Payment is received by the admin.</p></li><li><p>Based on the configuration:</p><ul><li>Payout is triggered automatically, or</li><li>Admin can send payout manually.</li></ul></li><li><p>Network International processes the payout.</p></li><li><p>The seller receives the payment in their registered payout account.</p></li></ol><blockquote><p><strong>Note:</strong><br> You can configure payouts to be triggered after order delivery or after order fulfillment, depending on your marketplace payout policy.</p></blockquote><h2 id="need-support" tabindex="-1">Need Support? <a class="header-anchor" href="#need-support" aria-label="Permalink to &quot;Need Support?&quot;">​</a></h2><p>Hope you like this blog. To get more interesting blogs, keep in touch with us. If you need any kind of support, simply raise a ticket at <a href="https://webkul.uvdesk.com/en/customer/create-ticket/" target="_blank" rel="noreferrer">https://webkul.uvdesk.com/en/customer/create-ticket/</a>.</p><p>You can also contact at <strong><a href="mailto:support@webkul.com" target="_blank" rel="noreferrer">support@webkul.com</a></strong> to get proper assistance.</p><p>Thank You for reading this Blog!</p><h3 id="schedule-demo" tabindex="-1">SCHEDULE DEMO <a class="header-anchor" href="#schedule-demo" aria-label="Permalink to &quot;SCHEDULE DEMO&quot;">​</a></h3><p><a href="https://egsma.io/shopify-multivendor-marketplace/" target="_blank" rel="noreferrer">Click here to Schedule the demo of Multivendor marketplace App for Shopify </a></p>',22)])])}const g=o(i,[["render",l]]);export{m as __pageData,g as default};
