---
type: post
title: Moving to Typescript
date: 2023-04-26
description: After coding extensively in Typescript for work, I can never look back to coding in JS, without feeling scared that anything might break.
tag: typescript, javascript,
author: irfanismail
image: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9fNdoIUfnG3PmcRvZGngnwVqs-uIvG99OQ3EmhNmaUJJjsrM5EjSKPcHk8Aq_feP0j08&usqp=CAU
---

After coding extensively in Typescript for work, I can never look back to coding in JS, without feeling scared that anything might break. For those who are unaware,

> Typescript is a superset language of Javascript that provides static typings and better developer experience.

Don't get me wrong, modern JS is amazing and I love how dynamic the language is. But at the same time, I also hate it. Because more often than not, it is the source for petty bugs.

> eh, how come `undefined`? What's this error again? `Uncaught TypeError: Cannot read property`

---

![bugs](https://media.giphy.com/media/xwEVCKetQWpeYyumJJ/giphy.gif)

### Goodbye petty bugs (almost)

Why almost? Because Javascript is inherently a loosely typed language, that Typescript is built on top of. But under the hood, **Typescript eventually transpiles to Javascript**.

Imagine a house built on soft ground. Think of Typescript as reinforcement pillars to make the house (Javascript) strong. However, the risk for the house to be damaged is still present, whenever there is ground movement. In the context of programming, these _reinforcements_ that Typescript provides to Javascript is designed to minimize the impact of uncertainty, but it can never eliminate the risk.

### Isn't that bad?

Not at all, there are many instances where we need that dynamicity when building our app. And Typescript allows that.

For instance, how do we tell the shape and type of the JSONs fetched from APIs? (assuming BE is **NOT NodeJS with [TRPC](https://trpc.io/)** or **in the same monorepo**) Sure, we can create the types that we expect and cast it, but are you willing to take the time and provide types for all API calls, along with possible errors?

![nope](https://media.giphy.com/media/QTfTCpkPsN4mwWm0I6/giphy.gif)

So, how do we handle it? This is the problem that GraphQL and TRPC tries to solve. So, pick your poison. For me, I embrace the uncertainty by handling it as safe as possible with runtime type-checks and catching the errors.

Not far off from what JS developers are doing 🤣

### Ok, what is Typescript good for?

Have you ever wondered, when we use certain package in Javascript, there are times the text editor (eg. VSCode) **just knows** what to write and give suggestions? No, its not GitHub Copilot or ChatGPT. It's the good-ol' **auto-completion!**

With Typescript, you can get auto-completion suggestions pretty much everywhere. Here's an example:

```ts filename="constants.ts"
/**
 * Dictionary of AKSARA's color palette.
 * @example AKSARA_COLOR.PRIMARY -> "#2563EB"
 */
export const AKSARA_COLOR = {
  BLACK: '#18181B',
  BLACK_H: '#18181B1A',
  WHITE: 'FFFFFF',
  DANGER: '#DC2626',
  DANGER_H: '#DC26261A',
  PRIMARY: '#2563EB',
  PRIMARY_H: '#2563EB1A',
  PRIMARY_DARK: '#0C204E',
  PRIMARY_DARK_H: '#0C204E1A',
  SUCCESS: '#22C55E',
  SUCCESS_H: '#22C55E1A',
  GREEN: '#2E804C'
  //...
} as const
```

Watch as I use this map elsewhere:

![auto-completion](/images/ideas/moving-to-typescript/auto-completion.png)

This alone just 10x my productivity or else, I'd be stuck checking and remembering the keys assigned.

_Sidenote: Thank the package developers who provides TS typings._

---

### Hover to Discover Types & Beauty of Type-Safety

When we build a lot of components, we sometimes forget the prop types that we assign. So, just hover lah:

![hover-discover](/images/ideas/moving-to-typescript/hover-discover.png)

And here is the type that we declared:

```ts filename="pyramid.tsx"
interface PyramidProps extends ChartHeaderProps {
  className?: string
  data?: ChartData<'bar', any[], string | number>
  unitX?: string
  unitY?: string
  minX?: number
  maxX?: number
  precision?: [number, number] | number // <-- what's going on here?
  enableLegend?: boolean
  enableGridX?: boolean
  enableGridY?: boolean
  //...
}
```

In this example, we have a prop `precision` that is assigned a union of type `number`, tuple `[number, number]` and `undefined` that comes from the `?` optional. This is telling us, that our component accepts any of the (3) specified types. If we provide anything other than the declared (3) types, big yikes incoming.

![type-safety](/images/ideas/moving-to-typescript/type-safety.png)

## Who is it good for? and who is it great for?

I can go on-and-on about what makes Typescript awesome to work with. But I will leave that for other posts.

Who is it good for? **JS Developers**. As I've pointed out, I just can't see myself coding in Javascript anymore, other than for scripting a workflow and many other developers have felt the same. The benefit of having type-security in a dynamic language will save you hundreds of hours of the time spent bug-fixing. On top of that, many jobs nowadays put Typescript as a prerequisite, so might as well

But who is it great for? **Package developers**. When building tools for other developers, Typescript mastery is the pinnacle skill you need to have to provide amazing DX (developer experience). With great DX, the package you build have significantly better chances of wide-adoption. And who wouldn't want that!

## Conclusion

Go learn Typescript. It is here to stay and will become defacto language for writing JS application in the foreseeable future.
