---
type: posts
title: sse helper
description: simple sse abstraction. used in nextjs
date: 2024-09-25
tag: typescript, javascript, sse, nextks
---

Simple Server-Sent Event (SSE) helper for nextjs

```tsx
// api/sse/route.ts
import { sse } from '@/services/sse'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'

export async function GET(request: Request, props: { params: Params }) {
  return sse((encode) => ({
    type: 'bytes',
    start(controller) {
      // TODO: Do your thing here
    },
    cancel() {
      // TODO: Do the other thing here
    }
  }))
}
```

```tsx
// services/sse
/**
 * Creates a server-sent events (SSE) response.
 *
 * This function takes a callback that provides an `UnderlyingByteSource` for a `ReadableStream`.
 * It encodes messages as SSE data and returns a `Response` object with the appropriate headers
 * for an SSE connection.
 *
 * @param next - A callback function that takes an `encode` function and returns an `UnderlyingByteSource`.
 *               The `encode` function encodes a message string into a `Uint8Array` formatted as SSE data.
 * @returns A `Response` object with a `ReadableStream` and headers set for SSE.
 */
const sse = (
  next: (encode: (message: string) => Uint8Array) => UnderlyingByteSource
) => {
  const encoder = new TextEncoder()
  const encode = (message: string) => encoder.encode(`data: ${message}\n\n`)

  const stream = new ReadableStream(next(encode))
  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive'
    }
  })
}

export { sse }
```

This is a clean & reusable way to handle SSE. With this, you can:

- Serve realtime or frequently updated data to the client
- Build a notification service
- Serve LLM response

Enjoy
