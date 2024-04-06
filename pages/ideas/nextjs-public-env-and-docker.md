---
type: post
title: debug story -  nextjs NEXT_PUBLIC env & docker
date: 2024-04-06
description: Nextjs has an interesting way of handling "secrets" on the client side, and you might face this issue if you build your app with Docker!
tag: nextjs, docker, environment variable
author: irfanismail
image: http://www.irfanismail.com/api/og?title=NEXT_PUBLIC%20and%20Docker&emoji=🔧
---

Nextjs has an interesting way of handling "secrets" on the client side, and you might face this issue if you build your app with Docker!

## Issue

I was faced with a bug where the route built on the client side, does not match the intended endpoint. To put some context, the feature is required to make an API call to a separate service (let's call it Service A). The code can be simplified to what's shown below

```ts
const url = `${process.env.NEXT_PUBLIC_SERVICE_A_URL}/${endpoint_A}`
fetch(url)

// Expected:    http://SERVICE_A_URL/endpoint_A
// Actual:      http://currentdomain/and/working/endpoint/undefined/endpoint_A
```

For those who are unaware, Nextjs has an interesting way of handling environment variables. To expose a environment variable to the client side, Nextjs requires you to append the variable with the `NEXT_PUBLIC` prefix.

From a security standpoint, this can be perceived as a security flaw, but in this case, environment variables can also be a handy tool to implement simple feature flags in your application -- and I reckon this is how Nextjs intends it to be used.

The bug only happens if it is hosted on the server! Meaning, if I were to build the "production" app locally, the feature works fine! This left me dumbfounded for hours, since I cannot reproduce it at all.

## Diagnosis

I initially thought this was a reverse proxy misconfiguration on Nginx since both the app and Service A live in the same VM instance. But no, simple `curl` result reveals Service A and main app are properly routed. Then, I checked whether there is a misconfiguration on the environment variables. But nothing wrong there too. So, I took a step back and tried to study the pattern of the problematic URL.

> URL: http://currentdomain/and/working/endpoint/undefined/endpoint_A

If we look back to how the URL is constructed, it's just a template string! But why do we get the current URL as part of the generated route? This was taken from the Network tab inside the browser. Then it clicks! When making a `fetch` call, if there is no `http://` at the front, it will assume its a relative path. What does that tell me? `process.env.NEXT_PUBLIC_SERVICE_A_URL` is undefined, which explains why the current URL is used!

This also means, the actual URL generated was: `undefined/endpoint_A`!

The next question is why. Why did the `NEXT_PUBLIC` variable go undefined, despite being present on server. The other environment variables are working fine, but not `NEXT_PUBLIC` ones.

## Cause

I stumbled across a [Reddit post](https://www.reddit.com/r/nextjs/comments/16am1t8/env_vars_in_production_do_not_work_even_with_next/) which also, faces the same problem, but hosted on Railway. Railway is a managed hosting platform that uses Docker or any OCI compliant images to deploy applications. Wait, Docker? I am using that too! One of the commenters explained:

> When you're building next.js make sure that .env isn't part of any ignore files used during the building process. For example, when doing this with Docker, if you were to have .env in the .dockerignore then the .env files won't be copied over during the Docker container's building process which will omit the NEXT_PUBLIC variables from being included as nextjs is built. The .env that is later included during runtime will only work in the nodejs environment.

![revelation](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzl4ZXU3cW1ibzd4bWJlaXJ0ajZhaTg1aGR2Y3QybnRkd2lweG5xZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Cdkk6wFFqisTe/giphy.gif)

Looking back at my own Docker setup, it's exactly what the post described! The .env file was ignored during the Docker build phase. And since `NEXT_PUBLIC` are [inlined within the JS files](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables#bundling-environment-variables-for-the-browser) during the build phase, the build has no way of referring to the env variables! So, even if you were to declare `NEXT_PUBLIC` in server, its pointless! The build phase is over. What a revelation!

## Solution

There are several ways to handle this;

1. Include .env in the image building phase

The easiest way to handle this is to just include the .env in. But this is not good practice. Environment variables are largely intended to be used for managing secrets. Including the environment secrets as part of the build image can be problematic from a security standpoint.

2. Stick to runtime environment variables

This basically means to completely ditch the `NEXT_PUBLIC` convention and treat all environment variables as secrets. All operations that require environment variables should be handled server side only, and communicated to client side via API if necessary. It's extra work, but it enforces a good practice where secrets should only live in the server!

3. Use an external data store (Vercel Edge Config, Upstash or similar)

Also requires you to ditch `NEXT_PUBLIC`. Used it before, but not a big fan of paid services for a very simple requirement. Would consider if I were to implement A/B testing, or feature flagging.

As for me, I will be sticking with (2), so no more environment variables on client side!

Hope you learn something form here, ciao!
