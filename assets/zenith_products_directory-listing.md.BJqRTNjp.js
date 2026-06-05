import{_ as r,c as l,o as i,ah as t,j as n,a as e}from"./chunks/framework.PvdZnrZd.js";const h=JSON.parse('{"title":"Directory listing","description":"Directory listing","frontmatter":{"title":"Directory listing","description":"Directory listing","author":"Chirag Tyagi"},"headers":[],"relativePath":"zenith/products/directory-listing.md","filePath":"zenith/products/directory-listing.md"}'),s={name:"zenith/products/directory-listing.md"};function a(c,o,d,m,p,g){return i(),l("div",null,[...o[0]||(o[0]=[t('<h1 id="user-guide-for-directory-listing" tabindex="-1">User Guide for Directory Listing <a class="header-anchor" href="#user-guide-for-directory-listing" aria-label="Permalink to &quot;User Guide for Directory Listing&quot;">​</a></h1><p>We have added a new <strong>Directory Listing</strong> feature to the <a href="/zenith/introduction/">Multivendor Marketplace</a> App for Shopify.</p><h2 id="purpose-of-the-feature" tabindex="-1">Purpose of the feature <a class="header-anchor" href="#purpose-of-the-feature" aria-label="Permalink to &quot;Purpose of the feature&quot;">​</a></h2><p>If you want your customers to get redirected to a separate URL after clicking on the <strong>Buy Now</strong> button, then this feature will help you.</p><p>Enabling this feature will replace the <strong>Add to Cart</strong> button with a <strong>Buy Now</strong> button that will redirect customers to the desired URL. The URL can be your seller&#39;s website or any other page where you want your customers to complete the checkout process.</p><p><strong>Note:</strong> Each product can have a separate redirecting URL. Also, this feature can only be applicable to normal products, i.e., will not work for digital products or any other kind of product.</p><h2 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-label="Permalink to &quot;Configuration&quot;">​</a></h2><p>The admin needs to configure the following feature by visiting:</p><p><strong>Multivendor Marketplace Admin Panel</strong> &gt; <strong>Configuration</strong> &gt; <strong>Products Configuration</strong></p><p>On this page, you&#39;ll have the option to enable this feature. Refer:</p>',10),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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

          // 🔹 CLOSE BUTTON
          const closeBtn = document.createElement('div');
          closeBtn.innerHTML = '&times;';

          closeBtn.style.cssText = \`
            position:absolute;
              top:20px;
              right:25px;
              background:#0c7484;
              color:#fff;
              width:50px;
              height:50px;
              border-radius:50%;
              display:flex;
              align-items:center;
              justify-content:center;
              font-size:32px;
              font-weight:bold;
              cursor:pointer;
              z-index:100000;
              line-height:1;
              user-select:none;
              box-shadow:0 4px 12px rgba(0,0,0,0.35);     
          \`;

          closeBtn.onclick = () => {
            overlay.remove();
          };

          const img = document.createElement('img');
          img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/02/directoryconfig.webp";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/02/directoryconfig.webp",alt:"Configuration-Admin-2",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/02/directoryconfig.webp";

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
      `})])],-1),t('<p>Enable this feature &amp; enter the button name. Save the changes.</p><p>Once done, you&#39;ll need to add a code to the product template of your store&#39;s theme. The code is available in the note section below the directory listing button (refer to the image provided above).</p><p><strong>Instructions</strong>: Copy the below-given code &amp; paste it in the &#39;<strong>product.liquid</strong>&#39; or &#39;<strong>product-template.liquid</strong>&#39; file. The code needs to be added just above the <strong>Add to Cart</strong> button.</p><div class="language-liquid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">liquid</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {% </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;wk-directory-listing&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> %}</span></span></code></pre></div><p><strong>NOTE</strong>:- In case you are using <strong><a href="https://www.shopify.com/partners/blog/shopify-online-store" target="_blank" rel="noreferrer">Online store 2.0</a></strong> (Example- Dawn), you need to add the codes to <strong>product.json</strong> &gt;&gt; <strong>sections/main-product.liquid</strong> file**😗*</p><div class="language-liquid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">liquid</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {% </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;wk-directory-listing&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> %}</span></span></code></pre></div><h2 id="how-to-find-product-template-files" tabindex="-1">How to find product template files? <a class="header-anchor" href="#how-to-find-product-template-files" aria-label="Permalink to &quot;How to find product template files?&quot;">​</a></h2><p>You can edit the code for your theme:</p><ol><li>From your Shopify admin, go to <strong>Online Store</strong> &gt; <strong>Themes</strong>.</li><li>Click <strong>Actions</strong> &gt; <strong>Edit code</strong>.</li><li>Further, search for &#39;<strong>product.liquid</strong>&#39; template &amp; paste the code.</li></ol><p>Refer:</p>',10),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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

          // 🔹 CLOSE BUTTON
          const closeBtn = document.createElement('div');
          closeBtn.innerHTML = '&times;';

          closeBtn.style.cssText = \`
            position:absolute;
              top:20px;
              right:25px;
              background:#0c7484;
              color:#fff;
              width:50px;
              height:50px;
              border-radius:50%;
              display:flex;
              align-items:center;
              justify-content:center;
              font-size:32px;
              font-weight:bold;
              cursor:pointer;
              z-index:100000;
              line-height:1;
              user-select:none;
              box-shadow:0 4px 12px rgba(0,0,0,0.35);     
          \`;

          closeBtn.onclick = () => {
            overlay.remove();
          };

          const img = document.createElement('img');
          img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2020/02/multivendor-marketplace-4-Edit-Debut-Shopify-1200x597.png";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2020/02/multivendor-marketplace-4-Edit-Debut-Shopify-1200x597.png",alt:"multivendor-marketplace-4-Edit-Debut-Shopify",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2020/02/multivendor-marketplace-4-Edit-Debut-Shopify-1200x597.png";

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
      `})])],-1),t('<p>If you are having trouble while updating the codes, let us know by emailing at <strong><a href="mailto:shopify@webkul.com" target="_blank" rel="noreferrer">shopify@webkul.com</a></strong> or creating a ticket for the same at <a href="https://webkul.uvdesk.com/en/customer/create-ticket/" target="_blank" rel="noreferrer"><strong>Webkul UV Desk</strong></a>. We’ll do it for you!</p><h2 id="adding-directory-listing-product" tabindex="-1">Adding Directory Listing Product <a class="header-anchor" href="#adding-directory-listing-product" aria-label="Permalink to &quot;Adding Directory Listing Product&quot;">​</a></h2><p>Both admin and seller can add a directory listing product by following these steps:</p><p>Visit <strong>Multivendor Marketplace Admin/Seller Panel</strong> &gt; <strong>Products</strong> &gt; <strong>Product Listing</strong> &gt; <strong>Add Product</strong></p><p>(Instructions are shown with seller panel images whereas, the method to add a directory listing product is the same for admin as well.)</p>',5),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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

          // 🔹 CLOSE BUTTON
          const closeBtn = document.createElement('div');
          closeBtn.innerHTML = '&times;';

          closeBtn.style.cssText = \`
            position:absolute;
              top:20px;
              right:25px;
              background:#0c7484;
              color:#fff;
              width:50px;
              height:50px;
              border-radius:50%;
              display:flex;
              align-items:center;
              justify-content:center;
              font-size:32px;
              font-weight:bold;
              cursor:pointer;
              z-index:100000;
              line-height:1;
              user-select:none;
              box-shadow:0 4px 12px rgba(0,0,0,0.35);     
          \`;

          closeBtn.onclick = () => {
            overlay.remove();
          };

          const img = document.createElement('img');
          img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/02/addproduct-1.webp";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/02/addproduct-1.webp",alt:"Product-Seller-•-Multivendor-MarketPlace",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/02/addproduct-1.webp";

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
      `})])],-1),n("p",null,[e("On the add product form, choose the product as "),n("strong",null,"Directory Listing Product"),e(". Further, on the right side, you'll have a section to enter directory listing details."),n("br"),e(" Here, enter the URL of the webpage to which you want to redirect your customers to make the purchase of this particular product. Save the changes once done!")],-1),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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

          // 🔹 CLOSE BUTTON
          const closeBtn = document.createElement('div');
          closeBtn.innerHTML = '&times;';

          closeBtn.style.cssText = \`
            position:absolute;
              top:20px;
              right:25px;
              background:#0c7484;
              color:#fff;
              width:50px;
              height:50px;
              border-radius:50%;
              display:flex;
              align-items:center;
              justify-content:center;
              font-size:32px;
              font-weight:bold;
              cursor:pointer;
              z-index:100000;
              line-height:1;
              user-select:none;
              box-shadow:0 4px 12px rgba(0,0,0,0.35);     
          \`;

          closeBtn.onclick = () => {
            overlay.remove();
          };

          const img = document.createElement('img');
          img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/02/directoryurl.webp";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/02/directoryurl.webp",alt:"Add-Product-Seller-•-Multivendor-MarketPlace",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/02/directoryurl.webp";

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
      `})])],-1),n("p",null,[e("The product will have a "),n("strong",null,"directory listing button"),e(" instead of a normal "),n("strong",null,"Add to Cart"),e(),n("strong",null,"button"),e(". Clicking on the button, the customers will be redirected to the configured URL.")],-1),n("p",null,[e("Example: For the product below, we have added the Webkul Blog link to the Buy Now button. "),n("a",{href:"https://multivendor-marketplace-4.myshopify.com/products/bright-red-purse-with-gold-detailing",target:"_blank",rel:"noreferrer"},"Try it yourself!")],-1),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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

          // 🔹 CLOSE BUTTON
          const closeBtn = document.createElement('div');
          closeBtn.innerHTML = '&times;';

          closeBtn.style.cssText = \`
            position:absolute;
              top:20px;
              right:25px;
              background:#0c7484;
              color:#fff;
              width:50px;
              height:50px;
              border-radius:50%;
              display:flex;
              align-items:center;
              justify-content:center;
              font-size:32px;
              font-weight:bold;
              cursor:pointer;
              z-index:100000;
              line-height:1;
              user-select:none;
              box-shadow:0 4px 12px rgba(0,0,0,0.35);     
          \`;

          closeBtn.onclick = () => {
            overlay.remove();
          };

          const img = document.createElement('img');
          img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2020/02/collage-1.png";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2020/02/collage-1.png",alt:"collage-1",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2020/02/collage-1.png";

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
      `})])],-1),n("h3",{id:"schedule-demo",tabindex:"-1"},[e("SCHEDULE DEMO "),n("a",{class:"header-anchor",href:"#schedule-demo","aria-label":'Permalink to "SCHEDULE DEMO"'},"​")],-1),n("p",null,[n("a",{href:"https://egsma.io/shopify-multivendor-marketplace/",target:"_blank",rel:"noreferrer"},"Click here to Schedule the demo of Multivendor marketplace App for Shopify ")],-1)])])}const y=r(s,[["render",a]]);export{h as __pageData,y as default};
