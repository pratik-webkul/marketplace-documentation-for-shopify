import{_ as o,c as r,o as a,ah as t,j as e,a as n}from"./chunks/framework.PvdZnrZd.js";const g=JSON.parse('{"title":"Distributed Marketplace","description":"Distributed Marketplace","frontmatter":{"title":"Distributed Marketplace","description":"Distributed Marketplace","author":"Chirag Tyagi"},"headers":[],"relativePath":"zenith/distributed-marketplace/distributed-marketplace.md","filePath":"zenith/distributed-marketplace/distributed-marketplace.md"}'),i={name:"zenith/distributed-marketplace/distributed-marketplace.md"};function s(c,l,d,m,p,u){return a(),r("div",null,[...l[0]||(l[0]=[t('<h1 id="about-distributed-marketplace" tabindex="-1">About Distributed Marketplace <a class="header-anchor" href="#about-distributed-marketplace" aria-label="Permalink to &quot;About Distributed Marketplace&quot;">​</a></h1><h2 id="efficient-order-assignment-with-distributed-marketplace" tabindex="-1">Efficient Order Assignment with Distributed Marketplace <a class="header-anchor" href="#efficient-order-assignment-with-distributed-marketplace" aria-label="Permalink to &quot;Efficient Order Assignment with Distributed Marketplace&quot;">​</a></h2><p>The <strong>Distributed Marketplace</strong> feature enables marketplace owners to automatically route incoming orders to the nearest eligible seller based on the customer&#39;s delivery location.</p><p>This ensures faster order fulfillment, improved delivery efficiency, and a better customer experience.</p><p>To determine the most suitable seller for an order, the system follows the process below:</p><ul><li>The system first matches the customer&#39;s ZIP code with the ZIP codes configured by sellers.</li><li>If multiple sellers are available for the same ZIP code and are selling the requested product, the system calculates the customer&#39;s location using latitude and longitude coordinates.</li><li>Based on this calculation, the order is automatically assigned to the nearest eligible seller.</li></ul><h3 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h3><p>To use the Distributed Marketplace feature, the following feature apps must be enabled:</p><ul><li>Global Product</li><li>Hyperlocal Marketplace</li></ul><p>Both features work together to display products centrally and assign orders to the most appropriate seller based on location.</p><p>Sellers can upload and manage the ZIP codes where they are available for selling products.</p><p><strong>Note:</strong> Each seller can upload a maximum of <strong>10,000 ZIP codes</strong> in the backend.</p><h3 id="step-1-enable-distributed-marketplace-configuration" tabindex="-1">Step 1: Enable Distributed Marketplace Configuration <a class="header-anchor" href="#step-1-enable-distributed-marketplace-configuration" aria-label="Permalink to &quot;Step 1: Enable Distributed Marketplace Configuration&quot;">​</a></h3><p>To use the Distributed Marketplace functionality, navigate to <strong><a href="/zenith/featured-app/marketplace-product-add-ons/global-product.html#global-product-configuration">Global Product Configuration</a></strong> and enable the following setting:</p><p><strong>Apply Distribution Algorithm on Orders</strong></p><p>Once this configuration is enabled, an additional option will appear:</p><p><strong>Distribution Algorithm Type</strong></p><p>Select <strong>Auto Assign</strong> as the distribution algorithm type.</p>',18),e("p",null,[e("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/06/distriglobalconfig.webp",alt:"Distributed Marketplace Shopify",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/06/distriglobalconfig.webp";

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
      `})],-1),e("h3",{id:"step-2-enable-hyperlocal-marketplace",tabindex:"-1"},[n("Step 2: Enable Hyperlocal Marketplace "),e("a",{class:"header-anchor",href:"#step-2-enable-hyperlocal-marketplace","aria-label":'Permalink to "Step 2: Enable Hyperlocal Marketplace"'},"​")],-1),e("p",null,[n("The Distributed Marketplace feature works together with the "),e("strong",null,[e("a",{href:"/zenith/featured-app/marketplace-miscellaneous-add-ons/hyperlocal-marketplace.html#defining-hyperlocal-marketplace"},"Hyperlocal Marketplace")]),n(" module.")],-1),e("p",null,"Therefore, you must have the Hyperlocal Marketplace feature enabled and configured in your application.",-1),e("p",null,[e("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/06/distrihyperlocalconfig.webp",alt:"Distributed Marketplace Shopify",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/06/distrihyperlocalconfig.webp";

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
      `})],-1),e("h3",{id:"step-3-configure-seller-service-areas",tabindex:"-1"},[n("Step 3: Configure Seller Service Areas "),e("a",{class:"header-anchor",href:"#step-3-configure-seller-service-areas","aria-label":'Permalink to "Step 3: Configure Seller Service Areas"'},"​")],-1),e("p",null,"For automatic seller assignment to work correctly, sellers must be configured based on ZIP codes.",-1),e("ol",null,[e("li",null,"Configure seller ZIP code coverage through the Hyperlocal Marketplace settings."),e("li",null,[n("Open the "),e("strong",null,"My Account"),n(" page.")]),e("li",null,"Configure the seller's serviceable ZIP codes and related hyperlocal settings.")],-1),e("p",null,[e("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/06/distriselleracchyoezip.webp",alt:"Distributed Marketplace Shopify",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/06/distriselleracchyoezip.webp";

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
      `})],-1),e("p",null,"These configurations determine which sellers can serve customers in specific locations.",-1),e("h2",{id:"how-distributed-marketplace-works",tabindex:"-1"},[n("How Distributed Marketplace Works "),e("a",{class:"header-anchor",href:"#how-distributed-marketplace-works","aria-label":'Permalink to "How Distributed Marketplace Works"'},"​")],-1),e("p",null,"When a customer visits your store, they will be asked to enter their ZIP code.",-1),e("p",null,[e("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/06/hyperlocall-trunk.webp",alt:"Hyperlocal",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/06/hyperlocall-trunk.webp";

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
      `})],-1),t('<p>After entering the ZIP code:</p><ul><li>The customer will see only one global product listing managed by the admin.</li><li>Multiple sellers may be selling the same product in the marketplace.</li><li>The customer does not need to choose a seller manually.</li></ul><p>When the customer places an order, the system automatically checks all eligible sellers serving that ZIP code and assigns the order to the nearest seller who is selling the product.</p><p>This automated process helps reduce delivery times and improves order fulfillment efficiency.</p><h3 id="example-scenario" tabindex="-1">Example Scenario <a class="header-anchor" href="#example-scenario" aria-label="Permalink to &quot;Example Scenario&quot;">​</a></h3><p>Suppose three sellers are selling the same product:</p><ul><li>Seller A</li><li>Seller B</li><li>Seller C</li></ul><p>All three sellers serve the customer&#39;s ZIP code.</p><p>When the customer places an order, the system automatically identifies the nearest eligible seller and assigns the order accordingly.</p>',9),e("p",null,[e("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/06/distriorderlist.webp",alt:"Distributed Marketplace Shopify",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/06/distriorderlist.webp";

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
      `})],-1),e("p",null,"The customer continues to see only the global product, while the order is routed behind the scenes to the most appropriate seller.",-1),e("h2",{id:"order-reassignment-by-admin",tabindex:"-1"},[n("Order Reassignment by Admin "),e("a",{class:"header-anchor",href:"#order-reassignment-by-admin","aria-label":'Permalink to "Order Reassignment by Admin"'},"​")],-1),e("p",null,"In some cases, the assigned seller may be unable to fulfill the order due to stock shortages, operational issues, or other reasons.",-1),e("p",null,"To handle such situations, the admin can manually reassign the order to another seller.",-1),e("p",null,"When an order is reassigned:",-1),e("ul",null,[e("li",null,"The order is removed from the previously assigned seller's panel."),e("li",null,"The newly assigned seller can immediately view the order in their seller panel."),e("li",null,"All future order processing activities are handled by the newly assigned seller.")],-1),e("p",null,[e("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/06/distriorderreassignbtn.webp",alt:"rwassign to another seller",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/06/distriorderreassignbtn.webp";

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
      `})],-1),e("p",null,[e("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/06/distrireassignorder.webp",alt:"reassign",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/06/distrireassignorder.webp";

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
      `})],-1),t('<p>This flexibility ensures uninterrupted order fulfillment even when the original seller is unable to process the order.</p><h2 id="benefits-of-distributed-marketplace" tabindex="-1">Benefits of Distributed Marketplace <a class="header-anchor" href="#benefits-of-distributed-marketplace" aria-label="Permalink to &quot;Benefits of Distributed Marketplace&quot;">​</a></h2><ul><li>Automatic order assignment based on customer location.</li><li>Faster and more efficient order fulfillment.</li><li>Reduced delivery distances and logistics costs.</li><li>Improved customer experience.</li><li>Centralized global product management.</li><li>Easy order reassignment by the admin when required.</li><li>Seamless integration with Hyperlocal Marketplace ZIP code configurations.</li></ul><p>By combining Global Products and the Hyperlocal Marketplace, marketplace owners can centrally manage product listings while making them available through multiple sellers across different locations.</p><p>The Auto Assign Distribution Algorithm then efficiently distributes orders among sellers, ensuring that customers receive products from the nearest available seller.</p><h3 id="schedule-demo" tabindex="-1">SCHEDULE DEMO <a class="header-anchor" href="#schedule-demo" aria-label="Permalink to &quot;SCHEDULE DEMO&quot;">​</a></h3><p><a href="https://egsma.io/shopify-multivendor-marketplace/" target="_blank" rel="noreferrer">Click here to Schedule the demo of Multivendor marketplace App for Shopify </a></p>',7)])])}const y=o(i,[["render",s]]);export{g as __pageData,y as default};
