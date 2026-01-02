import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base : '/',
  lang: 'en',
  title: 'Multivendor Marketplace For Shopify',
  description: 'This is the documentation regading webkul multivendor marketplace for shopify',
  head: [
    ['link', { rel: 'icon', href: '/image/favicon.png' }],
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
      light: '/image/mp-black.svg',
      dark: '/image/mp-white.svg'
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
            { text: '2-Step Auth Configuration', link: '/zenith/configuration/2-step-auth-configuration' },
            { text: 'Configuration Updates', link: '/zenith/configuration/configuration-updates' },
            { text: 'Custom Fields', link: '/zenith/configuration/custom-fields' },
            { text: 'Discount Configuration', link: '/zenith/configuration/discount-configuration' },
            { text: 'General configuration', link: '/zenith/configuration/general-configration' },
            { text: 'Invoice configuration', link: '/zenith/configuration/invoice-configuration' },
            { text: 'Minimum Purchase Amount', link: '/zenith/configuration/minimum-purchase-amount' },
            { text: 'Minimum Purchase Quantity', link: '/zenith/configuration/minimum-purchase-quantity' },
            { text: 'Product configuration', link: '/zenith/configuration/product-configration' },
            { text: 'Seller configuration', link: '/zenith/configuration/seller-configuration' },
 
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
            { text: 'Import products', link: '/zenith/products/import-products' },
            { text: 'Digital products', link: '/zenith/products/digital-products' },
            { text: 'Collection sync', link: '/zenith/products/collection-sync' },
            { text: 'Multilevel collection', link: '/zenith/products/multilevel-collection' },  
            { text: 'Dual sync', link: '/zenith/products/dual-sync' },                                             
            { text: 'Products updates', link: '/zenith/products/products-updates' },
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
          { text: 'Overview', link: '/zenith/featured-app/overview' },
            {
              text: 'Shipping',
              collapsible: true,
              collapsed: true,
              items: [
                { text: 'Air speed shipping', link: '/zenith/featured-app/shipping/air-speed-shipping' },
                { text: 'Australia post shipping', link: '/zenith/featured-app/shipping/australia-post-shipping' },
                { text: 'Bluedart', link: '/zenith/featured-app/shipping/bluedart' },
                { text: 'Bring shipping', link: '/zenith/featured-app/shipping/bring-shipping' },
                { text: 'Canada post shipping', link: '/zenith/featured-app/shipping/canada-post-shipping' },
                { text: 'Delhivery', link: '/zenith/featured-app/shipping/delhivery' },
                { text: 'DHL express', link: '/zenith/featured-app/shipping/dhl-express' },
                { text: 'EasyPost shipping', link: '/zenith/featured-app/shipping/easypost-shipping' },
                { text: 'Easyship', link: '/zenith/featured-app/shipping/easyship' },
                { text: 'Ecom express shipping', link: '/zenith/featured-app/shipping/ecom-express-shipping' },
                { text: 'Envia shipping', link: '/zenith/featured-app/shipping/envia-shipping' },
                { text: 'FedEx shipping', link: '/zenith/featured-app/shipping/fedex-shipping' },
                { text: 'J&TExpress shipping', link: '/zenith/featured-app/shipping/j&texpress-shipping' },
                { text: 'Marketplace shipping', link: '/zenith/featured-app/shipping/marketplace-shipping' },
                { text: 'PostNL', link: '/zenith/featured-app/shipping/postnl' },
                { text: 'Sendle shipping', link: '/zenith/featured-app/shipping/sendle-shipping' },
                { text: 'Shipmondo', link: '/zenith/featured-app/shipping/shipmondo' },
                { text: 'Shiprocket shipping', link: '/zenith/featured-app/shipping/shiprocket-shipping' },
                { text: 'Shipstation', link: '/zenith/featured-app/shipping/shipstation' },
                { text: 'Shippit shipping', link: '/zenith/featured-app/shipping/shippit-shipping' },
                { text: 'Sbeedy shipping', link: '/zenith/featured-app/shipping/sbeedy-shipping' },
                { text: 'Store pickup', link: '/zenith/featured-app/shipping/store-pickup' },
                { text: 'SwissPost shipping', link: '/zenith/featured-app/shipping/swisspost-shipping' },
                { text: 'UPS shipping', link: '/zenith/featured-app/shipping/ups-shipping' },
                // { text: 'USPS shipping', link: '/zenith/featured-app/shipping/usps-shipping' },
                { text: 'Vamaship', link: '/zenith/featured-app/shipping/vamaship' }
              ]
            },
            {
              text: 'Connector',
              collapsible: true,
              collapsed: true,
              items: [
                { text: 'Amazon connector', link: '/zenith/featured-app/connector/amazon-connector' },
                { text: 'BigCommerce connector', link: '/zenith/featured-app/connector/bigcommerce-connector' },
                { text: 'Dytel POS connector', link: '/zenith/featured-app/connector/dytel-pos-connector' },
                { text: 'Linnworks connector', link: '/zenith/featured-app/connector/linnworks-connector' },
                { text: 'Seller Shopify store connector', link: '/zenith/featured-app/connector/seller-shopify-store-connector' },
                { text: 'Shopify eBay connector', link: '/zenith/featured-app/connector/shopify-ebay-connector' },
                { text: 'Shopify Etsy connector', link: '/zenith/featured-app/connector/shopify-etsy-connector' },
                { text: 'Shopify Magento connector', link: '/zenith/featured-app/connector/shopify-magento-connector' },
                { text: 'Shopify Prestashop connector', link: '/zenith/featured-app/connector/shopify-prestashop-connector' },
                { text: 'Soopos connector', link: '/zenith/featured-app/connector/soopos-connector' },
                { text: 'SquareUp connector', link: '/zenith/featured-app/connector/squareup-connector' },
                { text: 'WooCommerce connector', link: '/zenith/featured-app/connector/woocommerce-connector' }
              ]
            },
            {
              text: 'Seller add-ons',
              collapsible: true,
              collapsed: true,
              items: [
                { text: 'Affiliate referral seller', link: '/zenith/featured-app/seller-add-ons/affiliate-referral-seller' },
                { text: 'Ask a question', link: '/zenith/featured-app/seller-add-ons/ask-a-question' },
                { text: 'Email marketing', link: '/zenith/featured-app/seller-add-ons/email-marketing' },
                { text: 'Print on demand-dynamic mockups', link: '/zenith/featured-app/seller-add-ons/print-on-demand-dynamic-mockups' },
                { text: 'PWA', link: '/zenith/featured-app/seller-add-ons/pwa' },
                { text: 'Seller and customer badge', link: '/zenith/featured-app/seller-add-ons/seller-and-customer-badge' },
                { text: 'Seller buyer chat', link: '/zenith/featured-app/seller-add-ons/seller-buyer-chat' },
                { text: 'Seller membership', link: '/zenith/featured-app/seller-add-ons/seller-membership' },
                { text: 'Seller tags and categories', link: '/zenith/featured-app/seller-add-ons/seller-tags-and-categories' },
                { text: 'Seller time slot management', link: '/zenith/featured-app/seller-add-ons/seller-time-slot-management' },
                { text: 'Seller vacation app', link: '/zenith/featured-app/seller-add-ons/seller-vacation-app' },
                { text: 'Social media login', link: '/zenith/featured-app/seller-add-ons/social-media-login' },
                // { text: 'Social network tabs', link: '/zenith/featured-app/seller-add-ons/social-network-tabs' },
                { text: 'WhatsApp integration', link: '/zenith/featured-app/seller-add-ons/whatsapp-integration' }
              ]
            },
            {
              text: 'Marketplace product add-ons',
              collapsible: true,
              collapsed: true,
              items: [
                { text: 'Artist product design', link: '/zenith/featured-app/marketplace-product-add-ons/artist-product-design' },
                { text: 'Booking product', link: '/zenith/featured-app/marketplace-product-add-ons/booking-product' },
                { text: 'Crowdfunding', link: '/zenith/featured-app/marketplace-product-add-ons/crowdfunding' },
                { text: 'Custom options', link: '/zenith/featured-app/marketplace-product-add-ons/custom-options' },
                { text: 'Daily deals', link: '/zenith/featured-app/marketplace-product-add-ons/daily-deals' },
                { text: 'Delivery boy integration', link: '/zenith/featured-app/marketplace-product-add-ons/delivery-boy-integration' },
                { text: 'Delivery slot management', link: '/zenith/featured-app/marketplace-product-add-ons/delivery-slot-management' },
                { text: 'E-signature', link: '/zenith/featured-app/marketplace-product-add-ons/e-signature' },
                { text: 'Favorite product | seller', link: '/zenith/featured-app/marketplace-product-add-ons/favorite-product-seller' },
                { text: 'Global product', link: '/zenith/featured-app/marketplace-product-add-ons/global-product' },
                { text: 'Indian GST', link: '/zenith/featured-app/marketplace-product-add-ons/indian-gst' },
                { text: 'Make an offer', link: '/zenith/featured-app/marketplace-product-add-ons/make-an-offer' },
                { text: 'Pack product integration', link: '/zenith/featured-app/marketplace-product-add-ons/pack-product-integration' },
                { text: 'Pay what you want', link: '/zenith/featured-app/marketplace-product-add-ons/pay-what-you-want' },
                { text: 'Preorder integration', link: '/zenith/featured-app/marketplace-product-add-ons/preorder-integration' },
                { text: 'Product auction for seller', link: '/zenith/featured-app/marketplace-product-add-ons/product-auction-for-seller' },
                { text: 'Product expiry', link: '/zenith/featured-app/marketplace-product-add-ons/product-expiry' },
                { text: 'Product feed', link: '/zenith/featured-app/marketplace-product-add-ons/product-feed' },
                { text: 'Product review', link: '/zenith/featured-app/marketplace-product-add-ons/product-review' },
                { text: 'Slot pricing', link: '/zenith/featured-app/marketplace-product-add-ons/slot-pricing' },
                { text: 'Sponsored product', link: '/zenith/featured-app/marketplace-product-add-ons/sponsored-product' },
                { text: 'Stock management', link: '/zenith/featured-app/marketplace-product-add-ons/stock-management' }
              ]
            },
            {
              text: 'Marketplace other add-ons',
              collapsible: true,
              collapsed: true,
              items: [
                { text: 'Chat GPT', link: '/zenith/featured-app/marketplace-other-add-ons/chat-gpt' },
                { text: 'Easy group buy app', link: '/zenith/featured-app/marketplace-other-add-ons/easy-group-buy' },
                { text: 'Locate your pickup store', link: '/zenith/featured-app/marketplace-other-add-ons/locate-your-pickup-store' },
                { text: 'Multivendor database backup', link: '/zenith/featured-app/marketplace-other-add-ons/multivendor-database-backup' },
                { text: 'Seller blog', link: '/zenith/featured-app/marketplace-other-add-ons/seller-blog' },
                { text: 'Subscription product with Stripe Connect', link: '/zenith/featured-app/marketplace-other-add-ons/subscription-product-with-stripe-connect' },
                { text: 'Watermark', link: '/zenith/featured-app/marketplace-other-add-ons/watermark' }
              ]
            },
            {
              text:'Marketplace Miscellaneous Add-ons',
              collapsible: true,
              collapsed: true,
              items:[
                { text: 'Admin staff', link: '/zenith/featured-app/marketplace-miscellaneous-add-ons/admin-staff' },
                { text: 'Customer order management', link: '/zenith/featured-app/marketplace-miscellaneous-add-ons/customer-order-management' },
                { text: 'Hyperlocal marketplace', link: '/zenith/featured-app/marketplace-miscellaneous-add-ons/hyperlocal-marketplace' },
                { text: 'Multi location inventory', link: '/zenith/featured-app/marketplace-miscellaneous-add-ons/multi-location-inventory' },
                { text: 'Multivendor API', link: '/zenith/featured-app/marketplace-miscellaneous-add-ons/multivendor-api' },
                { text: 'Route insurance', link: '/zenith/featured-app/marketplace-miscellaneous-add-ons/route-insurance' },
                { text: 'Seller staff', link: '/zenith/featured-app/marketplace-miscellaneous-add-ons/seller-staff' },
                { text: 'SMS alert', link: '/zenith/featured-app/marketplace-miscellaneous-add-ons/sms-alert' },
                { text: 'Split cart', link: '/zenith/featured-app/marketplace-miscellaneous-add-ons/split-cart' },
                { text: 'Weglot translation', link: '/zenith/featured-app/marketplace-miscellaneous-add-ons/weglot-translation' }, 
                { text: 'ZOHO integration', link: '/zenith/featured-app/marketplace-miscellaneous-add-ons/zoho-integration' }               
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
              text: 'Hyperlocal marketplace',
              link: '/zenith/hyperlocal-marketplace/hyperlocal-marketplace'
            }
          ]
        },
        {
          text: 'Digital Marketplace',
          collapsible: true,
          collapsed: true,
          items: [
            {
              text: 'E book marketplace',
              link: '/zenith/digital-marketplace/e-book-marketplace'
            },
            {
              text: 'Music marketplace',
              link: '/zenith/digital-marketplace/music-marketplace'
            }
          ]
        },
        {
          text: 'B2B Marketplace',
          collapsible: true,
          collapsed: true,
          items: [
            {
              text: 'B2B marketplace',
              link: '/zenith/B2B-marketplace/B2B-marketplace'
            }
          ]
        },
        {
          text: 'C2C Marketplace',
          collapsible: true,
          collapsed: true,
          items: [
            {
              text: 'C2C marketplace',
              link: '/zenith/C2C-marketplace/C2C-marketplace'
            }
          ]
        },
        {
          text: 'Auction Marketplace',
          collapsible: true,
          collapsed: true,
          items: [
            {
              text: 'Auction marketplace',
              link: '/zenith/auction-marketplace/auction-marketplace'
            }
          ]
        },
        {
          text: 'Service-Based Marketplace',
          collapsible: true,
          collapsed: true,
          items: [
            {
              text: 'Appointment & Booking Marketplace',
              link: '/zenith/service-based-marketplace/appointment-&-booking-marketplace'
            },
            {
              text: 'Rental Marketplace',
              link: '/zenith/service-based-marketplace/rental-marketplace'
            },
            {
              text: 'Service Marketplace',
              link: '/zenith/service-based-marketplace/service-marketplace'
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
              text: 'Crowdfunding marketplace',
              link: '/zenith/crowdfunding-marketplace/crowdfunding-marketplace'
            }
          ]
        },
        {
          text: 'Freelancing Marketplace',
          collapsible: true,
          collapsed: true,
          items: [
            {
              text: 'Freelancing marketplace',
              link: '/zenith/freelancing-marketplace/freelancing-marketplace'
            }
          ]
        },
        {
          text: 'Creator & Print-on-Demand Marketplace',
          collapsible: true,
          collapsed: true,
          items: [
            {
              text: 'Artist Marketplace',
              link: '/zenith/creator-&-print-on-demand-marketplace/artist-marketplace'
            },
            {
              text: 'Print-on-Demand Marketplace',
              link: '/zenith/creator-&-print-on-demand-marketplace/print-on-demand-marketplace'
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
