import{_ as l,c as r,o as s,ah as t,j as n,a as e}from"./chunks/framework.PvdZnrZd.js";const y=JSON.parse('{"title":"Fraud Analysis","description":"Fraud Analysis","frontmatter":{"title":"Fraud Analysis","description":"Fraud Analysis","author":"Chirag Tyagi"},"headers":[],"relativePath":"zenith/order/fraud-analysis.md","filePath":"zenith/order/fraud-analysis.md"}'),a={name:"zenith/order/fraud-analysis.md"};function i(c,o,d,m,p,g){return s(),r("div",null,[...o[0]||(o[0]=[t("",13),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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
          img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2024/07/config-1200x550.webp";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2024/07/config-1200x550.webp",alt:"Fraud analysis in the Multivendor app Configuration",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2024/07/config-1200x550.webp";

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
      `})])],-1),t("",6),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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
          img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2024/07/adbeforemark-538x1024.webp";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2024/07/adbeforemark-538x1024.webp",alt:"before mark safe by admin",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2024/07/adbeforemark-538x1024.webp";

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
      `})])],-1),n("p",null,[e("To make order safe Admin needs to click on the tab “MARK AS SAFE” and then "),n("strong",null,"Proceed"),e(".")],-1),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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
          img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2024/07/adbeforemarkk-1200x559.webp";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2024/07/adbeforemarkk-1200x559.webp",alt:"admin make order safe",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2024/07/adbeforemarkk-1200x559.webp";

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
          img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2024/07/adaftermarkk-1200x556.webp";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2024/07/adaftermarkk-1200x556.webp",alt:"after mark safe by admin",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2024/07/adaftermarkk-1200x556.webp";

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
      `})])],-1),n("h2",{id:"seller-end",tabindex:"-1"},[n("strong",null,"SELLER END"),e(),n("a",{class:"header-anchor",href:"#seller-end","aria-label":'Permalink to "**SELLER END**"'},"​")],-1),n("p",null,[e("Now we have to navigate this from the seller's end."),n("br"),e(" Multi-vendor seller Panel Dashboard>>Orders>>Order Listing")],-1),n("p",null,"Also in the respective seller panel, It will display a warning on the order description page.",-1),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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
          img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2024/07/sellersidebefore-753x1024.webp";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2024/07/sellersidebefore-753x1024.webp",alt:"seller end before mark safe by admin",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2024/07/sellersidebefore-753x1024.webp";

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
      `})])],-1),n("p",null,"Now if a seller tries to fulfill the order the alert popup on the screen",-1),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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
          img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2024/07/selllersidebeforee-1200x539.webp";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2024/07/selllersidebeforee-1200x539.webp",alt:"risk popup",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2024/07/selllersidebeforee-1200x539.webp";

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
      `})])],-1),n("p",null,"After Marked by the admin as safe the seller can fulfill the order.",-1),n("p",null,[n("a",{href:"javascript:void(0)",onclick:`
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
          img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2024/07/sellersideafter-1200x558.webp";

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
        `,target:"_blank",rel:"noreferrer"},[n("img",{src:"https://cdnblog.webkul.com/blog/wp-content/uploads/2024/07/sellersideafter-1200x558.webp",alt:"After mark safe by admin ",style:{cursor:"zoom-in","max-width":"100%"},onclick:`
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
        img.src = "https://cdnblog.webkul.com/blog/wp-content/uploads/2024/07/sellersideafter-1200x558.webp";

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
      `})])],-1),n("h3",{id:"schedule-demo",tabindex:"-1"},[e("SCHEDULE DEMO "),n("a",{class:"header-anchor",href:"#schedule-demo","aria-label":'Permalink to "SCHEDULE DEMO"'},"​")],-1),n("p",null,[n("a",{href:"https://egsma.io/shopify-multivendor-marketplace/",target:"_blank",rel:"noreferrer"},"Click here to Schedule the demo of Multivendor marketplace App for Shopify ")],-1)])])}const f=l(a,[["render",i]]);export{y as __pageData,f as default};
