---
type: post
title: the tree-shake mystery - part 2
date: 2023-04-17
description: The best thing you can do as a developer, is to build the right environment that supports tree shaking and pray that it works
tag: webpack, vite, tree-shake, optimization
author: irfanismail
image: /images/ideas/treeshake/webpack_0.png
---

_Note: This is an old post, rewritten for documentation and clarity._

This post is a continuation from [the tree-shake mystery -- part 1](/ideas/the-tree-shake-mystery-part-1).

This post is going to be concise, so lets go!

---

## Key Lessons

Let's recap a bit:

> Tree-shaking is a deadcode elimination process done by a bundler (eg. webpack, rollup etc) when building an application or a library.

The keyword here is **done by a bundler**, which means this process is automated. The best thing you can do as a developer, is to build the right environment that supports tree shaking and pray that it works lol. Which brings us to the very 1st point!

---

1. Tree shaking is a representation of what the bundler **'perceives'** of how loosely coupled or independent the export modules are.

When exporting modules, it is important to export it in a self-contained manner.

- For helper functions, make sure it is a pure function, where every argument ONLY comes from its parameters.
- For UI components, prioritize building in Single-File Component (SFC)

---

2. Single build output (where all your exports reside) is bound to be full of side-effects. Side effects can lead to unnecessary inclusion of deadcodes and is no bueno.

---

3. The key is to maintain clear separation of export modules in the build. This allows the bundler at the project level to easily import the individual modules, side-effect free.

---

4. For projects using `vite` / `rollup`, inside your config file, set the `preserveModules: true`

This will result in the final build to emulate the existing development directory, with some minor changes from minification and other build processes.

---

## Q&A

1. **Does having many build files result in a bigger build size?**

Nope, the build sizes will be similar, any difference is negligible.

2. **How to inspect what goes inside the build files?**

Read your output build `dist` and use a bundle analyzer

3. **Best format to build tree-shake friendly library?**

ESModule. UMD, AMD, CommonJS by nature, are filled with side-effects. So, when looking for libraries to use, check what format is their final build.

---

## Conclusion

That wraps up my posts on tree-shaking. Final thoughts, tree-shaking is a concept that would be beneficial to learn in-depth when building packages and libraries. If that is something you enjoy, welcome to the club~

When building apps, you only need to be concerned whether the packages you use is tree-shake friendly.
