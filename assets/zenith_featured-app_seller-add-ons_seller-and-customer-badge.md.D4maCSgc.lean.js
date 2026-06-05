import{_ as l,c as s,o as a,ah as o,j as n,a as e}from"./chunks/framework.PvdZnrZd.js";const y=JSON.parse('{"title":"SELLER AND CUSTOMER BADGE","description":"SELLER AND CUSTOMER BADGE","frontmatter":{"title":"SELLER AND CUSTOMER BADGE","description":"SELLER AND CUSTOMER BADGE","date":"2025-07-29T00:00:00.000Z","author":"Chirag Tyagi"},"headers":[],"relativePath":"zenith/featured-app/seller-add-ons/seller-and-customer-badge.md","filePath":"zenith/featured-app/seller-add-ons/seller-and-customer-badge.md"}'),r={name:"zenith/featured-app/seller-add-ons/seller-and-customer-badge.md"};function i(c,t,d,m,g,p){return a(),s("div",null,[...t[0]||(t[0]=[o("",17),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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
          img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/sellerbadge1.webp";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/sellerbadge1.webp",alt:"screenshot_1684332485356",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/sellerbadge1.webp";

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
      `})])],-1),n("h2",{id:"adding-badges",tabindex:"-1"},[e("Adding Badges "),n("a",{class:"header-anchor",href:"#adding-badges","aria-label":'Permalink to "Adding Badges"'},"​")],-1),n("p",null,[e("To add badges, visit Multivendor Marketplace "),n("strong",null,"Admin Panel"),e(" > "),n("strong",null,"Sellers"),e(" > "),n("strong",null,"Badge Listing"),e(" > "),n("strong",null,"Add Badge")],-1),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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
          img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/sellerbadge2.webp";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/sellerbadge2.webp",alt:"Seller-Badges-Admin",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/sellerbadge2.webp";

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
      `})])],-1),n("p",null,"Further, on the redirected page, enter the following details:",-1),n("ul",null,[n("li",null,"Badge Name"),n("li",null,"Badge for (seller, customer, both)"),n("li",null,"Description"),n("li",null,"Status (Enable/Disable)"),n("li",null,"Upload Badge Logo (logo can be uploaded of any dimension but the recommended dimension is 185x185 px.)")],-1),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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
          img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/sellerbadge3.webp";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/sellerbadge3.webp",alt:"screenshot_1684324147921",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/sellerbadge3.webp";

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
      `})])],-1),n("p",null,"This is how a new custom badge can be added. Coming back to the badge listing page, it will show all the added badges on the store from where you can edit, disable or delete them.",-1),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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
          img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/sellerbage4.webp";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/sellerbage4.webp",alt:"screenshot_1684324254698",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/sellerbage4.webp";

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
      `})])],-1),n("h2",{id:"assigning-badges-to-seller",tabindex:"-1"},[e("Assigning Badges to Seller "),n("a",{class:"header-anchor",href:"#assigning-badges-to-seller","aria-label":'Permalink to "Assigning Badges to Seller"'},"​")],-1),n("p",null,[e("For this, visit Multivendor Marketplace "),n("strong",null,"Admin Panel"),e(" > "),n("strong",null,"Sellers"),e(" > "),n("strong",null,"Sellers Listing"),e(" > "),n("strong",null,"Edit Seller")],-1),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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
          img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/sellerbadge5.webp";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/sellerbadge5.webp",alt:"Seller-Admin",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/sellerbadge5.webp";

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
      `})])],-1),n("p",null,[e("Further, on the redirected page, under the section "),n("strong",null,"Seller Badges"),e(":"),n("br"),e(" You need to click on "),n("strong",null,"Add Badges"),e(" & select the badge you want to assign from the dropdown list.")],-1),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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
          img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/sellerbadge6.webp";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/sellerbadge6.webp",alt:"Edit-Seller-Admin",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/sellerbadge6.webp";

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
      `})])],-1),n("p",null,"You can assign more than one badge to a seller. Further, the admin can also remove the assigned badge as well as hide it from displaying on the storefront.",-1),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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
          img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/sellerbadge7.webp";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/sellerbadge7.webp",alt:"Edit-Seller-Admin-1",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/sellerbadge7.webp";

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
      `})])],-1),n("h2",{id:"seller-panel",tabindex:"-1"},[e("Seller Panel "),n("a",{class:"header-anchor",href:"#seller-panel","aria-label":'Permalink to "Seller Panel"'},"​")],-1),n("p",null,[e("The seller will be able to see all the assigned badges from the seller panel. Visit Multivendor Marketplace "),n("strong",null,"Seller Panel"),e(" > Profile > My Account.")],-1),n("p",null,[e("Furthermore, under the section "),n("strong",null,"Seller Badges"),e(", all the assigned badges will be listed.")],-1),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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
          img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/sellerbadge8.webp";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/sellerbadge8.webp",alt:"My-Account-Seller-•-Multivendor-MarketPlace",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/sellerbadge8.webp";

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
      `})])],-1),n("h2",{id:"assigning-badges-to-customers",tabindex:"-1"},[e("Assigning badges to customers "),n("a",{class:"header-anchor",href:"#assigning-badges-to-customers","aria-label":'Permalink to "Assigning badges to customers"'},"​")],-1),n("p",null,[e("For this, visit Multivendor "),n("strong",null,"Marketplace Admin Panel > Sellers > Customer Badge> Add customer badge.")],-1),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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
          img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/sellerbadge9.webp";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/sellerbadge9.webp",alt:"screenshot_1684324597737",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/sellerbadge9.webp";

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
      `})])],-1),n("p",null,"Further, on the redirected page.",-1),n("p",null,"You will need to first validate the customer through his/her e-mail address.",-1),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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
          img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/sellerbadge10.webp";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/sellerbadge10.webp",alt:"screenshot_1684324725406",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/sellerbadge10.webp";

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
      `})])],-1),n("p",null,"Once the e-mail is validated, you can assign the badges to the customer.",-1),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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
          img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/sellerbadge11.webp";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/sellerbadge11.webp",alt:"screenshot_1684324921611",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/sellerbadge11.webp";

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
      `})])],-1),n("p",null,[e("To view all the badges assigned to the customers, go to "),n("strong",null,"Marketplace Admin panel> Sellers>customer badges.")],-1),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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
          img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/sellerbadge12.webp";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/sellerbadge12.webp",alt:"screenshot_1684325019431",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/sellerbadge12.webp";

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
      `})])],-1),n("p",null,"The customer badges will be visible to the sellers on their respective seller panel while accepting/fulfilling the order.",-1),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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
          img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/06/chhotu378605591.webp";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/06/chhotu378605591.webp",alt:"seller_side_customer_badge_",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/06/chhotu378605591.webp";

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
      `})])],-1),n("h2",{id:"allow-seller-to-view-customer-badges",tabindex:"-1"},[e("Allow seller to view customer badges "),n("a",{class:"header-anchor",href:"#allow-seller-to-view-customer-badges","aria-label":'Permalink to "Allow seller to view customer badges"'},"​")],-1),n("p",null,"The Admin can decide if he wants the seller to view the badges assigned to the customers.",-1),n("p",null,[e("For this, visit "),n("strong",null,"Marketplace Admin panel> configuration> Badges configuration.")],-1),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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
          img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/sellerbadge14.webp";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/sellerbadge14.webp",alt:"screenshot_1684325611069",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/sellerbadge14.webp";

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
      `})])],-1),n("h2",{id:"adding-code-for-seller-and-customer-badges",tabindex:"-1"},[e("Adding code for seller and customer badges "),n("a",{class:"header-anchor",href:"#adding-code-for-seller-and-customer-badges","aria-label":'Permalink to "Adding code for seller and customer badges"'},"​")],-1),n("p",null,'To add the code for seller and customer badge, you can simple click on the "auto-inject" code in the instruction for marketplace section on the configuration menu.',-1),n("p",null,[e("For this, visit the "),n("strong",null,'marketplace admin panel>configuration>Instruction for marketplace>click "auto inject".')],-1),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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
          img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/06/dfasfasdfasdf.webp";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2026/06/dfasfasdfasdf.webp",alt:"screenshot_1684332098595",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2026/06/dfasfasdfasdf.webp";

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
      `})])],-1),n("h2",{id:"frontend",tabindex:"-1"},[e("Frontend "),n("a",{class:"header-anchor",href:"#frontend","aria-label":'Permalink to "Frontend"'},"​")],-1),n("p",null,"This is how the customer badge will appear on the customer account page.",-1),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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
          img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2023/05/screenshot_1684334233871.png";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2023/05/screenshot_1684334233871.png",alt:"screenshot_1684334233871",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2023/05/screenshot_1684334233871.png";

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
      `})])],-1),n("p",null,"This is how the seller badges will appear on the storefront.",-1),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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
          img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2023/05/screenshot_1684333750965.png";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2023/05/screenshot_1684333750965.png",alt:"screenshot_1684333750965",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2023/05/screenshot_1684333750965.png";

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
      `})])],-1),o("",4),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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
          img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2020/03/download-1200x557.png";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2020/03/download-1200x557.png",alt:"download",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2020/03/download-1200x557.png";

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
      `})])],-1),o("",3),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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
          img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2020/03/Coffee-Mug-%E2%80%93-tarang-shop2-1200x770.png";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2020/03/Coffee-Mug-%E2%80%93-tarang-shop2-1200x770.png",alt:"Coffee-Mug-–-tarang-shop2",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2020/03/Coffee-Mug-%E2%80%93-tarang-shop2-1200x770.png";

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
      `})])],-1),n("h3",{id:"schedule-demo",tabindex:"-1"},[e("SCHEDULE DEMO "),n("a",{class:"header-anchor",href:"#schedule-demo","aria-label":'Permalink to "SCHEDULE DEMO"'},"​")],-1),n("p",null,[n("a",{href:"https://egsma.io/shopify-multivendor-marketplace/",target:"_blank",rel:"noreferrer"},"Click here to Schedule the demo of Multivendor marketplace App for Shopify ")],-1)])])}const h=l(r,[["render",i]]);export{y as __pageData,h as default};
