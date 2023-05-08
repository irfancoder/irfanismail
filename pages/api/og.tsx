import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const config = {
  runtime: 'edge'
}

export default function handler(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)

    const [title, emoji] = [
      searchParams.get('title'),
      searchParams.get('emoji')
    ]

    return new ImageResponse(
      (
        <div
          style={{
            backgroundColor: 'black',
            backgroundSize: '150px 150px',
            height: '100%',
            width: '100%',
            display: 'flex',
            gap: '40px',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            padding: '0px 100px'
          }}
        >
          <div
            style={{
              fontSize: 100,
              textAlign: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              paddingLeft: '40px'
            }}
          >
            {emoji}
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginTop: 30,
              paddingLeft: '80px',
              paddingRight: '40px'
            }}
          >
            <div
              style={{
                fontSize: 60,
                fontStyle: 'normal',
                letterSpacing: '-0.025em',
                color: 'white',
                lineHeight: 1.4,
                fontWeight: 'bolder',
                whiteSpace: 'pre-wrap'
              }}
            >
              {title}
            </div>
            <div
              style={{
                fontSize: 24,
                fontStyle: 'normal',
                letterSpacing: '-0.025em',
                color: 'white',
                marginTop: 30,
                lineHeight: 1.4,
                fontWeight: 'bolder',
                whiteSpace: 'pre-wrap'
              }}
            >
              irfanismail.com
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        emoji: 'twemoji'
      }
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500
    })
  }
}
