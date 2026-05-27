import{_ as l,c as r,o as a,ah as o,j as n,a as e}from"./chunks/framework.PvdZnrZd.js";const p=JSON.parse('{"title":"PRINT-ON-DEMAND - DYNAMIC MOCKUPS","description":"PRINT-ON-DEMAND - DYNAMIC MOCKUPS","frontmatter":{"title":"PRINT-ON-DEMAND - DYNAMIC MOCKUPS","description":"PRINT-ON-DEMAND - DYNAMIC MOCKUPS","date":"2025-05-11T00:00:00.000Z","author":"Chirag Tyagi"},"headers":[],"relativePath":"zenith/featured-app/seller-add-ons/print-on-demand-dynamic-mockups.md","filePath":"zenith/featured-app/seller-add-ons/print-on-demand-dynamic-mockups.md"}'),s={name:"zenith/featured-app/seller-add-ons/print-on-demand-dynamic-mockups.md"};function i(c,t,m,d,g,y){return a(),r("div",null,[...t[0]||(t[0]=[o("",13),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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
          img.src = "https://lh7-rt.googleusercontent.com/docsz/AD_4nXe_6yNRfVbbr-RivDD5i4nDuMjxzoswLwHqr456ATFzgzDlEhCAklN44P9TzQhsRuFUhF2m6CpuY6QM2QkAUOTkovft3cMC8XKR7aTUj_JKU6NULE7k7bSb-1ivzD55NswRkEi7KQ?key=FAR3e2gzSix_B3TCfXrjQg";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://lh7-rt.googleusercontent.com/docsz/AD_4nXe_6yNRfVbbr-RivDD5i4nDuMjxzoswLwHqr456ATFzgzDlEhCAklN44P9TzQhsRuFUhF2m6CpuY6QM2QkAUOTkovft3cMC8XKR7aTUj_JKU6NULE7k7bSb-1ivzD55NswRkEi7KQ?key=FAR3e2gzSix_B3TCfXrjQg",alt:"Print-On-Demand Products:",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://lh7-rt.googleusercontent.com/docsz/AD_4nXe_6yNRfVbbr-RivDD5i4nDuMjxzoswLwHqr456ATFzgzDlEhCAklN44P9TzQhsRuFUhF2m6CpuY6QM2QkAUOTkovft3cMC8XKR7aTUj_JKU6NULE7k7bSb-1ivzD55NswRkEi7KQ?key=FAR3e2gzSix_B3TCfXrjQg";

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
      `})])],-1),n("p",null,"Once you enable this featured app, you need to approve the charges for the app i.e. $10 per month.",-1),n("h2",{id:"admin-end-configuration",tabindex:"-1"},[e("Admin end Configuration "),n("a",{class:"header-anchor",href:"#admin-end-configuration","aria-label":'Permalink to "Admin end Configuration"'},"​")],-1),n("p",null,[e("Once the charges are approved, the admin must configure the settings by navigating to "),n("strong",null,"Multivendor Marketplace Admin Panel > Configuration > Print-on-Demand - Dynamic Mockups Configuration"),e(".")],-1),n("p",null,"In this section, the admin will add the API keys for both the admin and the seller to enable the Dynamic Mockup dashboard.",-1),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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
          img.src = "https://lh7-rt.googleusercontent.com/docsz/AD_4nXf-YTtH7-VKmysVm-h1QYAdWXuw3Gew4AcdKpyqQnJ1Gex5Ilip50yrM3uZYMUdxnVFeLAWt_zR2l4Xvzs-_B-uzmqW1FzYbG5UlDMsrtm508Pt36reDtCsqrC1weu7FZQy8gYP?key=FAR3e2gzSix_B3TCfXrjQg";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://lh7-rt.googleusercontent.com/docsz/AD_4nXf-YTtH7-VKmysVm-h1QYAdWXuw3Gew4AcdKpyqQnJ1Gex5Ilip50yrM3uZYMUdxnVFeLAWt_zR2l4Xvzs-_B-uzmqW1FzYbG5UlDMsrtm508Pt36reDtCsqrC1weu7FZQy8gYP?key=FAR3e2gzSix_B3TCfXrjQg",alt:"Print-on-demand: Dynamic Mockups",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://lh7-rt.googleusercontent.com/docsz/AD_4nXf-YTtH7-VKmysVm-h1QYAdWXuw3Gew4AcdKpyqQnJ1Gex5Ilip50yrM3uZYMUdxnVFeLAWt_zR2l4Xvzs-_B-uzmqW1FzYbG5UlDMsrtm508Pt36reDtCsqrC1weu7FZQy8gYP?key=FAR3e2gzSix_B3TCfXrjQg";

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
      `})])],-1),n("p",null,[e("To obtain the API keys, the admin can click on "),n("strong",null,'"By Dynamic Mockups"'),e(" to create an account on the Dynamic Mockup platform and gain access to the dashboard.")],-1),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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
          img.src = "https://lh7-rt.googleusercontent.com/docsz/AD_4nXeKmrfqbm-us3yJZ8ED9S6iHegH8rNs_Y3MY32Hdcop2WeNT-_sLWw5g-YH2OZvs1k1Jmsdd5XfVMF9bRCr86tU2ZS5ViAm-XW9IcOTpCLltK8ORymYJvi6_QGpuHUgEFRn66AKPg?key=FAR3e2gzSix_B3TCfXrjQg";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://lh7-rt.googleusercontent.com/docsz/AD_4nXeKmrfqbm-us3yJZ8ED9S6iHegH8rNs_Y3MY32Hdcop2WeNT-_sLWw5g-YH2OZvs1k1Jmsdd5XfVMF9bRCr86tU2ZS5ViAm-XW9IcOTpCLltK8ORymYJvi6_QGpuHUgEFRn66AKPg?key=FAR3e2gzSix_B3TCfXrjQg",alt:"Print-on-demand: Dynamic Mockups",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://lh7-rt.googleusercontent.com/docsz/AD_4nXeKmrfqbm-us3yJZ8ED9S6iHegH8rNs_Y3MY32Hdcop2WeNT-_sLWw5g-YH2OZvs1k1Jmsdd5XfVMF9bRCr86tU2ZS5ViAm-XW9IcOTpCLltK8ORymYJvi6_QGpuHUgEFRn66AKPg?key=FAR3e2gzSix_B3TCfXrjQg";

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
      `})])],-1),n("h2",{id:"create-an-account-on-dynamic-mockups",tabindex:"-1"},[e("Create an Account on Dynamic Mockups "),n("a",{class:"header-anchor",href:"#create-an-account-on-dynamic-mockups","aria-label":'Permalink to "Create an Account on Dynamic Mockups"'},"​")],-1),n("p",null,[e("To create an account, click on "),n("strong",null,"Sign Up"),e(". If you already have an account on "),n("a",{href:"https://dynamicmockups.com/",target:"_blank",rel:"noreferrer"},"Dynamic Mockups"),e(", you can log in with your existing credentials or choose to log in or sign up using your Google account.")],-1),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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
          img.src = "https://lh7-rt.googleusercontent.com/docsz/AD_4nXegImytq5XSfwBAsIHNOGMJAgK96GSRLdlNtNvMhS2kmPyWyEXJGvrOxB0ZwdC3Z_xfYnf2dqFq7EEng20FCFVRJZI_OTge8lqqi9OS04Kwqze4u6G-jJ75R3hWrVe9bK_6sX17gA?key=FAR3e2gzSix_B3TCfXrjQg";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://lh7-rt.googleusercontent.com/docsz/AD_4nXegImytq5XSfwBAsIHNOGMJAgK96GSRLdlNtNvMhS2kmPyWyEXJGvrOxB0ZwdC3Z_xfYnf2dqFq7EEng20FCFVRJZI_OTge8lqqi9OS04Kwqze4u6G-jJ75R3hWrVe9bK_6sX17gA?key=FAR3e2gzSix_B3TCfXrjQg",alt:"Print-on-demand: Dynamic Mockups",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://lh7-rt.googleusercontent.com/docsz/AD_4nXegImytq5XSfwBAsIHNOGMJAgK96GSRLdlNtNvMhS2kmPyWyEXJGvrOxB0ZwdC3Z_xfYnf2dqFq7EEng20FCFVRJZI_OTge8lqqi9OS04Kwqze4u6G-jJ75R3hWrVe9bK_6sX17gA?key=FAR3e2gzSix_B3TCfXrjQg";

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

          const img = document.createElement('img');
          img.src = "https://lh7-rt.googleusercontent.com/docsz/AD_4nXdbwHb_7h0YdodBk4UrAXwTldrFZbOliAm6vgd2GQe6btLUDzbnmBKRo3HQogeoA4VqEHc96TwwhoSW9L90xjK0GHfQWTi0ll475LSa8dIE7miU8c6ppOJyw0N0YEOAIK4EF_s_pA?key=FAR3e2gzSix_B3TCfXrjQg";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://lh7-rt.googleusercontent.com/docsz/AD_4nXdbwHb_7h0YdodBk4UrAXwTldrFZbOliAm6vgd2GQe6btLUDzbnmBKRo3HQogeoA4VqEHc96TwwhoSW9L90xjK0GHfQWTi0ll475LSa8dIE7miU8c6ppOJyw0N0YEOAIK4EF_s_pA?key=FAR3e2gzSix_B3TCfXrjQg",alt:"Print-on-demand: Dynamic Mockups",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://lh7-rt.googleusercontent.com/docsz/AD_4nXdbwHb_7h0YdodBk4UrAXwTldrFZbOliAm6vgd2GQe6btLUDzbnmBKRo3HQogeoA4VqEHc96TwwhoSW9L90xjK0GHfQWTi0ll475LSa8dIE7miU8c6ppOJyw0N0YEOAIK4EF_s_pA?key=FAR3e2gzSix_B3TCfXrjQg";

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
      `})])],-1),n("h2",{id:"for-admin-embeddable-mockup-editor-website-key",tabindex:"-1"},[n("strong",null,"For Admin Embeddable Mockup Editor Website Key"),e(),n("a",{class:"header-anchor",href:"#for-admin-embeddable-mockup-editor-website-key","aria-label":'Permalink to "**For Admin Embeddable Mockup Editor Website Key**"'},"​")],-1),n("p",null,[e("Once you have created or logged into your account and filled in all the basic details, click on "),n("strong",null,"'Embed Mockup Editor'"),e(" and then select "),n("strong",null,"'Create New Website Key'"),e(".")],-1),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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
          img.src = "https://lh7-rt.googleusercontent.com/docsz/AD_4nXeEVlSM21YDrBFpTYXZCotzO82lQgUv7b5VjkgA-y-26k6nm9oZIPwSEHgKPHHI4TDCZAtwdVhfZpdAgtPUjUmPIYAvQ92_mhpl-PMcJJCSBN7acdpRqnpxt1Vc4frVXDbvU7tAtg?key=FAR3e2gzSix_B3TCfXrjQg";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://lh7-rt.googleusercontent.com/docsz/AD_4nXeEVlSM21YDrBFpTYXZCotzO82lQgUv7b5VjkgA-y-26k6nm9oZIPwSEHgKPHHI4TDCZAtwdVhfZpdAgtPUjUmPIYAvQ92_mhpl-PMcJJCSBN7acdpRqnpxt1Vc4frVXDbvU7tAtg?key=FAR3e2gzSix_B3TCfXrjQg",alt:"Print-on-demand: Dynamic Mockups",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://lh7-rt.googleusercontent.com/docsz/AD_4nXeEVlSM21YDrBFpTYXZCotzO82lQgUv7b5VjkgA-y-26k6nm9oZIPwSEHgKPHHI4TDCZAtwdVhfZpdAgtPUjUmPIYAvQ92_mhpl-PMcJJCSBN7acdpRqnpxt1Vc4frVXDbvU7tAtg?key=FAR3e2gzSix_B3TCfXrjQg";

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
      `})])],-1),n("p",null,[e("Clicking on 'Create New Website Key' will prompt you to enter your website name and the whitelisted domain ("),n("a",{href:"https://sp-seller.webkul.com/",target:"_blank",rel:"noreferrer"},"https://sp-seller.webkul.com/"),e("). Then, click 'Create' to generate your API keys.")],-1),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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
          img.src = "https://lh7-rt.googleusercontent.com/docsz/AD_4nXea3Ixd5cNB8mib-8EvMOcYWFiTjBAkdF9zCdNmIhXfS_FiD42gVoF5ZjK_MY0-DVlVImfAyxxY73-p9pVo5EPtK1DU-BHFvXhGbkxiMoE_pUZjH1nnLGFkgTspFeWEDTZMEnwx?key=FAR3e2gzSix_B3TCfXrjQg";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://lh7-rt.googleusercontent.com/docsz/AD_4nXea3Ixd5cNB8mib-8EvMOcYWFiTjBAkdF9zCdNmIhXfS_FiD42gVoF5ZjK_MY0-DVlVImfAyxxY73-p9pVo5EPtK1DU-BHFvXhGbkxiMoE_pUZjH1nnLGFkgTspFeWEDTZMEnwx?key=FAR3e2gzSix_B3TCfXrjQg",alt:"Print-on-demand: Dynamic Mockups",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://lh7-rt.googleusercontent.com/docsz/AD_4nXea3Ixd5cNB8mib-8EvMOcYWFiTjBAkdF9zCdNmIhXfS_FiD42gVoF5ZjK_MY0-DVlVImfAyxxY73-p9pVo5EPtK1DU-BHFvXhGbkxiMoE_pUZjH1nnLGFkgTspFeWEDTZMEnwx?key=FAR3e2gzSix_B3TCfXrjQg";

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

          const img = document.createElement('img');
          img.src = "https://lh7-rt.googleusercontent.com/docsz/AD_4nXe25_VGKglJrtu-P7CuxCgXww_4_cQT8uiDdkrGQZq7M6LMfAVjl4eSehtyYUJY51bqqeBxF0WxbWOqrYvrW0o0sz74VbMVlwyWuYwhm4iy-e2gC6TAfz_UBy6N-d2GM7PHaF2q?key=FAR3e2gzSix_B3TCfXrjQg";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://lh7-rt.googleusercontent.com/docsz/AD_4nXe25_VGKglJrtu-P7CuxCgXww_4_cQT8uiDdkrGQZq7M6LMfAVjl4eSehtyYUJY51bqqeBxF0WxbWOqrYvrW0o0sz74VbMVlwyWuYwhm4iy-e2gC6TAfz_UBy6N-d2GM7PHaF2q?key=FAR3e2gzSix_B3TCfXrjQg",alt:"Print-on-demand: Dynamic Mockups",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://lh7-rt.googleusercontent.com/docsz/AD_4nXe25_VGKglJrtu-P7CuxCgXww_4_cQT8uiDdkrGQZq7M6LMfAVjl4eSehtyYUJY51bqqeBxF0WxbWOqrYvrW0o0sz74VbMVlwyWuYwhm4iy-e2gC6TAfz_UBy6N-d2GM7PHaF2q?key=FAR3e2gzSix_B3TCfXrjQg";

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
      `})])],-1),n("p",null,"After generating the API keys for both Admin and Seller, copy the website key and enter it into the Configuration section.",-1),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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
          img.src = "https://lh7-rt.googleusercontent.com/docsz/AD_4nXfWF-vIPBtLHbaYxVRky1JpBYgioE8bk0NuNc2MqhM4vTS9XY88pIr3xZMErxsqWgItwxUvCTOdCQefbn2M_l45qlZW3Rz-sqcN7ncSiK2Q-MaVSMLsmw2vGCnoXToNk1KCG8VY?key=FAR3e2gzSix_B3TCfXrjQg";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://lh7-rt.googleusercontent.com/docsz/AD_4nXfWF-vIPBtLHbaYxVRky1JpBYgioE8bk0NuNc2MqhM4vTS9XY88pIr3xZMErxsqWgItwxUvCTOdCQefbn2M_l45qlZW3Rz-sqcN7ncSiK2Q-MaVSMLsmw2vGCnoXToNk1KCG8VY?key=FAR3e2gzSix_B3TCfXrjQg",alt:"Print-on-demand: Dynamic Mockups",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://lh7-rt.googleusercontent.com/docsz/AD_4nXfWF-vIPBtLHbaYxVRky1JpBYgioE8bk0NuNc2MqhM4vTS9XY88pIr3xZMErxsqWgItwxUvCTOdCQefbn2M_l45qlZW3Rz-sqcN7ncSiK2Q-MaVSMLsmw2vGCnoXToNk1KCG8VY?key=FAR3e2gzSix_B3TCfXrjQg";

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
      `})])],-1),n("p",null,"Once you (Admin) register yourself on the Dynamic Mockups platform, you can add mockups like T-shirts, mugs, pillows, etc., where you want to print your design.",-1),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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
          img.src = "https://lh7-rt.googleusercontent.com/docsz/AD_4nXfisVD3RDkWKvluYGo7zj-27iamW07n3TOHqJJii44v78UksKydibUQ_CXWH2zGoKs8jXAC1fd1r82nbXJE0U7wKZf4BodLR1ga1XqpxPE7Si8aR2AldQmZcdMHXboAHfAqNtoJ?key=FAR3e2gzSix_B3TCfXrjQg";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://lh7-rt.googleusercontent.com/docsz/AD_4nXfisVD3RDkWKvluYGo7zj-27iamW07n3TOHqJJii44v78UksKydibUQ_CXWH2zGoKs8jXAC1fd1r82nbXJE0U7wKZf4BodLR1ga1XqpxPE7Si8aR2AldQmZcdMHXboAHfAqNtoJ?key=FAR3e2gzSix_B3TCfXrjQg",alt:"Print-on-demand: Dynamic Mockups",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://lh7-rt.googleusercontent.com/docsz/AD_4nXfisVD3RDkWKvluYGo7zj-27iamW07n3TOHqJJii44v78UksKydibUQ_CXWH2zGoKs8jXAC1fd1r82nbXJE0U7wKZf4BodLR1ga1XqpxPE7Si8aR2AldQmZcdMHXboAHfAqNtoJ?key=FAR3e2gzSix_B3TCfXrjQg";

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
      `})])],-1),n("h2",{id:"seller-panel",tabindex:"-1"},[e("Seller Panel "),n("a",{class:"header-anchor",href:"#seller-panel","aria-label":'Permalink to "Seller Panel"'},"​")],-1),n("p",null,[e("Once the Admin sets the mockups, the Seller can use the "),n("strong",null,"Dynamic Mockups"),e(" feature while adding their product.")],-1),n("p",null,[e("The Seller needs to check the box "),n("strong",null,"'TO ADD PRINT-ON-DEMAND PRODUCT - DYNAMIC MOCKUPS'"),e(" on the product form page.")],-1),n("p",null,[e("When this checkbox is selected, the option "),n("strong",null,"'Image add by POD'"),e(" becomes available on the product form page.")],-1),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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
          img.src = "https://lh7-rt.googleusercontent.com/docsz/AD_4nXd_cZvDe9CPLRZqt9MaGclhRn8bTxImKHUwVReHU4fzGVgpY2x-9MDEPZjaUUS1vX4jm6G8NEFL_eEMIW36H0i8Dkr0YhT7Oc7kgZnZCj4OUFhT0lpioP9QJ9kybxDHrnfLwkHKcw?key=FAR3e2gzSix_B3TCfXrjQg";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://lh7-rt.googleusercontent.com/docsz/AD_4nXd_cZvDe9CPLRZqt9MaGclhRn8bTxImKHUwVReHU4fzGVgpY2x-9MDEPZjaUUS1vX4jm6G8NEFL_eEMIW36H0i8Dkr0YhT7Oc7kgZnZCj4OUFhT0lpioP9QJ9kybxDHrnfLwkHKcw?key=FAR3e2gzSix_B3TCfXrjQg",alt:"Print-on-demand: ",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://lh7-rt.googleusercontent.com/docsz/AD_4nXd_cZvDe9CPLRZqt9MaGclhRn8bTxImKHUwVReHU4fzGVgpY2x-9MDEPZjaUUS1vX4jm6G8NEFL_eEMIW36H0i8Dkr0YhT7Oc7kgZnZCj4OUFhT0lpioP9QJ9kybxDHrnfLwkHKcw?key=FAR3e2gzSix_B3TCfXrjQg";

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
      `})])],-1),n("p",null,[e("When the seller clicks on "),n("strong",null,"'Add Images by POD'"),e(", the "),n("strong",null,"Print-On-Demand Products: Dynamic Mockups"),e(" screen appears.")],-1),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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
          img.src = "https://lh7-rt.googleusercontent.com/docsz/AD_4nXdXguOm7Q_hbqJ7OYFOfs_v2RsgQyU4jlJ65fNIEuGByulfHYd71VZY2TMwQjWIK1-EZ-6cMPQhqeh3e0SmG7cicGuXHCnatiSzrcKlNP2f3ZUJ2qrBcmY3HBGXDLjd-C199LtR?key=FAR3e2gzSix_B3TCfXrjQg";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://lh7-rt.googleusercontent.com/docsz/AD_4nXdXguOm7Q_hbqJ7OYFOfs_v2RsgQyU4jlJ65fNIEuGByulfHYd71VZY2TMwQjWIK1-EZ-6cMPQhqeh3e0SmG7cicGuXHCnatiSzrcKlNP2f3ZUJ2qrBcmY3HBGXDLjd-C199LtR?key=FAR3e2gzSix_B3TCfXrjQg",alt:"Print-on-demand: Dynamic Mockups",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://lh7-rt.googleusercontent.com/docsz/AD_4nXdXguOm7Q_hbqJ7OYFOfs_v2RsgQyU4jlJ65fNIEuGByulfHYd71VZY2TMwQjWIK1-EZ-6cMPQhqeh3e0SmG7cicGuXHCnatiSzrcKlNP2f3ZUJ2qrBcmY3HBGXDLjd-C199LtR?key=FAR3e2gzSix_B3TCfXrjQg";

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
      `})])],-1),n("p",null,"From there, the seller can select a product that the Admin has already added, upload their design, and adjust its placement on the product.",-1),n("p",null,"They can preview how the design will look in real-time and also change the product's color as needed.",-1),n("p",null,[n("strong",null,"Note:"),e(" A maximum of 10 images can be added.")],-1),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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
          img.src = "https://lh7-rt.googleusercontent.com/docsz/AD_4nXcIYVW5rASRnc_qtn3twUyXS6HYOuNQcHX2HLtHm929acmW7GOO7OTivgPV3NZ2E6liwfYmxmWblCjqsrpLrUZkVRWZ9iCi5nApa0GrgHKqA7k2vtbn4SpK4I4T7EwNvrYf0pWblQ?key=FAR3e2gzSix_B3TCfXrjQg";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://lh7-rt.googleusercontent.com/docsz/AD_4nXcIYVW5rASRnc_qtn3twUyXS6HYOuNQcHX2HLtHm929acmW7GOO7OTivgPV3NZ2E6liwfYmxmWblCjqsrpLrUZkVRWZ9iCi5nApa0GrgHKqA7k2vtbn4SpK4I4T7EwNvrYf0pWblQ?key=FAR3e2gzSix_B3TCfXrjQg",alt:"Print-on-demand: ",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://lh7-rt.googleusercontent.com/docsz/AD_4nXcIYVW5rASRnc_qtn3twUyXS6HYOuNQcHX2HLtHm929acmW7GOO7OTivgPV3NZ2E6liwfYmxmWblCjqsrpLrUZkVRWZ9iCi5nApa0GrgHKqA7k2vtbn4SpK4I4T7EwNvrYf0pWblQ?key=FAR3e2gzSix_B3TCfXrjQg";

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
      `})])],-1),n("p",null,[e("The seller can click on the "),n("strong",null,"plus (+) icon"),e(" to add their design for printing on the product and use the "),n("strong",null,"color option"),e(" to change the product's color.")],-1),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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
          img.src = "https://lh7-rt.googleusercontent.com/docsz/AD_4nXenZW4aKlfOyN-E5DkMuyO4ZL89PkQ2lq8962UfAftvbQNbXj2SbbnHC6HnwJTnSbQ9Ny0yus0OHs3yftPPeTGeY_yfbtHquU_jJmHYmIfSe5bTtNQ7GT1uHLh3F_Db2IVeCK8Ntw?key=FAR3e2gzSix_B3TCfXrjQg";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://lh7-rt.googleusercontent.com/docsz/AD_4nXenZW4aKlfOyN-E5DkMuyO4ZL89PkQ2lq8962UfAftvbQNbXj2SbbnHC6HnwJTnSbQ9Ny0yus0OHs3yftPPeTGeY_yfbtHquU_jJmHYmIfSe5bTtNQ7GT1uHLh3F_Db2IVeCK8Ntw?key=FAR3e2gzSix_B3TCfXrjQg",alt:"Print-on-demand: Dynamic Mockups",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://lh7-rt.googleusercontent.com/docsz/AD_4nXenZW4aKlfOyN-E5DkMuyO4ZL89PkQ2lq8962UfAftvbQNbXj2SbbnHC6HnwJTnSbQ9Ny0yus0OHs3yftPPeTGeY_yfbtHquU_jJmHYmIfSe5bTtNQ7GT1uHLh3F_Db2IVeCK8Ntw?key=FAR3e2gzSix_B3TCfXrjQg";

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

          const img = document.createElement('img');
          img.src = "https://lh7-rt.googleusercontent.com/docsz/AD_4nXcLinzOSA9FjK6jweNsAOBWgRtvpqgOB89gHpyMheJe2Z5apjr4j8D0y2CLgwYqeYDAI3JsbixvHCVXk6Q_0TfGsdTnQ84oupHgRHDWz4LE3ILhEuvNFlqKTrx-vQx5ReSmfP7z?key=FAR3e2gzSix_B3TCfXrjQg";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://lh7-rt.googleusercontent.com/docsz/AD_4nXcLinzOSA9FjK6jweNsAOBWgRtvpqgOB89gHpyMheJe2Z5apjr4j8D0y2CLgwYqeYDAI3JsbixvHCVXk6Q_0TfGsdTnQ84oupHgRHDWz4LE3ILhEuvNFlqKTrx-vQx5ReSmfP7z?key=FAR3e2gzSix_B3TCfXrjQg",alt:"Print-on-demand: ",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://lh7-rt.googleusercontent.com/docsz/AD_4nXcLinzOSA9FjK6jweNsAOBWgRtvpqgOB89gHpyMheJe2Z5apjr4j8D0y2CLgwYqeYDAI3JsbixvHCVXk6Q_0TfGsdTnQ84oupHgRHDWz4LE3ILhEuvNFlqKTrx-vQx5ReSmfP7z?key=FAR3e2gzSix_B3TCfXrjQg";

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
      `})])],-1),n("h2",{id:"frontend",tabindex:"-1"},[e("Frontend "),n("a",{class:"header-anchor",href:"#frontend","aria-label":'Permalink to "Frontend"'},"​")],-1),n("p",null,"The product will appear in the store, allowing customers to view and purchase it.",-1),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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
          img.src = "https://lh7-rt.googleusercontent.com/docsz/AD_4nXdi527tRx-58Kxzyv-B6HzdjEyUAtzlE8JKTZYGlwb5gvwb7S8ajdUCOYdDV233QgmtkqQKHI1VE_sSuvXLQ7SEHYMZnuuU0dMA5HvlpL31IiKkO9j5wa05P9ekBckLFdq2dFUMjQ?key=FAR3e2gzSix_B3TCfXrjQg";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://lh7-rt.googleusercontent.com/docsz/AD_4nXdi527tRx-58Kxzyv-B6HzdjEyUAtzlE8JKTZYGlwb5gvwb7S8ajdUCOYdDV233QgmtkqQKHI1VE_sSuvXLQ7SEHYMZnuuU0dMA5HvlpL31IiKkO9j5wa05P9ekBckLFdq2dFUMjQ?key=FAR3e2gzSix_B3TCfXrjQg",alt:"Print-On-Demand Products:",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://lh7-rt.googleusercontent.com/docsz/AD_4nXdi527tRx-58Kxzyv-B6HzdjEyUAtzlE8JKTZYGlwb5gvwb7S8ajdUCOYdDV233QgmtkqQKHI1VE_sSuvXLQ7SEHYMZnuuU0dMA5HvlpL31IiKkO9j5wa05P9ekBckLFdq2dFUMjQ?key=FAR3e2gzSix_B3TCfXrjQg";

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
      `})])],-1),n("p",null,[e("This was all about the "),n("strong",null,"Print-On-Demand Products: Dynamic Mockups"),e(" featured App for the "),n("strong",null,"Multivendor Marketplace"),e(" for "),n("strong",null,"Shopify"),e(".")],-1)])])}const v=l(s,[["render",i]]);export{p as __pageData,v as default};
