import { ScrollViewStyleReset } from 'expo-router/html'
import type { PropsWithChildren } from 'react'

// This file is web-only and used to configure the root HTML for every
// web page during static rendering.
// The contents of this function only run in Node.js environments and
// do not have access to the DOM or browser APIs.
export default function Root({ children }: PropsWithChildren) {
  return (
    <html lang="en" data-theme="softrack" className={'dark'}>
    <head>
      <title>Softrack</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <script dangerouslySetInnerHTML={{ __html: sw }} />
      <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      <ScrollViewStyleReset />
    </head>
    <body>{children}</body>
    </html>
  )
}

const sw = `
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(registration => {
            console.log('Service Worker registered with scope:', registration.scope);
        }).catch(error => {
            console.error('Service Worker registration failed:', error);
        });
    });
}
`
const themeScript = `
(function() {
              const themeDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
              const theme = localStorage.getItem('data-theme') || 'softrack'
              const mode = localStorage.getItem('data-mode') || themeDark
              document.documentElement.setAttribute('data-theme', theme)
              document.documentElement.setAttribute('data-mode', mode)
              document.documentElement.classList.toggle(mode)
            })();
`