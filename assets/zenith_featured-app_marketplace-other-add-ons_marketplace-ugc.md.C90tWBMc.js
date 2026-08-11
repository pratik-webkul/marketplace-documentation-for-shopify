import{_ as l,c as a,o as i,ah as o,j as e,a as n}from"./chunks/framework.PvdZnrZd.js";const h=JSON.parse('{"title":"Marketplace UGC","description":"Marketplace UGC","frontmatter":{"title":"Marketplace UGC","description":"Marketplace UGC","author":"Chirag Tyagi"},"headers":[],"relativePath":"zenith/featured-app/marketplace-other-add-ons/marketplace-ugc.md","filePath":"zenith/featured-app/marketplace-other-add-ons/marketplace-ugc.md"}'),r={name:"zenith/featured-app/marketplace-other-add-ons/marketplace-ugc.md"};function s(c,t,d,p,m,u){return i(),a("div",null,[...t[0]||(t[0]=[o('<h1 id="user-guide-for-marketplace-ugc" tabindex="-1">User Guide for Marketplace Ugc <a class="header-anchor" href="#user-guide-for-marketplace-ugc" aria-label="Permalink to &quot;User Guide for Marketplace Ugc&quot;">​</a></h1><h2 id="marketplace-ugc-feature-app-multivendor-marketplace" tabindex="-1">Marketplace UGC Feature App - Multivendor Marketplace <a class="header-anchor" href="#marketplace-ugc-feature-app-multivendor-marketplace" aria-label="Permalink to &quot;Marketplace UGC Feature App - Multivendor Marketplace&quot;">​</a></h2><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><p>The <strong>Marketplace UGC (User Generated Content)</strong> feature allows sellers to showcase real customer or creator content such as videos, social media posts, and reviews directly on their product pages. This helps build customer trust, improve engagement, and increase conversions.</p><h1 id="how-to-enable-the-feature" tabindex="-1">How to Enable the Feature <a class="header-anchor" href="#how-to-enable-the-feature" aria-label="Permalink to &quot;How to Enable the Feature&quot;">​</a></h1><p>To enable the Marketplace UGC Feature App:</p><ol><li><p>Navigate to:</p><p><strong>Admin Panel → Feature App → Enable Marketplace UGC Feature App</strong></p></li><li><p>Once enabled, a new <strong>UGC Configuration</strong> section will appear under the <strong>Configuration</strong> menu.</p></li></ol>',7),e("p",null,[e("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/05/ugc1.webp",alt:"Enable Marketplace UGC Feature App",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/05/ugc1.webp";

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
      `})],-1),o('<h1 id="ugc-configuration-admin" tabindex="-1">UGC Configuration (Admin) <a class="header-anchor" href="#ugc-configuration-admin" aria-label="Permalink to &quot;UGC Configuration (Admin)&quot;">​</a></h1><p>Within the <strong>UGC Configuration</strong>, the admin can manage the following settings:</p><h3 id="allow-seller-to-add-ugc" tabindex="-1">Allow Seller to Add UGC <a class="header-anchor" href="#allow-seller-to-add-ugc" aria-label="Permalink to &quot;Allow Seller to Add UGC&quot;">​</a></h3><p>Enable this option to allow sellers to create and manage UGC content from their seller panel.</p><h3 id="auto-approve-ugc" tabindex="-1">Auto Approve UGC <a class="header-anchor" href="#auto-approve-ugc" aria-label="Permalink to &quot;Auto Approve UGC&quot;">​</a></h3><p>If enabled, UGC submitted by seller staff will be automatically approved without requiring manual approval.</p><h3 id="ugc-field-configuration" tabindex="-1">UGC Field Configuration <a class="header-anchor" href="#ugc-field-configuration" aria-label="Permalink to &quot;UGC Field Configuration&quot;">​</a></h3><p>Choose which UGC fields are:</p><ul><li>Visible</li><li>Mandatory</li></ul><p>These settings apply to:</p><ul><li>Add/Edit UGC forms</li><li>UGC listings</li><li>Future Shopify metafield payloads</li></ul>',11),e("p",null,[e("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/08/ugcconf.webp",alt:"UGC Configuration",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/08/ugcconf.webp";

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
      `})],-1),e("h2",{id:"ugc-marketplace-section",tabindex:"-1"},[n("UGC Marketplace Section "),e("a",{class:"header-anchor",href:"#ugc-marketplace-section","aria-label":'Permalink to "UGC Marketplace Section"'},"​")],-1),e("p",null,[n("After enabling the feature, a new "),e("strong",null,"UGC Marketplace"),n(" section becomes available in both:")],-1),e("ul",null,[e("li",null,"Admin Panel"),e("li",null,"Seller Panel")],-1),e("p",null,"This section displays all UGC listings created by the seller and their staff.",-1),e("p",null,[e("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/05/ugc3.webp",alt:"Admin UGC Marketplace",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/05/ugc3.webp";

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
      `})],-1),e("p",null,[e("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/05/ugc4.webp",alt:"Seller UGC Marketplace",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/05/ugc4.webp";

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
      `})],-1),o('<h2 id="seller-and-seller-staff-–-adding-ugc" tabindex="-1">Seller and Seller Staff – Adding UGC <a class="header-anchor" href="#seller-and-seller-staff-–-adding-ugc" aria-label="Permalink to &quot;Seller and Seller Staff – Adding UGC&quot;">​</a></h2><p>To add UGC:</p><ol><li><p>Log in to the Seller Dashboard.</p></li><li><p>Navigate to:</p><p><strong>UGC Marketplace → UGC Listing</strong></p></li><li><p>Click <strong>Add UGC</strong>.</p></li></ol>',3),e("p",null,[e("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/08/addugcseller.webp",alt:"Add UGC",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/08/addugcseller.webp";

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
      `})],-1),o('<p>After clicking <strong>Add UGC</strong>, a form will open where the following information needs to be entered.</p><h3 id="title" tabindex="-1">Title <a class="header-anchor" href="#title" aria-label="Permalink to &quot;Title&quot;">​</a></h3><p>Enter the title of the UGC.</p><h3 id="link" tabindex="-1">Link <a class="header-anchor" href="#link" aria-label="Permalink to &quot;Link&quot;">​</a></h3><p>Paste the URL of the UGC content (Instagram, YouTube, TikTok, etc.).</p><h3 id="embed-code" tabindex="-1">Embed Code <a class="header-anchor" href="#embed-code" aria-label="Permalink to &quot;Embed Code&quot;">​</a></h3><p>Paste the embed or iframe code, if available.</p><h3 id="description" tabindex="-1">Description <a class="header-anchor" href="#description" aria-label="Permalink to &quot;Description&quot;">​</a></h3><p>Add a short description of the content.</p><h3 id="display-on" tabindex="-1">Display On <a class="header-anchor" href="#display-on" aria-label="Permalink to &quot;Display On&quot;">​</a></h3><p>Choose where the UGC will appear.</p><h3 id="product" tabindex="-1">Product <a class="header-anchor" href="#product" aria-label="Permalink to &quot;Product&quot;">​</a></h3><p>Select one or more products from the seller&#39;s product list to display the UGC on the corresponding product pages.</p><h3 id="seller" tabindex="-1">Seller <a class="header-anchor" href="#seller" aria-label="Permalink to &quot;Seller&quot;">​</a></h3><p>Display the UGC on the seller&#39;s collection/store page.</p><h3 id="both" tabindex="-1">Both <a class="header-anchor" href="#both" aria-label="Permalink to &quot;Both&quot;">​</a></h3><p>Display the UGC on both:</p><ul><li>Selected product pages</li><li>Seller collection/store page</li></ul><h3 id="featured" tabindex="-1">Featured <a class="header-anchor" href="#featured" aria-label="Permalink to &quot;Featured&quot;">​</a></h3><p>Enable this option to display the UGC at the top of the selected product page(s) or seller collection page, depending on the selected <strong>Display On</strong> option.</p>',20),e("p",null,[e("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/08/ugclistingpage.webp",alt:"UGC Listing Form",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/08/ugclistingpage.webp";

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
      `})],-1),o('<h1 id="submitting-the-ugc" tabindex="-1">Submitting the UGC <a class="header-anchor" href="#submitting-the-ugc" aria-label="Permalink to &quot;Submitting the UGC&quot;">​</a></h1><p>Once the seller or seller staff submits the UGC, it is sent for approval.</p><h2 id="auto-approve-behavior" tabindex="-1">Auto Approve Behavior <a class="header-anchor" href="#auto-approve-behavior" aria-label="Permalink to &quot;Auto Approve Behavior&quot;">​</a></h2><h3 id="if-auto-approve-is-disabled" tabindex="-1">If Auto Approve is Disabled <a class="header-anchor" href="#if-auto-approve-is-disabled" aria-label="Permalink to &quot;If Auto Approve is Disabled&quot;">​</a></h3><ul><li>The submitted UGC goes into the approval process before becoming visible.</li></ul><h3 id="if-auto-approve-is-enabled" tabindex="-1">If Auto Approve is Enabled <a class="header-anchor" href="#if-auto-approve-is-enabled" aria-label="Permalink to &quot;If Auto Approve is Enabled&quot;">​</a></h3><ul><li>The submitted UGC is automatically approved and published.</li></ul>',7),e("p",null,[e("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/05/ugc7.webp",alt:"UGC Approval Status",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/05/ugc7.webp";

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
      `})],-1),o('<h3 id="seller-actions" tabindex="-1">Seller Actions <a class="header-anchor" href="#seller-actions" aria-label="Permalink to &quot;Seller Actions&quot;">​</a></h3><p>The seller can:</p><ul><li>Approve UGC</li><li>Reject UGC</li><li>Delete UGC</li></ul><p>Once approved by the seller, the UGC becomes visible on the storefront.</p><h3 id="admin-actions" tabindex="-1">Admin Actions <a class="header-anchor" href="#admin-actions" aria-label="Permalink to &quot;Admin Actions&quot;">​</a></h3><p>The admin can:</p><ul><li>View UGC details</li><li>Hide inappropriate UGC by providing a reason</li></ul><p>Once hidden, the UGC is removed from the storefront.</p>',8),e("p",null,[e("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/05/ugc8.webp",alt:"Admin UGC Actions",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/05/ugc8.webp";

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
      `})],-1),e("h2",{id:"frontend-display",tabindex:"-1"},[n("Frontend Display "),e("a",{class:"header-anchor",href:"#frontend-display","aria-label":'Permalink to "Frontend Display"'},"​")],-1),e("h3",{id:"product-page",tabindex:"-1"},[n("Product Page "),e("a",{class:"header-anchor",href:"#product-page","aria-label":'Permalink to "Product Page"'},"​")],-1),e("p",null,"The approved UGC is displayed alongside the corresponding product.",-1),e("p",null,[e("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/05/ugc9.webp",alt:"UGC on Product Page",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/05/ugc9.webp";

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
      `})],-1),e("h3",{id:"seller-collection-page",tabindex:"-1"},[n("Seller Collection Page "),e("a",{class:"header-anchor",href:"#seller-collection-page","aria-label":'Permalink to "Seller Collection Page"'},"​")],-1),e("p",null,"The approved UGC is also displayed on the seller's collection/store page.",-1),e("p",null,[e("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/05/ugc10.webp",alt:"UGC on Seller Collection Page",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/05/ugc10.webp";

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
      `})],-1),e("h3",{id:"schedule-demo",tabindex:"-1"},[n("SCHEDULE DEMO "),e("a",{class:"header-anchor",href:"#schedule-demo","aria-label":'Permalink to "SCHEDULE DEMO"'},"​")],-1),e("p",null,[e("a",{href:"https://egsma.io/shopify-multivendor-marketplace/",target:"_blank",rel:"noreferrer"},"Click here to Schedule the demo of Multivendor marketplace App for Shopify ")],-1)])])}const f=l(r,[["render",s]]);export{h as __pageData,f as default};
