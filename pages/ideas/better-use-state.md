---
type: post
title: useData - useState improved!
date: 2024-02-21
description: managing state the easy way. I no longer  want to see your 'stairway to useState-heaven'
tag: react, state management
author: irfanismail
image: http://www.irfanismail.com/api/og?title=useData&emoji=✅
---

First off, React useState hook sucks.

It can only manage a single primitive or an object one at a time.
It's ok if theres 1-2 in a component, but the moment you let it loose, 100% bet your codebase looks like this:

```tsx
const [open, setOpen] = useState(false)
const [loading, setLoading] = useState(true)
const [name, setName] = useState('name')
const [age, setAge] = useState(20)
const [car, setCar] = useState('whatever')

// ...
```

It's ridiculous to look at, and will be a hard reject if I see it in my PR reviews.

So, what does React team recommend as an alternative? [useReducer](https://react.dev/reference/react/useReducer#usereducer)

```tsx
import { useReducer } from 'react'

function reducer(state, action) {
  if (action.type === 'incremented_age') {
    return {
      age: state.age + 1
    }
  }
  throw Error('Unknown action.')
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { age: 42 })

  const onClick = () => {
    dispatch({ type: 'incremented_age' })
  }

  return (
    <>
      <button onClick={onClick}>Increment age</button>
      <p>Hello! You are {state.age}.</p>
    </>
  )
}
```

Astaga, another ridiculous hook to look at. My biggest problem with this: it is a complicated pattern for no good reason, which makes it stupid af. Why on earth would you want all your functions to be packed in a single reducer, discernible only by `type` argument. Unbelievable. A state manager should only do 1 thing and 1 thing only, just manage the state! Leave the function writing outside. Goodness...

So, what now? Zustand? Redux? Jotai? any random 3rd party library...

I have nothing against these libraries, but I just want a simple hook to manage multiple state in a component. It doesn't have to be complicated.

So, just write your own custom state hook. Here's what works for us.

```ts useData.ts
import { useReducer, useRef } from 'react'

type MutatorType = 'SET' | 'RESET'

interface SingleMutator<K extends keyof T, T> {
  key: K
  value: T[K]
}

// Enhance reducer to be generic and enforce action payload types based on the state type
function reducer<T>(
  state: T,
  action: { type: MutatorType; payload: SingleMutator<keyof T, T> | T }
) {
  switch (action.type) {
    case 'SET':
      const { key, value } = action.payload as SingleMutator<keyof T, T>
      return { ...state, [key]: value }
    case 'RESET':
      return { ...state, ...(action.payload as T) }
    default:
      throw new Error('Unrecognized dispatch command')
  }
}

/**
 * Universal state hook. General purpose state management
 * Accept a generic type, T which represents the type of the state
 * @param data State
 * @returns data, setData
 */
export const useData = <T extends Record<string, any>>(data: T) => {
  const original = useRef<T>(data)

  const [state, dispatch] = useReducer(reducer, data)

  const setData = <K extends keyof T>(key: K, value: T[K]) => {
    dispatch({ type: 'SET', payload: { key, value } })
  }

  const reset = (override?: T) => {
    dispatch({ type: 'RESET', payload: override ?? original.current })
  }

  return {
    data: state as T,
    setData,
    reset
  }
}
```

The code should be self-explanatory and here is how you would use it:

```tsx
const { data, setData } = useData({
  name: 'John',
  age: 36,
  profession: 'Engineer'
})

setData('name', 'Abu') // name: Abu
setData('age', 54) // age: 54

console.log(data) // { name: "Abu", age: 54, profession: "Engineer" }
```

We can probably do without the reducer function and all, oh well. But, see how easy that is, works like a map, and the API remains simple enough that anyone can guess what it does.

Also, big shoutout to [@amalasyrafs](https://github.com/amalasyrafs) for providing awesome type-safety & autocompletion to the hook! Now, TS can scream at you if you make a mistake. Check this out, ngl this is every TS dev's wet dream:

![usedata_1](/images/ideas/better-use-state/usedata_1.png)
![usedata_2](/images/ideas/better-use-state/usedata_2.png)
![usedata_3](/images/ideas/better-use-state/usedata_3.png)

Hope you learn something from here, ciao!
