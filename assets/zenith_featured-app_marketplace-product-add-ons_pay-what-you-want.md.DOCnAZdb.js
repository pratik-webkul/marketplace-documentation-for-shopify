import{_ as t,c as a,o as l,ah as s,j as n,a as e}from"./chunks/framework.PvdZnrZd.js";const y=JSON.parse('{"title":"PAY WHAT YOU WANT","description":"PAY WHAT YOU WANT","frontmatter":{"title":"PAY WHAT YOU WANT","description":"PAY WHAT YOU WANT","author":"Chirag Tyagi"},"headers":[],"relativePath":"zenith/featured-app/marketplace-product-add-ons/pay-what-you-want.md","filePath":"zenith/featured-app/marketplace-product-add-ons/pay-what-you-want.md"}'),o={name:"zenith/featured-app/marketplace-product-add-ons/pay-what-you-want.md"};function r(p,i,h,c,d,k){return l(),a("div",null,[...i[0]||(i[0]=[s('<h1 id="user-guide-for-pay-what-you-want" tabindex="-1">User Guide for Pay What You Want <a class="header-anchor" href="#user-guide-for-pay-what-you-want" aria-label="Permalink to &quot;User Guide for Pay What You Want&quot;">​</a></h1><p>We have introduced <strong>Pay what you want</strong> feature app within the <a href="/zenith/introduction/">Multivendor Marketplace App</a> for Shopify.</p><p><strong>Pay what you want</strong> (<strong>PWYW</strong>) also known as <strong>Value-for-Value</strong> model is a pricing strategy where buyers pay their desired amount for a given commodity.</p><p>A minimum (floor) price is set, and/or a suggested price may be indicated as guidance for the buyer.</p><p><strong>Pricing:</strong> This feature will have an additional charge of <strong>USD 10 per month</strong> over &amp; above your current Multivendor Marketplace plan charges.</p><p>Let&#39;s move on to the installation &amp; configuration process!</p><p>Enable the following app by visiting:</p><ul><li>Multi-Vendor <strong>Admin Panel</strong></li><li>From the Dashboard, hover over the <strong>three dots</strong> on the top-right of the page</li><li>Click on <strong>Feature Apps</strong></li><li>Search for ‘<strong>Pay What You Want</strong>‘ &amp; click on ‘<strong>Enable</strong>‘</li><li>After accepting the charges, you’ll be good to configure the app!</li></ul>',8),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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
          img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/paywhatyouwanta.webp";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/paywhatyouwanta.webp",alt:"Feature_Apps_Admin-1",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/paywhatyouwanta.webp";

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
      `})])],-1),n("p",null,"To make this feature display on the frontend, the admin needs to paste a few codes.",-1),n("p",null,[e("The instructions with the codes will be given on the following page:"),n("br"),n("strong",null,"Multivendor Admin Panel"),e(" > "),n("strong",null,"Configuration"),e(" > "),n("strong",null,"Instruction for Marketplace")],-1),n("p",null,"Here, you’ll have these codes:",-1),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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
          img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/paywhatyouwantb.webp";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/paywhatyouwantb.webp",alt:"Instructions_Admin",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/paywhatyouwantb.webp";

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
      `})])],-1),s(`<p>Show Price input field in the product page: Copy the below-given code &amp; paste it to <strong>product-template.liquid</strong> file.</p><div class="language-liquid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">liquid</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {% </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> product</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.tags </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">contains</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;wk_pay_what_you_want&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> %}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;wk_error_message&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;visibility:hidden&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;You have to Pay atleast &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">span</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;wk_var_price&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">span</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;wk_custom_price_div&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> data-productid</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{{ </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">product</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">id</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> }}&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> data-productprice</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">product</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;wk_variant_id&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hidden&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;properties[wk_variant_id]&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hidden&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;properties[wk_pay_what_you_want]&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;true&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;wk_pay_what_you_want&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;visibility:visible&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">label</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;wk_custom_price&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Enter price you want to pay&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">label</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;wk_custom_price&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;number&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;properties[wk_custom_price]&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {% </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">endif</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> %}</span></span></code></pre></div><p>Hide pay what you want product price: Copy the below-given code &amp; also, paste it to <strong>product-template.liquid</strong> theme page.</p><div class="language-liquid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">liquid</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {% </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">unless</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> product</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.tags </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">contains</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;wk_pay_what_you_want&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> %}</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!--your price object --&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{%</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">endunless</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> %}</span></span></code></pre></div><p>For adding code inside the class attribute of your Add to cart button: Copy the below-given code &amp; paste it to <strong>product-template.liquid</strong> theme page.</p><div class="language-liquid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">liquid</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     {% </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> product</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.tags </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">contains</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;wk_pay_what_you_want&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> and</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> current_variant.available %} wk_choice_pay {%</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">endif</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">%}</span></span></code></pre></div><p>Add code inside attribute of your Add to cart button: Copy the below-given code &amp; also, paste it to <strong>product-template.liquid</strong> theme page.</p><div class="language-liquid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">liquid</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     {% </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> product</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.tags </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">contains</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;wk_pay_what_you_want&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> %} disabled {%</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">endif</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">%}</span></span></code></pre></div><p>For adding class to your quantity selector: Copy the below-given code &amp; paste it to <strong>product-template.liquid</strong> theme page.</p><div class="language-liquid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">liquid</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     wk_qty_selector</span></span></code></pre></div><p>Hide pay what you want product price from the search product page: Copy the below-given code &amp; also, paste it to <strong>product-price.liquid</strong> theme page.</p><div class="language-liquid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">liquid</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {% </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">unless</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> product</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.tags </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">contains</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;wk_pay_what_you_want&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> %}</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!--your price code --&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{%</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">endunless</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> %}</span></span></code></pre></div><p>Calculate price form cart page for pay what you want product: Copy the below-given code &amp; paste it to <strong>cart-template.liquid</strong> theme page. Above cart items loop.</p><div class="language-liquid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">liquid</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {% </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">assign</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> wk_pay_whatever_extra_price  = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> %}</span></span></code></pre></div><p>Copy the below given code &amp; also, paste it to <strong>cart-template.liquid</strong> theme page. Below cart items loop.</p><div class="language-liquid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">liquid</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {% </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> item.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">product</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.tags </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">contains</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;wk_pay_what_you_want&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> and</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> item.properties[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;wk_custom_price&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] %}&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">span</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;wk_pay_what_you_want_count&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;display:none;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">span</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;{%</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">endif</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">%}</span></span></code></pre></div><p>Update price column: Copy the below given code &amp; paste it to <strong>cart-template.liquid</strong> theme page.</p><div class="language-liquid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">liquid</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {% </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> item.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">product</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.tags </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">contains</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;wk_pay_what_you_want&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> and</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> item.properties[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;wk_custom_price&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]%} </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {{item.properties[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;wk_custom_price&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]| </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">times:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> | </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">money</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {% </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> %}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    &lt;!-- your price object --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {% </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">endif</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> %}</span></span></code></pre></div><p>To update Total price column: Copy the below given code &amp; also, paste it to <strong>cart-template.liquid</strong> theme page.</p><div class="language-liquid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">liquid</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {% </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> item.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">product</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.tags </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">contains</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;wk_pay_what_you_want&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> and</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> item.properties[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;wk_custom_price&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]%}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {% </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">assign</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pay_whatever_line_price  = item.properties[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;wk_custom_price&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] | </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">times:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;!-- item quantiy object--&gt; | </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">times:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">%}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {{ pay_whatever_line_price | </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">money</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {% </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">assign</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> wk_pay_whatever_extra_price = pay_whatever_line_price | </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">minus:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &lt;!-- </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">product</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> total price object --&gt; | </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">plus:</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> wk_pay_whatever_extra_price</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> %}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {% </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> %}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {{&lt;!-- </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">product</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> total price object --&gt; | </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">money</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}} </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {% </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">endif</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> %}</span></span></code></pre></div><p>Update Sub Total price: Copy the below given code &amp; paste it to <strong>cart-template.liquid</strong> theme page.</p><div class="language-liquid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">liquid</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {% </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> wk_pay_whatever_extra_price </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">%}{{&lt;!-- </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> total price object --&gt; | </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">plus:</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> wk_pay_whatever_extra_price</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> | </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">money</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}} {%</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">%}{{ &lt;!-- </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> total price object --&gt; | </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">money</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }}{%</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">endif</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">%}</span></span></code></pre></div><p>To update Sub Total price: Add class to your checkout button on cart page <strong>cart-template.liquid</strong> theme page.</p><div class="language-liquid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">liquid</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     wk_checkout_btn</span></span></code></pre></div><p>If you are having trouble while updating the codes, let us know by emailing at <strong><a href="mailto:shopify@webkul.com" target="_blank" rel="noreferrer">shopify@webkul.com</a></strong> or creating a ticket for the same at <a href="https://webkul.uvdesk.com/en/customer/create-ticket/" target="_blank" rel="noreferrer"><strong>Webkul UV Desk</strong></a>. We’ll do it for you!</p><p>To add a product, visit <strong>Multivendor Marketplace Admin/Seller Panel</strong> &gt; <strong>Products</strong> &gt; <strong>Product Listing</strong> &gt; <strong>Add Product</strong>.</p><p>Now, while adding the product, you need mark product as <strong>Pay what you want Product</strong>.</p>`,27),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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
          img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/paywhatyouwantc.webp";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/paywhatyouwantc.webp",alt:'Mark product as "pay what you want" while adding product ',style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/paywhatyouwantc.webp";

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
      `})])],-1),n("p",null,"Other than this, add a minimum price to the product, enter the rest of the details and save.",-1),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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
          img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/paywhatyouwantd.webp";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/paywhatyouwantd.webp",alt:"download",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/paywhatyouwantd.webp";

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
      `})])],-1),n("p",null,'The "minimum price" can be added in two ways i.e, fixed and percentage. You can opt this from product configurations:',-1),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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
          img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/paywhatyouwante.webp";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/paywhatyouwante.webp",alt:'Choose which type of minimum price you would like to add on "pay what you want" products',style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/paywhatyouwante.webp";

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
      `})])],-1),s('<p><strong>Note:</strong></p><p>The normal products can be converted into PWYW products and vice-versa.</p><p>Also, on the seller profile page, the prices for PWYW products don&#39;t display. If you want to display them, add the following code to the <a href="https://webkul.com/blog/shopify-multivendor-marktplace-custom-seller-profile-page-new-theme/" target="_blank" rel="noreferrer">seller profile theme</a>:</p><div class="language-liquid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">liquid</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {if $pay_what_you_want_active &amp;&amp; $value.type == 7} hidden {/if}</span></span></code></pre></div><p>Moreover, after adding all the codes, this is how the frontend will look like:</p>',5),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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
          img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2020/05/collage.png";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2020/05/collage.png",alt:"collage",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2020/05/collage.png";

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
      `})])],-1),n("p",null,[e("If a customer tries to checkout after entering a price lesser than the minimum amount set from the backend, he will receive a message saying:"),n("br"),n("em",null,'"You must pay at least *minimum amount value*"')],-1),n("p",null,"This is all about the Pay What You Want feature app.",-1),n("h3",{id:"schedule-demo",tabindex:"-1"},[e("SCHEDULE DEMO "),n("a",{class:"header-anchor",href:"#schedule-demo","aria-label":'Permalink to "SCHEDULE DEMO"'},"​")],-1),n("p",null,[n("a",{href:"https://egsma.io/shopify-multivendor-marketplace/",target:"_blank",rel:"noreferrer"},"Click here to Schedule the demo of Multivendor marketplace App for Shopify ")],-1)])])}const u=t(o,[["render",r]]);export{y as __pageData,u as default};
