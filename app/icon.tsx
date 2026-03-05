import { ImageResponse } from 'next/og'

export const size = { width: 64, height: 64 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'transparent',
        }}
      >
        <svg
          width="46"
          height="46"
          viewBox="0 0 32 32"
          fill="none"
          stroke="#1a1a2e"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="4,9 10,25 16,13 21,25" />
          <polyline points="21,25 21,9 28,9" />
        </svg>
      </div>
    ),
    { ...size }
  )
}
