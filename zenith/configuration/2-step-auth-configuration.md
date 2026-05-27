---
title: 2-Step Auth Configuration
description: 2-Step Auth Configuration
date: 2025-10-07
author: Chirag Tyagi
---

# User Guide for 2-step Auth Configuration



**2-Step Authentication for seller and staff logins**
----------------------------------------
To enhance security across the platform, we've introduced a 2-Step Authentication process for both sellers and admin users.

This added layer of protection ensures that only authorized users can access their accounts.

**How It Works:**

During login, both sellers and admins will receive a One-Time Password (OTP) via email. This OTP must be entered to complete the login process, effectively verifying the user's identity.

**Admin Login Authentication:**

By enabling the "For Admin" option in the settings, the admin will receive an OTP every time they log in. This helps secure access to sensitive backend operations.

**Seller Login Authentication:**

Admins can choose to enable OTP authentication for sellers as well. Once this setting is active, sellers will be required to verify their email using an OTP during each login.

If the checkbox is selected, this becomes a mandatory step for all sellers.

[![2 factor](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/02/1twofa.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/02/1twofa.webp)

**Customizable Email Templates:**

Admins also have the flexibility to personalize the OTP email content. Simply click on the “Click here to edit mail template” link to customize the email according to your brand’s tone and messaging.

[![edit](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/02/2mailtemplateedit.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/02/2mailtemplateedit.webp)

SMS Authentication
----------------------
[![SMS](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/02/3sms.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/02/3sms.webp)

Users add an extra layer of login security by enabling SMS Authentication. During login, they enter a mobile number with country code and verify it using an OTP.

[![sh](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/02/4sendotp.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/02/4sendotp.webp)

Once verified, a login code is sent to verified number every time you sign in, ensuring secure access with each login.

[![sms](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/02/5enterotp.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/02/5enterotp.webp)

SMS Authentication only works when the Sms Alert feature app is configured.

There is also a feature for admin staff and seller staff login.  
  
Note – If the seller changes the Contact no., he/she needs to verify the no. again at the time of login.

Google Authentication
----------------------
[![g](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/02/6googleauth.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/02/6googleauth.webp)

The admin adds an extra layer of security by enabling the Google Authentication option and scanning a QR code with the Google Authenticator app during the first login.

[![G](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/02/7scan.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/02/7scan.webp)

Once linked, a new login code is generated in the app for each login, helping protect access to sensitive backend operations.

[![G](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/02/8verify.webp)](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/02/8verify.webp)