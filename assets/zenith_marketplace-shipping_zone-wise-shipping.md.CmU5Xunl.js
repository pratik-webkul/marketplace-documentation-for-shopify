import{_ as l,c as i,o as s,ah as t,j as n,a as e}from"./chunks/framework.PvdZnrZd.js";const y=JSON.parse('{"title":"Zone Wise Shipping","description":"Zone Wise Shipping","frontmatter":{"title":"Zone Wise Shipping","description":"Zone Wise Shipping","author":"Chirag Tyagi"},"headers":[],"relativePath":"zenith/marketplace-shipping/zone-wise-shipping.md","filePath":"zenith/marketplace-shipping/zone-wise-shipping.md"}'),r={name:"zenith/marketplace-shipping/zone-wise-shipping.md"};function a(c,o,d,m,p,g){return s(),i("div",null,[...o[0]||(o[0]=[t('<h1 id="user-guide-for-zone-wise-shipping" tabindex="-1">User Guide for Zone Wise Shipping <a class="header-anchor" href="#user-guide-for-zone-wise-shipping" aria-label="Permalink to &quot;User Guide for Zone Wise Shipping&quot;">​</a></h1><h2 id="zone-wise-shipping" tabindex="-1">ZONE WISE SHIPPING <a class="header-anchor" href="#zone-wise-shipping" aria-label="Permalink to &quot;ZONE WISE SHIPPING&quot;">​</a></h2><p>Similarly, if the admin has enabled the Zone-wise Shipping from the <strong>Configuration</strong>&gt;&gt;<strong>Shipping Method</strong> menu of the admin panel,</p><p>the seller will configure the <strong>zone-wise shipping rates with Single/Multiple shipping methods</strong> configured.</p><p>Check the below video of the Zone wise shipping:</p><p>1O18fgt60PY</p><h3 id="case-1-zone-wise-shipping-single-shipping" tabindex="-1"><strong>Case 1</strong>: ZONE-WISE SHIPPING+SINGLE SHIPPING <a class="header-anchor" href="#case-1-zone-wise-shipping-single-shipping" aria-label="Permalink to &quot;**Case 1**: ZONE-WISE SHIPPING+SINGLE SHIPPING&quot;">​</a></h3>',7),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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
          img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/53singlezonewise.webp";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/53singlezonewise.webp",alt:"Screenshot-2020-11-18T142023.498",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/53singlezonewise.webp";

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
      `})])],-1),n("p",null,[e("The seller will configure zone-wise shipping from the Shipping Configuration menu in the seller panel. To add the zone-wise shipping rates, Go to "),n("strong",null,"Configuration"),e(">>"),n("strong",null,"Shipping Configuration"),e(".")],-1),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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
          img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/54shippingmethod.webp";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/54shippingmethod.webp",alt:"Dashboard-Seller-•-Multivendor-MarketPlace-5",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/54shippingmethod.webp";

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
      `})])],-1),n("p",null,"Here, the seller will get the option to add zone-wise shipping rates.",-1),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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
          img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/55mpshippingview.webp";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/55mpshippingview.webp",alt:"Shipping-Configuration-Seller-•-Multivendor-MarketPlace-3",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/55mpshippingview.webp";

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
      `})])],-1),n("p",null,[e("Clicking the "),n("strong",null,"View"),e(" button, the seller will get the option to add ranges & add zone-wise shipping rates.")],-1),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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
          img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/56shippingmethoddetails.webp";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/56shippingmethoddetails.webp",alt:"Shipping Details Seller • Multivendor MarketPlace",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/56shippingmethoddetails.webp";

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
      `})])],-1),n("h2",{id:"seller-adding-shipping-ranges",tabindex:"-1"},[e("Seller adding Shipping Ranges "),n("a",{class:"header-anchor",href:"#seller-adding-shipping-ranges","aria-label":'Permalink to "Seller adding Shipping Ranges"'},"​")],-1),n("p",null,"The seller will click the Range Detail to add New Range & set a shipping range to enter zone-wise shipping rates. These rates will be applied whether on the product's price or product's weight.",-1),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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
          img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/57rangedetails.webp";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/57rangedetails.webp",alt:"Shipping Configuration Seller • Multivendor MarketPlace (4)",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/57rangedetails.webp";

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
      `})])],-1),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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
          img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/58addnewshippingranges.webp";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/58addnewshippingranges.webp",alt:"Range Details Seller • Multivendor MarketPlace",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/58addnewshippingranges.webp";

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
      `})])],-1),n("p",null,"And the Seller can add up to 8 shipping ranges for a Shipping method.",-1),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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
          img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/59addshippingrangesdetails.webp";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/59addshippingrangesdetails.webp",alt:"Range Details Seller • Multivendor MarketPlace (1)",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/59addshippingrangesdetails.webp";

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
      `})])],-1),n("p",null,"Here, the shipping range is set on the basis of Product Price. Similar to this, Seller can set up to 8 ranges for a shipping method. Also, the seller can edit/delete the ranges.",-1),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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
          img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/60editdeleteshiprange.webp";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/60editdeleteshiprange.webp",alt:"Range Details Seller • Multivendor MarketPlace (2)",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/60editdeleteshiprange.webp";

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
      `})])],-1),n("p",null,"Now, as the sellers have added the Shipping rages, they can now proceed to add zone-wise shipping rates simply by clicking here:",-1),n("h2",{id:"seller-adding-shipping-rates",tabindex:"-1"},[e("Seller adding Shipping Rates "),n("a",{class:"header-anchor",href:"#seller-adding-shipping-rates","aria-label":'Permalink to "Seller adding Shipping Rates"'},"​")],-1),n("p",null,[n("strong",null,"Scenario 1:"),e(" When Range Details Tab is Enabled from Admin End. In this case, sellers can simply add zone-wise shipping rates.")],-1),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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
          img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/61addshippingzone.webp";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/61addshippingzone.webp",alt:"Shipping Details Seller • Multivendor MarketPlace (2)",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/61addshippingzone.webp";

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
      `})])],-1),n("p",null,[e("and "),n("strong",null,"Scenario 2:"),e(" And When Range Details Tab is Disabled from Admin End."),n("br"),e(" If the Range Details Tab is disabled from admin end, Seller can directly set a Fixed Shipping cost for the respective zone.")],-1),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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
          img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/62fixedshipping.webp";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/62fixedshipping.webp",alt:"set a fixed shipping cost",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/62fixedshipping.webp";

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
      `})])],-1),n("p",null,"You can view the details, edit/delete zones later if required.",-1),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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
          img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/63shippingmethoddetails.webp";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/63shippingmethoddetails.webp",alt:"Shipping Details Seller • Multivendor MarketPlace (3)",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/63shippingmethoddetails.webp";

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
      `})])],-1),n("h3",{id:"case-2-zone-wise-shipping-multiple-shipping",tabindex:"-1"},[n("strong",null,"Case 2:"),e(" ZONE-WISE SHIPPING+MULTIPLE SHIPPING "),n("a",{class:"header-anchor",href:"#case-2-zone-wise-shipping-multiple-shipping","aria-label":'Permalink to "**Case 2:** ZONE-WISE SHIPPING+MULTIPLE SHIPPING"'},"​")],-1),n("p",null,"In case you have enabled multiple shipping method, the process of setting zone-wise shipping rates will remain the same for the sellers.",-1),n("p",null,[e("To manage the shipping status, the seller needs to Go to the seller panel "),n("strong",null,"Configuration"),e(">>"),n("strong",null,"Marketplace Shipping"),e(" sub-menu.")],-1),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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
          img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/64sellersidempshipconfigmpship.webp";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/64sellersidempshipconfigmpship.webp",alt:"Dashboard-Seller-•-Multivendor-MarketPlace-8",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/64sellersidempshipconfigmpship.webp";

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
      `})])],-1),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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
          img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/65shippingstatus.webp";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/65shippingstatus.webp",alt:"Marketplace-Shipping-Seller-•-Multivendor-MarketPlace-3",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/65shippingstatus.webp";

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
      `})])],-1),n("p",null,"That is how sellers can add zone-wise shipping rates.",-1),n("h2",{id:"choose-a-shipping-method-while-adding-editing-products",tabindex:"-1"},[e("Choose a Shipping Method while Adding/Editing Products "),n("a",{class:"header-anchor",href:"#choose-a-shipping-method-while-adding-editing-products","aria-label":'Permalink to "Choose a Shipping Method while Adding/Editing Products"'},"​")],-1),n("p",null,"Once the seller configures the shipping rates, make sure to select a shipping method while adding/editing a product from the respective panels.",-1),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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
          img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/66productshippingmethod.webp";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/66productshippingmethod.webp",alt:"Screenshot34",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/66productshippingmethod.webp";

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
      `})])],-1),n("h2",{id:"shipping-at-checkout",tabindex:"-1"},[e("Shipping At Checkout "),n("a",{class:"header-anchor",href:"#shipping-at-checkout","aria-label":'Permalink to "Shipping At Checkout"'},"​")],-1),n("p",null,"This is how the Marketplace Shipping Rates appear at checkout.",-1),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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
          img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2021/01/Screenshot-2021-01-11T105917.777-1200x522.png";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2021/01/Screenshot-2021-01-11T105917.777-1200x522.png",alt:"Screenshot-2021-01-11T105917.777",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2021/01/Screenshot-2021-01-11T105917.777-1200x522.png";

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
      `})])],-1),n("h2",{id:"allow-delivery-days-for-zone-wise-shipping",tabindex:"-1"},[e("Allow Delivery Days for Zone wise Shipping "),n("a",{class:"header-anchor",href:"#allow-delivery-days-for-zone-wise-shipping","aria-label":'Permalink to "Allow Delivery Days for Zone wise Shipping"'},"​")],-1),n("p",null,"You can now allow sellers to configure delivery days for zone-wise shipping. Thus, the customers can view the details when the products get delivered to their respective zones.",-1),n("p",null,[e("For that, first you need to enable the tab from the "),n("strong",null,"Shipping Method"),e(" menu of the admin panel. Go to the Configuration>>Shipping Methods>>Click "),n("strong",null,"Configure Shipping"),e(">>Enable the Option.")],-1),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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
          img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/68configshipping.webp";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/68configshipping.webp",alt:"Configuration-Admin-28",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/68configshipping.webp";

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
      `})])],-1),n("p",null,"Now, enable the tab:",-1),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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
          img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/69allowdeliverydatezonewise.webp";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/69allowdeliverydatezonewise.webp",alt:"Configuration-Admin-29",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/69allowdeliverydatezonewise.webp";

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
      `})])],-1),n("p",null,"Enabling this option will allow sellers to configure delivery days from their respective seller panels.",-1),n("h2",{id:"seller-panel-configurations",tabindex:"-1"},[e("Seller Panel Configurations:- "),n("a",{class:"header-anchor",href:"#seller-panel-configurations","aria-label":'Permalink to "Seller Panel Configurations:-"'},"​")],-1),n("p",null,'The seller will manage the shipping from the "Shipping Configuration" menu of the seller panel.',-1),n("p",null,[e("To configure the delivery days, the seller needs to click the "),n("strong",null,"view"),e(" button of the zone-wise shipping menu.")],-1),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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
          img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/70viewmpshipzone.webp";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/70viewmpshipzone.webp",alt:"Shipping_Configuration_Seller_•_Multivendor_MarketPlace",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/70viewmpshipzone.webp";

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
      `})])],-1),n("p",null,'Then, the seller will get redirected to the "Shipping Method Details" section to manage Zone-wise shipping rates.',-1),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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
          img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/71shippingmethoddetails.webp";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/71shippingmethoddetails.webp",alt:"Screenshot-2020-06-03T111745.394",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/71shippingmethoddetails.webp";

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
      `})])],-1),n("p",null,[e("By clicking the "),n("strong",null,"Edit"),e(" button (Action menu), the seller will get the option to fill in delivery days.")],-1),n("p",null,"As soon as, the no of days is entered and this will let customers to know when the products will be delivered to their shipping zones.",-1),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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
          img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/72deliverydate.webp";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/72deliverydate.webp",alt:"Delivery Days",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/72deliverydate.webp";

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
      `})])],-1),n("p",null,"On the product page, The delivery days details will be shown to the customers.",-1),n("p",null,"To show the details on the product page, it is equally important to add this code to the product template.liquid file.",-1),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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
          img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/73sellershipzonecode.webp";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/73sellershipzonecode.webp",alt:"Instruction",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/01/73sellershipzonecode.webp";

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
      `})])],-1),n("p",null,"Finally adding the codes, this is how it appears on the product page of your store:",-1),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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
          img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2020/06/Cups_Saucers_%E2%80%93_priyadarshni_store10-1200x627.png";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2020/06/Cups_Saucers_%E2%80%93_priyadarshni_store10-1200x627.png",alt:"Shipping product page",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2020/06/Cups_Saucers_%E2%80%93_priyadarshni_store10-1200x627.png";

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
      `})])],-1),t('<h2 id="need-support" tabindex="-1">Need Support? <a class="header-anchor" href="#need-support" aria-label="Permalink to &quot;Need Support?&quot;">​</a></h2><p>Hope you like this blog. To get more interesting blogs, keep in touch with us. If you need any kind of support, simply raise a ticket at <a href="https://webkul.uvdesk.com/en/customer/create-ticket/" target="_blank" rel="noreferrer">https://webkul.uvdesk.com/en/customer/create-ticket/</a>.</p><p>You can also contact at <strong><a href="mailto:support@webkul.com" target="_blank" rel="noreferrer">support@webkul.com</a></strong> to get proper assistance.</p><p>Thank You for reading this Blog!</p><h3 id="schedule-demo" tabindex="-1">SCHEDULE DEMO <a class="header-anchor" href="#schedule-demo" aria-label="Permalink to &quot;SCHEDULE DEMO&quot;">​</a></h3><p><a href="https://egsma.io/shopify-multivendor-marketplace/" target="_blank" rel="noreferrer">Click here to Schedule the demo of Multivendor marketplace App for Shopify </a></p>',6)])])}const h=l(r,[["render",a]]);export{y as __pageData,h as default};
