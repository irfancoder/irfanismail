---
type: post
title: mastering recursion
date: 2023-09-21
description: I believe recursion is a technique we have to master and get comfortable with, if we want to level up our skill as software engineers
tag: frontend, recursion
author: irfanismail
---

_tldr_; Learn to embrace recursion because it is an amazing technique that solves a certain pattern of problems you might have encountered.

---

I believe recursion is a technique we have to master and get comfortable with, if we want to level up our skill as software engineers. Recently, I found a Reddit post, [How often do you use recursion in your day-to-day work?](https://www.reddit.com/r/webdev/comments/16n7mju/how_often_do_you_use_recursion_in_your_daytoday/), where most of the comments downplay the importance of recursion and it made me wonder why. I can think of a number of use-cases that are found in plain sight and they would not be built by none other than recursions.

For example, the file directory component. The best way to describe this component is with a tree data structure, where a file is a node and folder is a collection of nodes. We can go N-levels deep by creating folders within folders on repeat. So, when trying to display them, it is close to insanity to employ for-loop at all N-levels.

Another example, nested menu / dropdown. It is pretty common to see grouped menus in a `<select />` component. Then came `group > subgroup` interface. Then, `group > subgroup > subsubgroup`. You get the point.

### Embrace recursion

Yes, recursion is scary. One small mistake, recursions will go on repeat forever until `RangeError: Maximum call stack size exceeded`. But that should not stop you from learning it. Only then, you will come to appreciate it. In my own experience, recursions have saved me a lot of development time and lines of code written. What could have been N-levels deep for-loop or a combination of while & for-loop algorithm, now is written in a function that calls itself with **clear exit conditions**. (which brings me to my next point)

There are 4-5 types of recursion that we need to be aware of:

1. Tail recursion
2. Head recursion
3. Tree recursion
4. Nested recursion
5. Indirect recursion

Every type is good to learn except for nested & indirect recursion. Learn more here: [Type of recursions](https://www.geeksforgeeks.org/types-of-recursions/)

### When to use recursion?

Begin by asking the following questions:

1. Is it really a recursion problem? Think hard.
2. If yes, is recursion really the **best way** to tackle the problem? (eg. tree DS is a dead giveaway)

If 'yes' to both, only then we have a solid reason to employ recursion.

### Tips on writing recursions

1. Understand the data structure to recurse in great detail. Often times, buggy recursion stems from the lack of understanding of the data structure, hence first point of failure for many.
2. Always define the exit condition (some people call it - base case). If you are building a component, returning the primitive unit.
3. Take into account possibilities of not reaching the exit condition. Null checks, undefined.
4. Avoid nesting recursion & indirect recursion at all cost. This will be painful to debug & get ridiculous time & space complexity.
5. Use recursive parameter to pass additional info to child

## Conclusion

Recursion is an amazing technique to solve a unique pattern of problems in FE development space. The key is to develop the nose for it, recognizing where & how it fits into the thing you're building. A good recursion will save you a lot of lines of code and still dictate a huge influence over how your component behaves.
