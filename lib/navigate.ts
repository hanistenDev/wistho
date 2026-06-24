import type { MouseEvent } from 'react'

export function sectionHref(hash: string) {
  return hash.startsWith('#') ? `/${hash}` : `/#${hash}`
}

export function navigateToSection(hash: string) {
  const target = hash.startsWith('#') ? hash : `#${hash}`
  const isHome = window.location.pathname === '/'

  if (!isHome) {
    window.location.href = sectionHref(target)
    return
  }

  const element = document.querySelector(target)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export function navigateHome(e?: MouseEvent<HTMLAnchorElement>) {
  const isHome = window.location.pathname === '/'

  if (!isHome) {
    return
  }

  e?.preventDefault()
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
