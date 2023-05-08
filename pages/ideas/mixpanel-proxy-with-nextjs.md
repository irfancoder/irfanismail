---
type: post
title: mixpanel collection via proxy with nextjs
date: 2023-05-08
description: This guide goes through how to setup mixpanel collection via proxy in NextJS and why it should be considered as standard.
tag: mixpanel, proxy, nextjs, rewrite
author: irfanismail
image: http://www.irfanismail.com/api/og?title=mixpanel collection via proxy with nextjs&emoji=📖
---

# Overview

[Mixpanel](https://mixpanel.com/) is an event analytics service that helps developers to track user behavior inside their app. However, browser security and ad-block technology have their own sets of advancements that sometimes, they would actively hinder the analytics services from running. You may face issues such as [CORS](https://help.mixpanel.com/hc/en-us/articles/115004511086-CORS-errors), getting [blocked by ad-blockers](https://help.mixpanel.com/hc/en-us/articles/115004499463-Ad-Blockers-Affect-Mixpanel) and so on.

By implementing a proxy, we are masking the Mixpanel activity under our safe domain, so it can continue to operate without triggering flags from CORS and ad-blockers. This guide is an example of **in application level proxy**.

You can learn more about it in the [docs](https://developer.mixpanel.com/docs/collection-via-a-proxy#how-to-set-up-a-proxy) along with another type of proxy: web server level proxy.

_Read more: https://developer.mixpanel.com/docs/collection-via-a-proxy#how-to-set-up-a-proxy_

# Guide

## 1. Install Mixpanel into NextJS app

Choose one (1) installation method.

- Install via `<script />` tag

```tsx filename="_document.tsx" copy
import Script from "next/script";

// Override Mixpanel default API to use NextJS app as proxy.
const PROXIED_DOMAIN="http://localhost:3000/mp"

return (
  <Html>
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `const MIXPANEL_CUSTOM_LIB_URL = "${PROXIED_DOMAIN}/lib.min.js";
              (function(f,b){if(!b.__SV){var e,g,i,h;window.mixpanel=b;b._i=[];b.init=function(e,f,c){function g(a,d){var b=d.split(".");2==b.length&&(a=a[b[0]],d=b[1]);a[d]=function(){a.push([d].concat(Array.prototype.slice.call(arguments,0)))}}var a=b;"undefined"!==typeof c?a=b[c]=[]:c="mixpanel";a.people=a.people||[];a.toString=function(a){var d="mixpanel";"mixpanel"!==c&&(d+="."+c);a||(d+=" (stub)");return d};a.people.toString=function(){return a.toString(1)+".people (stub)"};i="disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking start_batch_senders people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove".split(" ");
              for(h=0;h<i.length;h++)g(a,i[h]);var j="set set_once union unset remove delete".split(" ");a.get_group=function(){function b(c){d[c]=function(){call2_args=arguments;call2=[c].concat(Array.prototype.slice.call(call2_args,0));a.push([e,call2])}}for(var d={},e=["get_group"].concat(Array.prototype.slice.call(arguments,0)),c=0;c<j.length;c++)b(j[c]);return d};b._i.push([e,f,c])};b.__SV=1.2;e=f.createElement("script");e.type="text/javascript";e.async=!0;e.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?
              MIXPANEL_CUSTOM_LIB_URL:"file:"===f.location.protocol&&"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\\/\\//)?"https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js":"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";g=f.getElementsByTagName("script")[0];g.parentNode.insertBefore(e,g)}})(document,window.mixpanel||[]);`
        }}
      />
    </Head>
  </Html>
)
```

_Read more: https://developer.mixpanel.com/docs/javascript-quickstart_

^Take note of the variable `PROXIED_DOMAIN`. Essentially, we are dedicating this particular route exclusively for Mixpanel SDK's usage. In this step, the script is simply installing the Mixpanel SDK from the proxied route.

- Install via Package Manager (NPM, Yarn, PNPM, etc)

_Read more: https://www.npmjs.com/package/mixpanel-browser_

---

## 2. Initialise Mixpanel instance `mixpanel.init()`

- Using Script

```tsx filename="_app.tsx" copy
// Override Mixpanel default API to use NextJS app as proxy.
const PROXIED_DOMAIN = 'http://localhost:3000/mp'

useEffect(() => {
  window.mixpanel.init('MIXPANEL_PROJECT_TOKEN', { api_host: PROXIED_DOMAIN })
}, [])
```

- Using Package Manager

```tsx filename="_app.tsx" copy
import mixpanel from 'mixpanel-browser'

// Override Mixpanel default API to use NextJS app as proxy.
const PROXIED_DOMAIN = 'http://localhost:3000/mp'

useEffect(() => {
  mixpanel.init('MIXPANEL_PROJECT_TOKEN', { api_host: PROXIED_DOMAIN })
}, [])
```

`MIXPANEL_PROJECT_TOKEN` can be obtained from **Project Settings > Access Keys**.

---

## 3. Declare the rewrite routes in `next.config.js`

```js filename="next.config.js" copy
module.exports = {
  // ...
  async rewrites() {
    return [
      {
        source: '/mp/lib.min.js',
        destination: 'https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js'
      },
      {
        source: '/mp/lib.js',
        destination: 'https://cdn.mxpnl.com/libs/mixpanel-2-latest.js'
      },
      {
        source: '/mp/decide',
        destination: 'https://decide.mixpanel.com/decide'
      },
      {
        source: '/mp/:slug*',
        destination: 'https://api.mixpanel.com/:slug*'
      }
    ]
  }
}
```

The first two (2) routes are for installing the SDK on client browser. If you are installing via Package Manager, you may omit them.

The 3rd route is unexplained in the docs, but my gut feeling tells me, it serves to decide which Mixpanel API service for your users to hit. A form of client-side, load-balancing so to speak. If I'm not mistaken, Netflix also does the same thing to load balance the video streaming service.

The most important route for you to take note of is the **wildcard route**. Every event driven activity by Mixpanel will be handled in this wildcard route. So, keep it as it is.

---

## 4. That's it. You can now track events with the proxy!

```ts
// via script
window.mixpanel.track('page_view', { id: '...' })

// via NPM
import mixpanel from 'mixpanel-browser'
mixpanel.track('page_view', { id: '...' })
```

---

## Conclusion

It's really easy to set this up. You don't need to spin a dedicated web server just to proxy Mixpanel's activity if you're already building with NextJS. Hope this helps.
