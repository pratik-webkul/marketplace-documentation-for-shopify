import{_ as a,c as r,o as l,ah as o,j as e,a as n}from"./chunks/framework.PvdZnrZd.js";const u=JSON.parse('{"title":"Transaction Charges","description":"Transaction Charges","frontmatter":{"title":"Transaction Charges","description":"Transaction Charges","author":"Chirag Tyagi"},"headers":[],"relativePath":"zenith/products/transaction-charges.md","filePath":"zenith/products/transaction-charges.md"}'),s={name:"zenith/products/transaction-charges.md"};function i(c,t,d,m,g,p){return l(),r("div",null,[...t[0]||(t[0]=[o('<h1 id="user-guide-for-transaction-charges" tabindex="-1">User Guide for Transaction Charges <a class="header-anchor" href="#user-guide-for-transaction-charges" aria-label="Permalink to &quot;User Guide for Transaction Charges&quot;">​</a></h1><p>Here in the blog, we will understand <strong>how to manage transaction charges</strong> on orders placed via <strong><a href="/zenith/introduction/">Multivendor Marketplace for Shopify</a></strong>. Before we move further, let&#39;s understand what are handling &amp; transaction charges.</p><h2 id="what-is-handling-transaction-charge" tabindex="-1"><strong>What is</strong> <strong>Handling &amp; Transaction Charge</strong> ? <a class="header-anchor" href="#what-is-handling-transaction-charge" aria-label="Permalink to &quot;**What is** **Handling &amp; Transaction Charge** ?&quot;">​</a></h2><p><strong>Handling Charges</strong> are basically charge levied on a customer to cover the seller&#39;s fulfillment costs including storing, packing, and sending an order to destination. It is charged on top of the order subtotal and shipping fees.</p><p><strong>Transaction Charges</strong> are the charges businesses pay a service provider each time a customer payment is processed online for an order. It can vary depending on the service provider.</p><p>In most of the case, it happens that the store merchant has to bear the handling and transaction charges levied on every transaction. So, with the Sales Price feature, you can add these charges to the product price while creating the product.</p><p>So, if you <strong>enable</strong> the <strong>Display Sales Price On Product</strong>, <strong><a href="/zenith/products/handling-and-transaction-charges.html">this is how</a></strong> you can manage the handling and transaction charges. <a href="/zenith/products/handling-and-transaction-charges.html">Check the Guide</a> !</p>',7),e("p",null,[e("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/05/tcoo1.webp",alt:"sales prica",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/05/tcoo1.webp";

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
      `})],-1),e("p",null,"If the Sales Price tab is ON, the seller will bear the handling charge while the transaction charge will always bear by the admin.",-1),e("p",null,[n("However, if the Display Sales Price on Products tab is "),e("strong",null,"OFF"),n(", you can "),e("strong",null,"allow sellers to bear the transaction charge"),n(".")],-1),e("p",null,[e("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/05/tcoo3.webp",alt:"transaction charges",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/05/tcoo3.webp";

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
      `})],-1),e("p",null,"Let's understand how you can manage the transaction charges separately on orders.",-1),e("p",null,[n("So, visit the Multi-vendor admin panel>>Go to Configuration>>"),e("strong",null,"Product Configuration"),n(" and "),e("strong",null,"enable the"),n(),e("strong",null,"Transaction Charges"),n(" tab.")],-1),e("p",null,[e("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/05/tcoo2.webp",alt:"transaction",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/05/tcoo2.webp";

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
      `})],-1),o("<p>Now, enabling this tab, you can select <strong>whether the seller or the admin will bear the transaction charge</strong> on orders under &quot;Transaction Charges to be paid By&quot; dropdown.</p><p>You can enter the transaction charge either in percentage or as a fixed amount on order.</p><p>For transaction charge there will be three following cases:-<br> 1. Seller wise<br> 1. Product wise<br> 2. Order wise</p><p>Let&#39;s understand this with the help of an example.</p><p>Suppose there is <strong>Product A</strong> worth <strong>$100 USD</strong>.<br> Commission: <strong>10%</strong> &amp; <strong>Transaction charges set to 10%.</strong></p><p>CASE 1: ADMIN: If you choose admin to bear the transaction charge. Admin earning will be $10 USD and seller&#39;s earning will be $90 USD.</p><p>CASE 2: SELLER: If you choose the seller to bear the transaction charge. Admin earning will be $20 USD and seller&#39;s earning will be $80 USD. Thus, the transaction charge will be deducted from the seller&#39;s earning in an order.</p><p><strong>Point To Be Noted</strong>:-<br> In case Display sale price is ON, the admin will bear the transaction charge.<br> In case Display sale price is OFF, transaction charge will be applied product wise and in case of active display sale price, transaction charge will be calculated seller wise.</p><p>Now, you can see these transaction charge details on Invoice, order detail page &amp; on commission listing page.</p><p><strong>Seller Invoice:</strong></p>",10),e("p",null,[e("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2021/07/Print-Invoice-Admin-%E2%80%A2-Multivendor-MarketPlace.png",alt:"transaction charge on invoice",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2021/07/Print-Invoice-Admin-%E2%80%A2-Multivendor-MarketPlace.png";

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
      `})],-1),e("p",null,[e("strong",null,"Order Detail Page:")],-1),e("p",null,[e("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/05/tcoo4.webp",alt:"transaction charge on order page",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/05/tcoo4.webp";

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
      `})],-1),e("p",null,[e("strong",null,"Commission Listing page"),n(":")],-1),e("p",null,[e("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/05/tcoo5-1.webp",alt:"transaction charge",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/05/tcoo5-1.webp";

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
      `})],-1),e("p",null,[e("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/05/tcoo6-1.webp",alt:"screenshot-nimbusweb.me-2021.07.05-18_56_31-1",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/05/tcoo6-1.webp";

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
      `})],-1),e("p",null,"Transaction charges on Seller Panel:",-1),e("p",null,[e("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/05/tcoo6-1.webp",alt:"seller end",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/05/tcoo6-1.webp";

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
      `})],-1),o('<p>So, this is how the transaction charges will be managed on orders in the Multi-vendor app.</p><p><strong>Don’t Have a Shopify Store? <a href="https://www.shopify.com/free-trial?ref=webkul" target="_blank" rel="noreferrer">Create One</a></strong></p><h2 id="need-support" tabindex="-1">Need Support? <a class="header-anchor" href="#need-support" aria-label="Permalink to &quot;Need Support?&quot;">​</a></h2><p>Hope you like this blog. To get more interesting blogs, keep in touch with us. If you need any kind of support, simply raise a ticket at <a href="https://webkul.uvdesk.com/en/customer/create-ticket/" target="_blank" rel="noreferrer">https://webkul.uvdesk.com/en/customer/create-ticket/</a>.</p><p>You can also contact at <strong><a href="mailto:support@webkul.com" target="_blank" rel="noreferrer">support@webkul.com</a></strong> to get proper assistance.</p><p>Thank You for reading this Blog!</p><h3 id="schedule-demo" tabindex="-1">SCHEDULE DEMO <a class="header-anchor" href="#schedule-demo" aria-label="Permalink to &quot;SCHEDULE DEMO&quot;">​</a></h3><p><a href="https://egsma.io/shopify-multivendor-marketplace/" target="_blank" rel="noreferrer">Click here to Schedule the demo of Multivendor marketplace App for Shopify </a></p>',8)])])}const y=a(s,[["render",i]]);export{u as __pageData,y as default};
