import{_ as s,c as i,o as t,ah as n,j as e}from"./chunks/framework.PvdZnrZd.js";const p=JSON.parse('{"title":"Commission Overview","description":"Commission Overview","frontmatter":{"title":"Commission Overview","description":"Commission Overview","author":"Chirag Tyagi"},"headers":[],"relativePath":"zenith/commission/overview.md","filePath":"zenith/commission/overview.md"}'),l={name:"zenith/commission/overview.md"};function a(r,o,m,c,d,g){return t(),i("div",null,[...o[0]||(o[0]=[n('<h1 id="user-guide-for-commission-overview" tabindex="-1">User Guide for Commission Overview <a class="header-anchor" href="#user-guide-for-commission-overview" aria-label="Permalink to &quot;User Guide for Commission Overview&quot;">​</a></h1><h2 id="commission-overview-–-shopify-multivendor-marketplace-app" tabindex="-1">Commission Overview – Shopify Multivendor Marketplace App <a class="header-anchor" href="#commission-overview-–-shopify-multivendor-marketplace-app" aria-label="Permalink to &quot;Commission Overview – Shopify Multivendor Marketplace App&quot;">​</a></h2><p><a href="/zenith/introduction/">Multivendor Marketplace for Shopify</a> offers a robust <strong>commission management system</strong>, allowing store owners to earn from every sale made by their sellers.</p><p>In a marketplace model, <strong>commissions</strong> are the core of the revenue structure for the admin. They represent the amount earned by the marketplace owner from each transaction made by vendors.</p><h2 id="what-is-a-commission" tabindex="-1">What is a Commission? <a class="header-anchor" href="#what-is-a-commission" aria-label="Permalink to &quot;What is a Commission?&quot;">​</a></h2><p>A <strong>commission</strong> is the percentage or fixed fee that the <strong>admin (store owner)</strong> earns from a seller&#39;s product sale. It can be configured in multiple ways based on your business model:</p><ul><li><strong>Global Commission</strong></li><li><strong>Seller-wise Commission</strong></li><li><strong>Product-wise Commission</strong></li><li><strong>Category/Collection-wise Commission</strong></li><li><strong>Variant-wise Commission</strong></li></ul><blockquote><p>Example:<br> If Seller X lists Product A for $100 and the admin sets a 10% commission, then:</p><ul><li>Admin earns <strong>$10</strong></li><li>Seller receives <strong>$90</strong></li></ul></blockquote><p>The app follows this <strong>commission priority hierarchy</strong>:<br><code>Global Commission &lt; Seller-wise &lt; Category-wise &lt; Product-wise</code></p><p><a href="https://youtu.be/TjXDS7dG3jA" target="_blank" rel="noreferrer">Watch the video guide on setting commissions</a></p><hr><h2 id="global-commission" tabindex="-1">Global Commission <a class="header-anchor" href="#global-commission" aria-label="Permalink to &quot;Global Commission&quot;">​</a></h2><ul><li>Applied to all sellers, products, and collections.</li><li>Set from the <strong>Global Commission Settings</strong> tab in the app.</li><li>Supports both <strong>percentage-based</strong> and <strong>fixed-value</strong> commission.</li></ul><p><strong>Example:</strong></p><p>If commission is set to <strong>10% + $20</strong>, and the total order is $1400:</p><ul><li>Seller A’s sale: $500 → Admin gets $70 → Seller earns $430</li><li>Seller B’s sale: $900 → Admin gets $110 → Seller earns $790</li></ul><hr><h2 id="seller-wise-commission" tabindex="-1">Seller-wise Commission <a class="header-anchor" href="#seller-wise-commission" aria-label="Permalink to &quot;Seller-wise Commission&quot;">​</a></h2><p>You can override the global settings for specific sellers from the <strong>Seller Commission Settings</strong> page in the app.</p>',19),e("p",null,[e("a",{href:"javascript:void(0)",onclick:`
          event.preventDefault();

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
          img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/comm1.webp";

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
        `,target:"_blank",rel:"noreferrer"},[e("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/comm1.webp",alt:"Seller Commission Settings",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/comm1.webp";

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
      `})])],-1),n('<hr><h2 id="product-wise-commission" tabindex="-1">Product-wise Commission <a class="header-anchor" href="#product-wise-commission" aria-label="Permalink to &quot;Product-wise Commission&quot;">​</a></h2><p>Enable product-wise commission from the app’s configuration settings.<br> Navigate to <strong>Products &gt; Product Listing &gt; Edit Product</strong> and set the desired commission.</p><blockquote><p>Note: Disable “Display Sales Price on Products” from the configuration to use this.</p></blockquote><hr><h2 id="category-collection-wise-commission" tabindex="-1">Category (Collection)-wise Commission <a class="header-anchor" href="#category-collection-wise-commission" aria-label="Permalink to &quot;Category (Collection)-wise Commission&quot;">​</a></h2><p>To enable this:</p><ol><li>Activate “Restrict Collection” from the configuration.</li><li>Go to <strong>Products &gt; Collections</strong> and click <strong>Sync</strong>.</li><li>Set the commission via the <strong>Collection Commission Settings</strong> page.</li></ol><hr><h2 id="variant-wise-commission" tabindex="-1">Variant-wise Commission <a class="header-anchor" href="#variant-wise-commission" aria-label="Permalink to &quot;Variant-wise Commission&quot;">​</a></h2><p>Commission can be applied at the <strong>variant level</strong> by navigating to: <code>Products &gt; Product Listing &gt; Edit Product &gt; Edit Variant</code></p><p>Set the commission on individual variants as needed.</p><hr><h2 id="seller-panel-–-commission-listing" tabindex="-1">Seller Panel – Commission Listing <a class="header-anchor" href="#seller-panel-–-commission-listing" aria-label="Permalink to &quot;Seller Panel – Commission Listing&quot;">​</a></h2><p>Sellers can view commissions for each order from:<br><strong>Seller Panel &gt; Orders &gt; Commission Listing</strong></p>',15),e("p",null,[e("a",{href:"javascript:void(0)",onclick:`
          event.preventDefault();

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
          img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/commi2.webp";

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
        `,target:"_blank",rel:"noreferrer"},[e("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/commi2.webp",alt:"Seller Commission View",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/commi2.webp";

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
      `})])],-1),n('<hr><h2 id="monthly-sales-based-commission-slab-wise-commission" tabindex="-1">Monthly Sales-Based Commission (Slab-Wise Commission) <a class="header-anchor" href="#monthly-sales-based-commission-slab-wise-commission" aria-label="Permalink to &quot;Monthly Sales-Based Commission (Slab-Wise Commission)&quot;">​</a></h2><p>The <strong>Monthly Sales-Based Commission</strong> feature allows the admin to configure a <strong>dynamic commission structure</strong> where the commission percentage automatically changes based on the <strong>seller’s total sales within a defined monthly cycle</strong>.</p><p>This commission structure is applied <strong>globally to all sellers</strong> and <strong>resets automatically at the end of each monthly cycle</strong>.</p><hr><h2 id="_1-enable-slab-wise-commission" tabindex="-1">1. Enable Slab-Wise Commission <a class="header-anchor" href="#_1-enable-slab-wise-commission" aria-label="Permalink to &quot;1. Enable Slab-Wise Commission&quot;">​</a></h2><ol><li>Go to <strong>Admin Panel → Commission → Global Commission Settings</strong>.</li><li>Locate the <strong>Commission Type</strong> section.</li><li>Select the option <strong>“Sales/Slab-Wise Commission”</strong>.</li><li>Click <strong>Save</strong>.</li></ol>',7),e("p",null,[e("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/02/monthly-salescommission.webp",alt:"Enable Monthly Sales Commission",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/02/monthly-salescommission.webp";

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
      `})],-1),n('<p>Once enabled, the admin can define <strong>commission slabs based on monthly total sales</strong>.</p><hr><h2 id="_2-define-commission-slabs" tabindex="-1">2. Define Commission Slabs <a class="header-anchor" href="#_2-define-commission-slabs" aria-label="Permalink to &quot;2. Define Commission Slabs&quot;">​</a></h2><p>The admin can define <strong>up to 10 commission rules (slabs)</strong>.</p><p>For each slab, configure the following:</p><ul><li><strong>Minimum Sales Amount</strong></li><li><strong>Maximum Sales Amount</strong></li><li><strong>Commission Percentage</strong></li></ul>',6),e("p",null,[e("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/02/set-slabs.webp",alt:"Set Commission Slabs",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/02/set-slabs.webp";

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
      `})],-1),n('<h3 id="example-commission-structure" tabindex="-1">Example Commission Structure <a class="header-anchor" href="#example-commission-structure" aria-label="Permalink to &quot;Example Commission Structure&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Total Monthly Sales (USD)</th><th>Commission (%)</th></tr></thead><tbody><tr><td>0 – 1,000</td><td>30%</td></tr><tr><td>1,001 – 2,000</td><td>20%</td></tr><tr><td>Above 2,000</td><td>10%</td></tr></tbody></table><p>Click <strong>Add More Range</strong> to create additional rules <em>(maximum 10 slabs)</em>.</p><p>Save the configuration after defining all slabs.</p><hr><h2 id="how-commission-is-calculated" tabindex="-1">How Commission Is Calculated <a class="header-anchor" href="#how-commission-is-calculated" aria-label="Permalink to &quot;How Commission Is Calculated&quot;">​</a></h2><p>During the defined <strong>monthly cycle</strong>, the commission is calculated based on the <strong>seller’s total accumulated sales for that month at the time of each order</strong>.</p><h3 id="example-scenario" tabindex="-1">Example Scenario <a class="header-anchor" href="#example-scenario" aria-label="Permalink to &quot;Example Scenario&quot;">​</a></h3><p><strong>First Order:</strong> USD 500</p><ul><li>Total Sales = <strong>USD 500</strong></li><li>Commission Applied = <strong>30%</strong></li></ul><p><strong>Second Order:</strong> USD 600</p><ul><li>Total Sales = <strong>USD 1,100</strong></li><li>Commission Applied = <strong>20%</strong></li></ul><p><strong>Third Order:</strong> USD 500</p><ul><li>Total Sales = <strong>USD 1,600</strong></li><li>Commission Applied = <strong>20%</strong></li></ul><p>Once total sales exceed <strong>USD 2,000</strong>, the commission will <strong>automatically change to 10% for subsequent orders</strong>.</p><p>This process continues <strong>until the monthly cycle ends</strong>, after which the calculation <strong>resets automatically</strong>.</p><hr><h2 id="seller-panel-visibility" tabindex="-1">Seller Panel Visibility <a class="header-anchor" href="#seller-panel-visibility" aria-label="Permalink to &quot;Seller Panel Visibility&quot;">​</a></h2><p>Sellers can view the following details:</p><ul><li><strong>Commission deducted per order</strong></li><li><strong>Total commission deducted</strong></li><li><strong>Order-wise commission details</strong></li></ul><p>This information is available in:</p><p><strong>Seller Panel → Orders → Commission Listing</strong></p><p>As the seller’s <strong>total earnings increase during the cycle</strong>, the commission percentage will <strong>automatically adjust according to the defined slab structure</strong>.</p><hr><h2 id="important-notes" tabindex="-1">Important Notes <a class="header-anchor" href="#important-notes" aria-label="Permalink to &quot;Important Notes&quot;">​</a></h2><ul><li>A <strong>maximum of 10 commission slabs</strong> can be configured.</li><li>The commission structure is <strong>applied globally to all sellers</strong>.</li><li>It is <strong>not possible to define separate slab structures for individual sellers</strong>.</li><li>The <strong>commission cycle automatically resets</strong> after the defined period.</li></ul><hr><p>This feature enables <strong>marketplace owners to incentivize higher seller performance</strong> by offering <strong>reduced commission rates as sales volume increases</strong>.</p><h3 id="learn-more" tabindex="-1">Learn More <a class="header-anchor" href="#learn-more" aria-label="Permalink to &quot;Learn More&quot;">​</a></h3><p><a href="/zenith/commission/commission-type.html">Read the full guide on Commission Types</a></p><h3 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-label="Permalink to &quot;Demo&quot;">​</a></h3><p>Explore a live demo of the Multivendor Marketplace:<br><a href="https://egsma.io/shopify-multivendor-marketplace/" target="_blank" rel="noreferrer">https://egsma.io/shopify-multivendor-marketplace/</a></p><hr>',33)])])}const u=s(l,[["render",a]]);export{p as __pageData,u as default};
