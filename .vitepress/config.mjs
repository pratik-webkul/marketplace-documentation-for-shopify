import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base : '/',
  lang: 'en',
  title: 'Multivendor Marketplace For Shopify',
  description: 'This is the documentation regading webkul multivendor marketplace for shopify',
  head: [
    ['link', { rel: 'icon', href: '/public/image/favicon.png' }],
    // ['script', { src: '/js/toggle-sidebar.js' }],
    
    ['meta', { name: 'title', content: 'Multi-Vendor Marketplace for Shopify' }],
    ['meta', { name: 'description', content: 'Powerful Multi-Vendor Marketplace solution for Shopify store owners to convert their store into a fully functioning marketplace.' }],

    
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Multi-Vendor Marketplace for Shopify' }],
    ['meta', { property: 'og:description', content: 'Powerful Multi-Vendor Marketplace solution for Shopify store owners to convert their store into a fully functioning marketplace.' }],
    ['meta', { property: 'og:image', content: 'https://webkul.com/blog/ogimage/?ogid=MTAwMDIz' }],
    ['meta', { property: 'og:url', content: 'https://marketplace-doc.webkul.com/' }],  
    
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Multi-Vendor Marketplace for Shopify' }],
    ['meta', { name: 'twitter:description', content: 'Powerful Multi-Vendor Marketplace solution for Shopify store owners to convert their store into a fully functioning marketplace.' }],
    ['meta', { name: 'twitter:image', content: 'https://webkul.com/blog/ogimage/?ogid=MTAwMDIz' }],
  ],
  themeConfig: {
    logo: {
      light: '/public/image/mp-black.svg',
      dark: '/public/image/mp-white.svg'
    },
    siteTitle: false,
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Zenith Theme', link: '/zenith/introduction/' },
      { text: 'Webkul', link: 'https://webkul.com/' },
      { text: 'Get App', link: 'https://apps.shopify.com/multi-vendor-marketplace' },
      { text: 'Support', link: 'https://webkul.uvdesk.com/' }
    ],

    sidebar: {
      '/zenith/': [
        {
          text: 'Introduction',
          collapsible: true,
          collapsed: false,
          items: [
            { text: 'Getting Started', link: '/zenith/introduction/' },                     
            { text: 'Overview', link: '/zenith/introduction/overview' }                  
          ]
        },
        // {
        //   text: 'Introduction',
        //   link: '//'
        // },
        {
          text: 'Configuration',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'General configuration', link: '/zenith/configuration/general-configration' },
            { text: 'Product configuration', link: '/zenith/configuration/product-configration' },
            { text: 'Seller configuration', link: '/zenith/configuration/seller-configuration' },
            { text: '2-Step Auth Configuration', link: '/zenith/configuration/2-step-auth-configuration' },
            { text: 'Discount Configuration', link: '/zenith/configuration/discount-configuration' },
            { text: 'Custom Fields', link: '/zenith/configuration/custom-fields' },
            { text: 'Invoice configuration', link: '/zenith/configuration/invoice-configuration' },
            { text: 'Configuration Updates', link: '/zenith/configuration/configuration-updates' },
            { text: 'Minimum Purchase Quantity', link: '/zenith/configuration/minimum-purchase-quantity' },
            { text: 'Minimum Purchase Amount', link: '/zenith/configuration/minimum-purchase-amount' }

            // Add more configuration if needed 
          ]
        },
        {
          text: 'Seller',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Seller Profile Page Settings', link: '/zenith/seller/seller-profile-page-settings' },
            { text: 'Seller Notification', link: '/zenith/seller/seller-notification' },
            { text: 'Advanced Seller Policy', link: '/zenith/seller/advanced-seller-policy' },
            { text: 'Seller Navigation', link: '/zenith/seller/seller-navigation' },
            { text: 'Seller Updates', link: '/zenith/seller/seller-updates' } 

          ]
        },
        {
          text: 'Product',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Add products', link: '/zenith/products/add-products' },
            { text: 'Products updates', link: '/zenith/products/products-updates' },
            { text: 'Import products', link: '/zenith/products/import-products' },
            { text: 'Digital products', link: '/zenith/products/digital-products' },            
            { text: 'Collection sync', link: '/zenith/products/collection-sync' },
            { text: 'Multilevel collection', link: '/zenith/products/multilevel-collection' },            
            { text: 'Dual sync', link: '/zenith/products/dual-sync' },
          ]
        },
        {
          text: 'Commission', 
          collapsible: true, 
          collapsed: true,
          items: [
              { text: 'Overview', link: '/zenith/commission/overview' },
              {text:'Commission type',link:'/zenith/commission/commission-type'}
          ]
        },
        {
          text: 'Payment flow',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Seller payment', link: '/zenith/payment/seller-payment' },
            { text: 'Stripe', link: '/zenith/payment/stripe' },
            { text: 'Stripe configuration', link: '/zenith/payment/stripe-configuration' },
            { text: 'Paypal', link: '/zenith/payment/paypal' },
            { text: 'Razorpay-X', link: '/zenith/payment/razorpayx' },
            { text: 'Seller payment configuration', link: '/zenith/payment/seller-payment-configuration' }


            // Add more payment-related links here if needed
          ]
        },
        {
          text:' Mail Configuration',
          collapsible: true,
          collapsed: true,
          items: [
              {text:'Mail SMTP',link:'/zenith/mail-configuration/mail-smtp'},
              {text:'Google OAuth SMTP',link:'/zenith/mail-configuration/google-oauth-smtp'}
            
          ]
        },
        {
          text: 'Featured app',
          collapsible: true,
          collapsed: true,
          items: 
          [
              { text: 'Overview', link: '/zenith/featured-app/Overview' },
              {
                text: 'Shipping',
                collapsible: true,
                collapsed: true,
                items: [
                  { text: 'Marketplace Shipping', link: '/zenith/featured-app/shipping/marketplace-shipping' },
                  { text: 'USPS SHIPPING', link: '/zenith/featured-app/shipping/usps-shipping' },
                  { text: 'ECOM EXPRESS SHIPPING', link: '/zenith/featured-app/shipping/ecom-express-shipping' },
                  { text: 'CANADA POST SHIPPING', link: '/zenith/featured-app/shipping/canada-post-shipping' },
                  { text: 'STORE PICKUP', link: '/zenith/featured-app/shipping/store-pickup' },
                  { text: 'AIR SPEED SHIPPING', link: '/zenith/featured-app/shipping/air-speed-shipping' },
                  { text: 'AUSTRALIA POST SHIPPING', link: '/zenith/featured-app/shipping/australia-post-shipping' },
                  { text: 'UPS SHIPPING', link: '/zenith/featured-app/shipping/ups-shipping' },
                  { text: 'FEDEX SHIPPING', link: '/zenith/featured-app/shipping/fedex-shipping' },
                  { text: 'VAMASHIP', link: '/zenith/featured-app/shipping/vamaship' },
                  { text: 'SHIPSTATION', link: '/zenith/featured-app/shipping/shipstation' },
                  { text: 'BLUEDART', link: '/zenith/featured-app/shipping/bluedart' },
                  { text: 'ENVIA SHIPPING', link: '/zenith/featured-app/shipping/envia-shipping' },
                  { text: 'DHL EXPRESS', link: '/zenith/featured-app/shipping/dhl-express' },
                  { text: 'BRING SHIPPING', link: '/zenith/featured-app/shipping/bring-shipping' },
                  { text: 'POSTNL', link: '/zenith/featured-app/shipping/postnl' },
                  { text: 'J&TEXPRESS SHIPPING', link: '/zenith/featured-app/shipping/j&texpress-shipping' },
                  { text: 'SHIPMONDO', link: '/zenith/featured-app/shipping/shipmondo' },
                  { text: 'SENDLE SHIPPING', link: '/zenith/featured-app/shipping/sendle-shipping' },
                  { text: 'SWISSPOST SHIPPING', link: '/zenith/featured-app/shipping/swispost-shipping' },
                  { text: 'DELHIVERY', link: '/zenith/featured-app/shipping/delhivery' },
                  { text: 'EASYPOST SHIPPING', link: '/zenith/featured-app/shipping/easypost-shipping' },
                  { text: 'EASYSHIP', link: '/zenith/featured-app/shipping/easyship' },
                  { text: 'SHIPROCKET SHIPPING', link: '/zenith/featured-app/shipping/shiprocket-shipping' },
                  { text: 'SBEEDY SHIPPING', link: '/zenith/featured-app/shipping/sbeedy-shipping' },
                  { text: 'SHIPPIT SHIPPING', link: '/zenith/featured-app/shipping/shippit-shipping' }            
              ]
            },
            {
              text: 'Connector',
              collapsible: true,
              collapsed: true,
              items: [
                { text: 'SELLER SHOPIFY STORE CONNECTOR', link: '/zenith/featured-app/Connector/SELLER SHOPIFY STORE CONNECTOR' },
                { text: 'WOOCOMMERCE CONNECTOR', link: '/zenith/featured-app/Connector/WOOCOMMERCE CONNECTOR' },
                { text: 'SHOPIFY ETSY CONNECTOR', link: '/zenith/featured-app/Connector/SHOPIFY ETSY CONNECTOR' },
                { text: 'SHOPIFY MAGENTO CONNECTOR', link: '/zenith/featured-app/Connector/SHOPIFY MAGENTO CONNECTOR' },
                { text: 'SHOPIFY PRESTASHOP CONNECTOR', link: '/zenith/featured-app/Connector/SHOPIFY PRESTASHOP CONNECTOR' },
                { text: 'SQUAREUP CONNECTOR', link: '/zenith/featured-app/Connector/SQUAREUP CONNECTOR' },
                { text: 'LINNWORKS CONNECTOR', link: '/zenith/featured-app/Connector/LINNWORKS CONNECTOR' },
                { text: 'SOOPOS CONNECTOR', link: '/zenith/featured-app/Connector/SOOPOS CONNECTOR' },
                { text: 'BIGCOMMERCE CONNECTOR', link: '/zenith/featured-app/Connector/BIGCOMMERCE CONNECTOR' },
                { text: 'AMAZON CONNECTOR', link: '/zenith/featured-app/Connector/AMAZON CONNECTOR' },
                { text: 'SHOPIFY EBAY CONNECTOR', link: '/zenith/featured-app/Connector/SHOPIFY EBAY CONNECTOR' },
                { text: 'DYTEL POS CONNECTOR', link: '/zenith/featured-app/Connector/DYTEL POS CONNECTOR' }       
              ]
            },
            {
              text: 'Seller Add-Ons',
              collapsible: true,
              collapsed: true,
              items: [
                { text: 'SELLER MEMBERSHIP', link: '/zenith/featured-app/Seller Add-Ons/SELLER MEMBERSHIP' },
                { text: 'SELLER BUYER CHAT', link: '/zenith/featured-app/Seller Add-Ons/SELLER BUYER CHAT' },
                { text: 'ASK A QUESTION', link: '/zenith/featured-app/Seller Add-Ons/ASK A QUESTION' },
                { text: 'SOCIAL NETWORK TABS', link: '/zenith/featured-app/Seller Add-Ons/SOCIAL NETWORK TABS' },
                { text: 'SELLER VACATION APP', link: '/zenith/featured-app/Seller Add-Ons/SELLER VACATION APP' },
                { text: 'PWA', link: '/zenith/featured-app/Seller Add-Ons/PWA' },
                { text: 'SELLER AND CUSTOMER BADGE', link: '/zenith/featured-app/Seller Add-Ons/SELLER AND CUSTOMER BADGE' },
                { text: 'SELLER TAGS AND CATEGORIES', link: '/zenith/featured-app/Seller Add-Ons/SELLER TAGS AND CATEGORIES' },
                { text: 'SELLER TIME SLOT MANAGEMENT', link: '/zenith/featured-app/Seller Add-Ons/SELLER TIME SLOT MANAGEMENT' },
                { text: 'SOCIAL MEDIA LOGIN', link: '/zenith/featured-app/Seller Add-Ons/SOCIAL MEDIA LOGIN' },
                { text: 'EMAIL MARKETING', link: '/zenith/featured-app/Seller Add-Ons/EMAIL MARKETING' },
                { text: 'WHATSAPP INTEGRATION', link: '/zenith/featured-app/Seller Add-Ons/WHATSAPP INTEGRATION' },
                { text: 'AFFILIATE-REFERRAL SELLER', link: '/zenith/featured-app/Seller Add-Ons/AFFILIATE-REFERRAL SELLER' }
                // Add more seller add-ons here
              ]
            },
            {
              text:'Marketplace Product Add-Ons',
              collapsible: true,
              collapsed: true,
              items:[
                { text: 'GLOBAL PRODUCT', link: '/zenith/featured-app/Marketplace Product Add-Ons/GLOBAL PRODUCT' },
                { text: 'FAVORITE PRODUCT|SELLER', link: '/zenith/featured-app/Marketplace Product Add-Ons/FAVORITE PRODUCT|SELLER' },
                { text: 'STOCK MANAGEMENT', link: '/zenith/featured-app/Marketplace Product Add-Ons/STOCK MANAGEMENT' },
                { text: 'MAKE AN OFFER', link: '/zenith/featured-app/Marketplace Product Add-Ons/MAKE AN OFFER' },
                { text: 'PRODUCT FEED', link: '/zenith/featured-app/Marketplace Product Add-Ons/PRODUCT FEED' },
                { text: 'PRODUCT AUCTION FOR SELLER', link: '/zenith/featured-app/Marketplace Product Add-Ons/PRODUCT AUCTION FOR SELLER' },
                { text: 'SPONSORED PRODUCT', link: '/zenith/featured-app/Marketplace Product Add-Ons/SPONSORED PRODUCT' },
                { text: 'INDIAN GST', link: '/zenith/featured-app/Marketplace Product Add-Ons/INDIAN GST' },
                { text: 'PRODUCT EXPIRY', link: '/zenith/featured-app/Marketplace Product Add-Ons/PRODUCT EXPIRY' },
                { text: 'SLOT PRICING', link: '/zenith/featured-app/Marketplace Product Add-Ons/SLOT PRICING' },
                { text: 'BOOKING PRODUCT', link: '/zenith/featured-app/Marketplace Product Add-Ons/BOOKING PRODUCT' },
                { text: 'DAILY DEALS', link: '/zenith/featured-app/Marketplace Product Add-Ons/DAILY DEALS' },
                { text: 'ARTIST PRODUCT DESIGN', link: '/zenith/featured-app/Marketplace Product Add-Ons/ARTIST PRODUCT DESIGN' },
                { text: 'PRODUCT REVIEW', link: '/zenith/featured-app/Marketplace Product Add-Ons/PRODUCT REVIEW' },
                { text: 'CUSTOM OPTIONS', link: '/zenith/featured-app/Marketplace Product Add-Ons/CUSTOM OPTIONS' },
                { text: 'PAY WHAT YOU WANT', link: '/zenith/featured-app/Marketplace Product Add-Ons/PAY WHAT YOU WANT' },
                { text: 'CROWDFUNDING', link: '/zenith/featured-app/Marketplace Product Add-Ons/CROWDFUNDING' },
                { text: 'PREORDER INTEGRATION', link: '/zenith/featured-app/Marketplace Product Add-Ons/PREORDER INTEGRATION' },
                { text: 'DELIVERY SLOT MANAGEMENT', link: '/zenith/featured-app/Marketplace Product Add-Ons/DELIVERY SLOT MANAGEMENT' },
                { text: 'PACK PRODUCT INTEGRATION', link: '/zenith/featured-app/Marketplace Product Add-Ons/PACK PRODUCT INTEGRATION' },
                { text: 'DELIVERY BOY INTEGRATION', link: '/zenith/featured-app/Marketplace Product Add-Ons/DELIVERY BOY INTEGRATION' },
                { text: 'E-SIGNATURE', link: '/zenith/featured-app/Marketplace Product Add-Ons/E-SIGNATURE' }
              ]
            },
            {
              text:'Marketplace Other Add-Ons',
              collapsible: true,
              collapsed: true,
              items:[
                { text: 'LOCATE YOUR PICKUP STORE', link: '/zenith/featured-app/Marketplace Other Add-Ons/LOCATE YOUR PICKUP STORE' },
                { text: 'SUBSCRIPTION PRODUCT WITH STRIPE CONNECT', link: '/zenith/featured-app/Marketplace Other Add-Ons/SUBSCRIPTION PRODUCT WITH STRIPE CONNECT' },
                { text: 'CHAT GPT', link: '/zenith/featured-app/Marketplace Other Add-Ons/CHAT GPT' },
                { text: 'MULTIVENDOR DATABASE BACKUP', link: '/zenith/featured-app/Marketplace Other Add-Ons/MULTIVENDOR DATABASE BACKUP' },
                { text: 'WATERMARK', link: '/zenith/featured-app/Marketplace Other Add-Ons/WATERMARK' },
                { text: 'SELLER BLOG', link: '/zenith/featured-app/Marketplace Other Add-Ons/SELLER BLOG' },
                { text: 'EASY GROUP BUY APP', link: '/zenith/featured-app/Marketplace Other Add-Ons/EASY GROUP BUY APP' }
              ]
            },
            {
              text:'Marketplace Miscellaneous Add-ons',
              collapsible: true,
              collapsed: true,
              items:[
                { text: 'SMS ALERT', link: '/zenith/featured-app/Marketplace Miscellaneous Add-ons/SMS ALERT' },
                { text: 'WEGLOT TRANSLATION', link: '/zenith/featured-app/Marketplace Miscellaneous Add-ons/WEGLOT TRANSLATION' },
                { text: 'MULTIVENDOR API', link: '/zenith/featured-app/Marketplace Miscellaneous Add-ons/MULTIVENDOR API' },
                { text: 'SELLER STAFF', link: '/zenith/featured-app/Marketplace Miscellaneous Add-ons/SELLER STAFF' },
                { text: 'ADMIN STAFF', link: '/zenith/featured-app/Marketplace Miscellaneous Add-ons/ADMIN STAFF' },
                { text: 'MULTI LOCATION INVENTORY', link: '/zenith/featured-app/Marketplace Miscellaneous Add-ons/MULTI LOCATION INVENTORY' },
                { text: 'CUSTOMER ORDER MANAGEMENT', link: '/zenith/featured-app/Marketplace Miscellaneous Add-ons/CUSTOMER ORDER MANAGEMENT' },
                { text: 'SPLIT CART', link: '/zenith/featured-app/Marketplace Miscellaneous Add-ons/SPLIT CART' },
                { text: 'HYPERLOCAL MARKETPLACE', link: '/zenith/featured-app/Marketplace Miscellaneous Add-ons/HYPERLOCAL MARKETPLACE' },
                { text: 'ROUTE INSURANCE', link: '/zenith/featured-app/Marketplace Miscellaneous Add-ons/ROUTE INSURANCE' },
                { text: 'ZOHO INTEGRATION', link: '/zenith/featured-app/Marketplace Miscellaneous Add-ons/ZOHO INTEGRATION' }               
              ]
            }
          ]
        },
        {
          text: 'Hyperlocal Marketplace',
          collapsible: true,
          collapsed: true,
          items: [
            {
              text: 'Hyperlocal Marketplace',
              link: '/zenith/Hyperlocal Marketplace/HYPERLOCAL MARKETPLACE'
            }
          ]
        },
        {
          text: 'Digital Marketplace',
          collapsible: true,
          collapsed: true,
          items: [
            {
              text: 'E-Book Marketplace',
              link: '/zenith/Digital Marketplace/E-Book Marketplace'
            },
            {
              text: 'Music Marketplace',
              link: '/zenith/Digital Marketplace/Music Marketplace'
            }
          ]
        },
        {
          text: 'B2B Marketplace',
          collapsible: true,
          collapsed: true,
          items: [
            {
              text: 'B2B Marketplace',
              link: '/zenith/B2B Marketplace/B2B Marketplace'
            }
          ]
        },
        {
          text: 'C2C Marketplace',
          collapsible: true,
          collapsed: true,
          items: [
            {
              text: 'C2C Marketplace',
              link: '/zenith/C2C Marketplace/C2C Marketplace'
            }
          ]
        },
        {
          text: 'Auction Marketplace',
          collapsible: true,
          collapsed: true,
          items: [
            {
              text: 'Auction Marketplace',
              link: '/zenith/Auction Marketplace/Auction Marketplace'
            }
          ]
        },
        // {
        //   text: 'Booking Product',
        //   collapsible: true,
        //   collapsed: false,
        //   items: [
        //     {
        //       text: 'Booking Product',
        //       link: '/zenith/Booking Product/BOOKING PRODUCT'
        //     }
        //   ]
        // },
        // {
        //   text: 'Dynamic Mockups',
        //   collapsible: true,
        //   collapsed: false,
        //   items: [
        //     {
        //       text: 'Dynamic Mockups',
        //       link: '/zenith/Dynamic Mockups/PRINT-ON-DEMAND - DYNAMIC MOCKUPS'
        //     }
        //   ]
        // },
        {
          text: 'Crowdfunding Marketplace',
          collapsible: true,
          collapsed: true,
          items: [
            {
              text: 'Crowdfunding',
              link: '/zenith/Crowdfunding Marketplace/Crowdfunding Marketplace'
            }
          ]
        },
        // {
        //   text: 'Ask a Question',
        //   collapsible: true,
        //   collapsed: false,
        //   items: [
        //     {
        //       text: 'Ask a Question',
        //       link: '/zenith/ask-a-question/ask-a-question'
        //     }
        //   ]
        // },
      ],
    },
    
    search: {
      provider: 'local'
    }
  }
})
