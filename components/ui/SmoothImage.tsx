'use client'

import Image from 'next/image'
import { useState } from 'react'

type SmoothImageProps = {
  src: string
  alt: string
  className?: string
  imgClassName?: string
  priority?: boolean
  sizes?: string
  objectPosition?: string
  aspectRatio?: string
  shouldLoad?: boolean // Nur laden wenn true
}

export default function SmoothImage({
  src,
  alt,
  className = '',
  imgClassName = '',
  priority = false,
  sizes,
  objectPosition = 'center',
  aspectRatio,
  shouldLoad = true, // Standard: sofort laden
}: SmoothImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div
      className={`relative overflow-hidden ${aspectRatio || ''} ${className}`}
      style={aspectRatio ? undefined : { position: 'absolute', inset: 0 }}
    >
      {/* Placeholder Skeleton mit Shimmer - smooth fade-out */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-white/5 via-white/10 to-white/5 animate-shimmer transition-opacity duration-700 ease-out ${
          isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      />

      {/* Bild mit Fade-In Animation - nur laden wenn shouldLoad=true */}
      {shouldLoad && (
        <Image
          src={src}
          alt={alt}
          fill
          className={`transition-all duration-700 ease-out ${
            isLoaded
              ? 'opacity-100 scale-100 blur-0'
              : 'opacity-0 scale-[1.02] blur-sm'
          } ${imgClassName}`}
          sizes={sizes}
          quality={95}
          priority={priority}
          loading={priority ? undefined : 'lazy'}
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          style={{
            objectPosition,
          }}
        />
      )}
    </div>
  )
}

