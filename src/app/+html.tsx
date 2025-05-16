import { ScrollViewStyleReset } from 'expo-router/html'
import type { PropsWithChildren } from 'react'
export default function Root({ children }: PropsWithChildren) {
  return (
    <html lang="en" data-theme="softrack" className={'dark'}>
    <head>
      <title>Softrack</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <script dangerouslySetInnerHTML={{ __html: sw }} />
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
