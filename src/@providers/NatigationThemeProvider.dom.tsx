'use dom'
import React, { useCallback, useEffect, useState } from 'react'

import { Button } from '@components/Web/button'

type themeType = { theme: string; mode: 'dark' | 'light' }
export default function NavigationThemeProviderDom({ children, isDark }: {
  children: React.ReactNode,
  isDark: boolean
}) {
  const [theme, setTheme] = useState({} as themeType)
  const handleChangeTheme = useCallback(({ theme }: Partial<themeType>) => {
    setTheme((prev) => ({
      ...prev,
      theme: theme || prev.theme,
    }))
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme)
      localStorage.setItem('data-theme', theme)
    }
  }, [])

  const handleChangeMode = useCallback(({ mode }: Partial<themeType>) => {
    setTheme((prev) => ({
      ...prev,
      mode: mode || prev.mode,
    }))
    document.documentElement.classList.toggle('dark', mode === 'dark')
    localStorage.setItem('data-mode', mode!)
  }, [])

  useEffect(() => {
    const savedTheme =
      document.documentElement.getAttribute('data-theme') || 'green'
    const savedMode =
      document.documentElement.getAttribute('data-mode') || 'dark'
    setTheme({ theme: savedTheme, mode: savedMode as 'dark' | 'light' })
  }, [])
  return (
    <div className={'bg-background min-h-screen'}>
      {children}
      <Button className={'absolute right-0 bottom-0'} variant="outline"
              onClick={() => handleChangeMode({ mode: theme.mode === 'light' ? 'dark' : 'light' })}>Toggle
        Theme</Button>
    </div>
  )
}