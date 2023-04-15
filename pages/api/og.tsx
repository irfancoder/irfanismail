import { ImageResponse } from '@vercel/og'
import { NextApiRequest } from 'next'
import React from 'react'

export const config = {
  runtime: 'edge'
}

export default function handler(req: NextApiRequest) {
  const { text } = req.body
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          color: '#f3f4f6',
          background: '#121212',
          width: '100%',
          height: '100%',
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {text}
      </div>
    ),
    {
      width: 1200,
      height: 600
    }
  )
}
