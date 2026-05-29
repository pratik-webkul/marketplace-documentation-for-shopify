import{_ as t,c as a,o as r,ah as o,j as e,a as n}from"./chunks/framework.PvdZnrZd.js";const h=JSON.parse('{"title":"Marketplace UGC","description":"Marketplace UGC","frontmatter":{"title":"Marketplace UGC","description":"Marketplace UGC","author":"Chirag Tyagi"},"headers":[],"relativePath":"zenith/featured-app/marketplace-other-add-ons/marketplace-ugc.md","filePath":"zenith/featured-app/marketplace-other-add-ons/marketplace-ugc.md"}'),i={name:"zenith/featured-app/marketplace-other-add-ons/marketplace-ugc.md"};function s(c,l,d,m,g,p){return r(),a("div",null,[...l[0]||(l[0]=[o('<h1 id="user-guide-for-marketplace-ugc" tabindex="-1">User Guide for Marketplace Ugc <a class="header-anchor" href="#user-guide-for-marketplace-ugc" aria-label="Permalink to &quot;User Guide for Marketplace Ugc&quot;">​</a></h1><h2 id="marketplace-ugc-feature-app-multivendor-marketplace" tabindex="-1">Marketplace UGC Feature App - Multivendor Marketplace <a class="header-anchor" href="#marketplace-ugc-feature-app-multivendor-marketplace" aria-label="Permalink to &quot;Marketplace UGC Feature App - Multivendor Marketplace&quot;">​</a></h2><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><p><strong>Marketplace UGC (User Generated Content)</strong> allows sellers to showcase real customer or creator content such as <strong>videos, posts, and reviews</strong> directly on their product pages.</p><p>This helps to:</p><ul><li>Build <strong>trust</strong></li><li>Improve <strong>engagement</strong></li><li>Increase <strong>conversions</strong></li></ul><h2 id="how-to-enable-the-feature" tabindex="-1">How to Enable the Feature <a class="header-anchor" href="#how-to-enable-the-feature" aria-label="Permalink to &quot;How to Enable the Feature&quot;">​</a></h2><p>To enable this feature, the admin needs to:</p><p><strong>Navigate to:</strong></p><p><strong>Admin Panel → Feature App → Enable Marketplace UGC Feature App</strong></p><p>After enabling, a <strong>UGC Configuration</strong> section will appear under the <strong>Configuration menu</strong>.</p>',11),e("p",null,[e("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/05/ugc1.webp",alt:"Enable UGC Feature",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
      `})],-1),o('<h2 id="ugc-configuration-admin" tabindex="-1">UGC Configuration (Admin) <a class="header-anchor" href="#ugc-configuration-admin" aria-label="Permalink to &quot;UGC Configuration (Admin)&quot;">​</a></h2><p>Inside the UGC Configuration, the admin will find the following setting:</p><h3 id="auto-approve-ugc" tabindex="-1">Auto Approve UGC <a class="header-anchor" href="#auto-approve-ugc" aria-label="Permalink to &quot;Auto Approve UGC&quot;">​</a></h3><ul><li>If <strong>enabled</strong>, UGC submitted by seller staff will be <strong>automatically approved</strong></li><li>If <strong>disabled</strong>, UGC will require <strong>manual approval</strong></li></ul>',4),e("p",null,[e("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/05/ugc2.webp",alt:"UGC Configuration",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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

        const img = document.createElement('img');
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/05/ugc2.webp";

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
      `})],-1),o('<h2 id="ugc-marketplace-section" tabindex="-1">UGC Marketplace Section <a class="header-anchor" href="#ugc-marketplace-section" aria-label="Permalink to &quot;UGC Marketplace Section&quot;">​</a></h2><p>After enabling the feature:</p><p>A new section <strong>“UGC Marketplace”</strong> will appear in both:</p><ul><li><strong>Admin Panel</strong></li><li><strong>Seller Panel</strong></li></ul><p>This section displays all UGC listings added by seller staff.</p>',5),e("p",null,[e("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/05/ugc3.webp",alt:"UGC Admin View",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
      `})],-1),e("p",null,[e("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/05/ugc4.webp",alt:"UGC Seller View",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
      `})],-1),e("h2",{id:"seller-staff-end-–-adding-ugc",tabindex:"-1"},[n("Seller Staff End – Adding UGC "),e("a",{class:"header-anchor",href:"#seller-staff-end-–-adding-ugc","aria-label":'Permalink to "Seller Staff End – Adding UGC"'},"​")],-1),e("ol",null,[e("li",null,"Seller staff logs into their dashboard"),e("li",null,[n("Navigate to:"),e("br"),e("strong",null,"UGC Marketplace → UGC Listing")]),e("li",null,[n("Click on "),e("strong",null,"“Add UGC”")])],-1),e("p",null,[e("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/05/ugc5.webp",alt:"Add UGC",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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

        const img = document.createElement('img');
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/05/ugc5.webp";

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
      `})],-1),o('<hr><h2 id="ugc-form-details" tabindex="-1">UGC Form Details <a class="header-anchor" href="#ugc-form-details" aria-label="Permalink to &quot;UGC Form Details&quot;">​</a></h2><p>After clicking <strong>Add UGC</strong>, a form will open where the following details must be filled:</p><ul><li><p><strong>Title</strong><br> Enter the UGC title</p></li><li><p><strong>Link</strong><br> Paste the UGC link <em>(e.g., Instagram, YouTube, etc.)</em></p></li><li><p><strong>Description</strong><br> Add a short description</p></li><li><p><strong>Display On (Dropdown)</strong></p><ul><li><strong>Product</strong> → Select specific products from the seller’s list</li><li><strong>Seller</strong> → Display UGC on the seller collection page</li></ul></li><li><p><strong>Featured</strong></p><ul><li>If enabled, UGC will appear at the <strong>top of the product page</strong></li></ul></li></ul>',4),e("p",null,[e("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/05/ugc6.webp",alt:"UGC Form",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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

        const img = document.createElement('img');
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/05/ugc6.webp";

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
      `})],-1),o('<h2 id="submitting-the-ugc" tabindex="-1">Submitting the UGC <a class="header-anchor" href="#submitting-the-ugc" aria-label="Permalink to &quot;Submitting the UGC&quot;">​</a></h2><p>Once the seller staff submits the UGC:</p><ul><li>It is sent to the <strong>seller for approval</strong></li></ul><h3 id="auto-approve-condition" tabindex="-1">Auto Approve Condition <a class="header-anchor" href="#auto-approve-condition" aria-label="Permalink to &quot;Auto Approve Condition&quot;">​</a></h3><ul><li>If <strong>Auto Approve is disabled</strong> → UGC goes for approval</li><li>If <strong>enabled</strong> → UGC is <strong>automatically approved and published</strong></li></ul>',5),e("p",null,[e("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/05/ugc7.webp",alt:"UGC Approval",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
      `})],-1),o('<h2 id="seller-actions" tabindex="-1">Seller Actions <a class="header-anchor" href="#seller-actions" aria-label="Permalink to &quot;Seller Actions&quot;">​</a></h2><p>The seller can:</p><ul><li><strong>Approve</strong> the UGC</li><li><strong>Reject</strong> the UGC</li><li><strong>Delete</strong> the UGC</li><li>Add a <strong>review note</strong> while approving or rejecting</li></ul><p>Once approved, the UGC becomes <strong>visible on the frontend</strong>.</p><h2 id="admin-actions" tabindex="-1">Admin Actions <a class="header-anchor" href="#admin-actions" aria-label="Permalink to &quot;Admin Actions&quot;">​</a></h2><p>Admin can:</p><ul><li>View UGC details</li><li>Hide inappropriate UGC <em>(with reason)</em></li></ul><p>Once hidden, the UGC will be <strong>removed from the frontend</strong>.</p>',8),e("p",null,[e("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/05/ugc8.webp",alt:"Admin Control",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
      `})],-1),e("h2",{id:"frontend-display",tabindex:"-1"},[n("Frontend Display "),e("a",{class:"header-anchor",href:"#frontend-display","aria-label":'Permalink to "Frontend Display"'},"​")],-1),e("h3",{id:"on-product-page",tabindex:"-1"},[n("On Product Page "),e("a",{class:"header-anchor",href:"#on-product-page","aria-label":'Permalink to "On Product Page"'},"​")],-1),e("p",null,"UGC will be displayed alongside the product.",-1),e("p",null,[e("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/05/ugc9.webp",alt:"UGC Product Page",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
      `})],-1),e("h3",{id:"on-seller-collection-page",tabindex:"-1"},[n("On Seller Collection Page "),e("a",{class:"header-anchor",href:"#on-seller-collection-page","aria-label":'Permalink to "On Seller Collection Page"'},"​")],-1),e("p",null,"UGC will also be displayed on the seller’s collection page.",-1),e("p",null,[e("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/05/ugc10.webp",alt:"UGC Collection Page",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
      `})],-1),e("p",null,[n("This feature enhances your marketplace by leveraging "),e("strong",null,"authentic user-generated content"),n(", helping improve "),e("strong",null,"customer trust, engagement, and overall sales performance"),n(".")],-1),e("h3",{id:"schedule-demo",tabindex:"-1"},[n("SCHEDULE DEMO "),e("a",{class:"header-anchor",href:"#schedule-demo","aria-label":'Permalink to "SCHEDULE DEMO"'},"​")],-1),e("p",null,[e("a",{href:"https://egsma.io/shopify-multivendor-marketplace/",target:"_blank",rel:"noreferrer"},"Click here to Schedule the demo of Multivendor marketplace App for Shopify ")],-1)])])}const y=t(i,[["render",s]]);export{h as __pageData,y as default};
